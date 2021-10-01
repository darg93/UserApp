package com.octans.models;

import javax.persistence.*;

@Entity
@Table(name = "USUARIO")
public class User {

    @Id
    @Column(name = "ID_USUARIO")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer id_rol;

    @Column
    private String nombre;

    @Column
    private Character activo;

}
