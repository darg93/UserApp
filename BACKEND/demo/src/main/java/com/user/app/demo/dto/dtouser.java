package com.user.app.demo.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.user.app.demo.model.User;

public interface dtouser extends JpaRepository<dtouser, Integer> {

    public List<dtouser> findByNombreContaining(String name);

    public void save(User user);

}