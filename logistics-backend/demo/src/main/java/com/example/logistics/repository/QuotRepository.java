package com.example.logistics.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.logistics.model.Quot;

public interface QuotRepository extends JpaRepository<Quot, Long> {
}
