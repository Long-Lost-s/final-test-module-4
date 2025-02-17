package org.example.finaltestmodule4.repository;

import org.example.finaltestmodule4.model.Category;
import org.example.finaltestmodule4.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String name);
    List<Product> findByCategory(Category category);
}
