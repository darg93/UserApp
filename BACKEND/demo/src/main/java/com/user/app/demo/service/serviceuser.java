package com.user.app.demo.service;

import com.user.app.demo.dto.dtouser;
import com.user.app.demo.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class serviceuser {

    @Autowired
    private dtouser userDTO;


    @GetMapping("/list")
    public List<dtouser> list(){
        return userDTO.findAll();
    }

    @GetMapping("/list/{name}")
    public List<dtouser> listUserByName(@PathVariable("name") String name){
        return userDTO.findByNombreContaining(name);
    }

    @GetMapping("/{id}")
    public Optional<dtouser> getUser(@PathVariable("id") Integer id){
        return userDTO.findById(id);
    }

    @PostMapping("/save")
    public User save(@RequestBody User user){
        userDTO.save(user);
        return user;
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Integer id){
        userDTO.deleteById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody User user){
        userDTO.save(user);
    }

}
