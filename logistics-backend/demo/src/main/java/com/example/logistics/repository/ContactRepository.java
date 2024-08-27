package com.example.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.logistics.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
