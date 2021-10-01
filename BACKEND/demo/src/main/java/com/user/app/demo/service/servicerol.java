package com.user.app.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/role")
public class servicerol {

    @Autowired
    private servicerol roleDTO;

    @GetMapping("/list")
    public List<servicerol> list(){
        return roleDTO.findAll();
    }

    private List<servicerol> findAll() {
        return null;
    }
}
