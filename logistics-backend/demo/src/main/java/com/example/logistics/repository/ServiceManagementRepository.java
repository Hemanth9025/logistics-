package com.example.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.logistics.model.ServiceManagement;

@Repository
public interface ServiceManagementRepository extends JpaRepository<ServiceManagement, Long> {
}
