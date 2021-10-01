package com.user.app.demo.model;

import javax.persistence.Column;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan
@Table(name = "ROL")
public class Role {

    @org.springframework.data.annotation.Id
    @Column(name = "ID_ROL")
    private Integer id;

    @Column
    private String nombre;

    /**
     * Getters And Setters
     */

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}