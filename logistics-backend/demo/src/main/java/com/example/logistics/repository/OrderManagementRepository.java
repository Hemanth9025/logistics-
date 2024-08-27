package com.example.logistics.repository;

import com.example.logistics.model.OrderManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderManagementRepository extends JpaRepository<OrderManagement, Long> {
}
