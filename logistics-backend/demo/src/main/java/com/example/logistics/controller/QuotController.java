
package com.example.logistics.controller;

import com.example.logistics.model.Quot;
import com.example.logistics.service.QuotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class QuotController {

    @Autowired
    private QuotService quotService;

    @PostMapping("/get-quote")
    public ResponseEntity<String> getQuote(@RequestBody Quot quot) {
        try {
            quotService.saveQuote(quot);
            return ResponseEntity.ok("Quotation request saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred: " + e.getMessage());
        }
    }
}
