package org.example.finaltestmodule4.service;

import lombok.RequiredArgsConstructor;
import org.example.finaltestmodule4.model.Category;
import org.example.finaltestmodule4.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
