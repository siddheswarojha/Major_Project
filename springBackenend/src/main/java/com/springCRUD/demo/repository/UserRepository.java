package com.springCRUD.demo.repository;

import com.springCRUD.demo.model.User;
import com.springCRUD.demo.model.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public static User createUser(User user) {
        return null;
    }

    public static boolean checkEmail(String email) {
        return false;
    }
}
