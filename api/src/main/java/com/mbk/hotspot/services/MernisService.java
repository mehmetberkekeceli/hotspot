package com.mbk.hotspot.services;

import jakarta.xml.ws.BindingProvider;
import org.springframework.stereotype.Service;
import tr.com.mernis.client.KPSPublic;
import tr.com.mernis.client.KPSPublicSoap;

import java.net.URL;
import java.util.Map;

@Service
public class MernisService {

    private final KPSPublicSoap kpsPublicSoap;

    public MernisService() {
        try {
            URL wsdlURL = new URL("https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL");
            KPSPublic service = new KPSPublic(wsdlURL);
            this.kpsPublicSoap = service.getKPSPublicSoap();

            // Timeout ayarları
            BindingProvider bindingProvider = (BindingProvider) kpsPublicSoap;
            Map<String, Object> requestContext = bindingProvider.getRequestContext();
            requestContext.put("com.sun.xml.ws.connect.timeout", 10000);
            requestContext.put("com.sun.xml.ws.request.timeout", 10000);

            // SOAP isteğini loglamak için debug ayarları
            System.setProperty("com.sun.xml.ws.transport.http.client.HttpTransportPipe.dump", "true");
            System.setProperty("com.sun.xml.internal.ws.transport.http.client.HttpTransportPipe.dump", "true");

        } catch (Exception e) {
            throw new RuntimeException("MERNİS servisi başlatılamadı!", e);
        }
    }

    public boolean validateIdentity(long tcKimlikNo, String ad, String soyad, int dogumYili) {
        try {
            // '-' ve '_' karakterlerini boşluğa çeviriyoruz
            String cleanedAd = ad.trim().replaceAll("[-_]", " ").replaceAll("\\s+", " ").toUpperCase();
            String cleanedSoyad = soyad.trim().toUpperCase();

            boolean isValid = kpsPublicSoap.tcKimlikNoDogrula(tcKimlikNo, cleanedAd, cleanedSoyad, dogumYili);
            System.out.println("MERNİS Yanıtı: " + isValid);
            return isValid;
        } catch (Exception e) {
            System.err.println("NVİ MERNİS servisine bağlanırken hata oluştu: " + e.getMessage());
            return false;
        }
    }


}
