
package com.example.logistics.repository;
import com.example.logistics.model.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
    
    List<Warehouse> findByName(String name);
    
    List<Warehouse> findByMaxItemsGreaterThan(int maxItems);
    
    List<Warehouse> findByItemsContaining(String item);
    
    
}