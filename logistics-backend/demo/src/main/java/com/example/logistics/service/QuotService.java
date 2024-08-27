package com.example.logistics.service;

import com.example.logistics.model.Quot;
import com.example.logistics.repository.QuotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuotService {

    @Autowired
    private QuotRepository quotRepository;

    public void saveQuote(Quot quot) {
        quotRepository.save(quot);
    }
}