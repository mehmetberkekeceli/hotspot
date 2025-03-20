# Hotspot Uygulaması

Bu proje, basit bir hotspot giriş sistemi sunar. Kullanıcılar, kimlik bilgilerini girerek NVI (Nüfus ve Vatandaşlık İşleri) Mernis servisine bir sorgu gönderir. Eğer bilgiler doğrulanırsa, kullanıcı ana sayfaya yönlendirilir. Projenin temel amacı, güvenli ve hızlı bir kimlik doğrulama mekanizması sağlamaktır.

## Özellikler
- Kullanıcı dostu arayüz
- NVI Mernis servisi ile kimlik doğrulama
- Başarılı giriş sonrası ana sayfaya yönlendirme
- Basit ve hızlı yapı

## Kurulum

1. **Depoyu Klonlayın:**
   git clone https://github.com/mehmetberkekeceli/hotspot.git

2. **Proje Dizinine Gidin:**
   cd hotspot

3. **Gerekli Bağımlılıkları Yükleyin:**
   Projenizde hangi teknolojileri kullandığınıza bağlı olarak (örneğin Node.js, Python vb.), bağımlılıkları yüklemek için aşağıdaki komutlardan uygun olanı çalıştırın:
   npm install  # Eğer Node.js kullanıyorsanız
   # veya
   pip install -r requirements.txt  # Eğer Python kullanıyorsanız

4. **Yapılandırma:**
   - NVI Mernis servisine bağlanmak için gerekli API anahtarlarını veya kimlik doğrulama bilgilerini bir `.env` dosyasına ekleyin. Örnek:
     NVI_API_KEY=your_api_key
     NVI_ENDPOINT=https://mernis-api-url

5. **Uygulamayı Çalıştırın:**
   npm start  # Node.js için
   # veya
   python app.py  # Python için

## Kullanım
1. Uygulamayı başlatın.
2. Giriş ekranında kimlik bilgilerinizi (örneğin TC Kimlik No ve diğer gerekli bilgiler) girin.
3. Bilgiler NVI Mernis servisine gönderilir ve doğrulanırsa ana sayfaya yönlendirilirsiniz.

## Gereksinimler
- [Node.js](https://nodejs.org/) (veya projenize uygun diğer bir runtime)
- NVI Mernis servisine erişim (API anahtarı veya yetkilendirme)
- İnternet bağlantısı

## Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz:
1. Depoyu fork edin.
2. Yeni bir özellik veya hata düzeltmesi için bir dal (branch) oluşturun:
   git checkout -b feature/yeni-ozellik
3. Değişikliklerinizi yapın ve commit edin:
   git commit -m "Yeni özellik eklendi"
4. Dalınızı ana depoya push edin ve bir Pull Request açın.

## Lisans
Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.

## İletişim
Sorularınız veya önerileriniz için:  
- E-posta: [mehmetberkekeceli@example.com](mailto:berke.keceli96@gmail.com)  
- GitHub: [mehmetberkekeceli](https://github.com/mehmetberkekeceli)

- Login =>
- ![Login](https://github.com/user-attachments/assets/9dd8d463-1918-47dc-bc03-10e9522c7dc0)

- Dashboard =>
- ![Dashboard](https://github.com/user-attachments/assets/7843cedf-3fa5-4680-844d-7885c71625ee)

