package org.example.finaltestmodule4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.example.finaltestmodule4.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCase(String name);
}
