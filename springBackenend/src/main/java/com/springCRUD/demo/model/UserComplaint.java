package com.springCRUD.demo.model;

import jakarta.persistence.*;

import java.sql.Blob;

@Entity
public class UserComplaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String username;
    private String email;
    private String contactNumber;
    private String description;
//    @Lob
//    private Blob attachment;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public Blob getAttachment() {
//        return attachment;
//    }
//
//    public void setAttachment(Blob attachment) {
//        this.attachment = attachment;
//    }
}
