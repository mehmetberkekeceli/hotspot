package com.mbk.hotspot.controllers;

import com.mbk.hotspot.services.MernisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nvi")
public class MernisController {

    private final MernisService mernisService;

    public MernisController(MernisService mernisService) {
        this.mernisService = mernisService;
    }

    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateIdentity(
            @RequestParam long tcKimlikNo,
            @RequestParam String ad,
            @RequestParam String soyad,
            @RequestParam int dogumYili) {

        boolean result = mernisService.validateIdentity(tcKimlikNo, ad, soyad, dogumYili);
        return ResponseEntity.ok(result);
    }
}
