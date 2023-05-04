package com.springCRUD.demo.repository;

import com.springCRUD.demo.model.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLogin, Long> {

    UserLogin findByEmailAndPassword(String email, String password);


}
