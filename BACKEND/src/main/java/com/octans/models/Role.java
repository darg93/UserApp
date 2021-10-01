package com.octans.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ROL")
public class Role {

    @Id
    @Column(name = "ID_ROL")
    private Integer id;

    @Column(name = "NOMBRE")
    private String nombre;

}
