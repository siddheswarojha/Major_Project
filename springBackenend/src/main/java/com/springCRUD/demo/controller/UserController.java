package com.springCRUD.demo.controller;

import com.springCRUD.demo.exception.ComplaintNotFoundException;
import com.springCRUD.demo.exception.UserNotFoundException;
//import com.springCRUD.demo.model.GoogleLoginUser;
import com.springCRUD.demo.model.User;
import com.springCRUD.demo.model.UserComplaint;
import com.springCRUD.demo.model.UserLogin;
import com.springCRUD.demo.repository.ComplaintRepository;
//import com.springCRUD.demo.repository.GoogleLoginUserRepository;
import com.springCRUD.demo.repository.UserLoginRepository;
import com.springCRUD.demo.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private UserLoginRepository userLoginRepository;


    // To add the user to database
    @PostMapping("/registerUser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    //for userLogin
//    @PostMapping("/loginUser")
//    public ResponseEntity<UserLogin> login(@RequestBody @NotNull UserLogin userLogin) {
//        UserLogin loggedInUser = userLoginRepository.findByEmailAndPassword(userLogin.getEmail(), userLogin.getPassword());
//        if (loggedInUser != null) {
//            return ResponseEntity.ok(loggedInUser);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }

    // To add the Complaint to database
    @PostMapping("/registerComplaint")
    UserComplaint newComplaint(@RequestBody UserComplaint newComplaint){
        return complaintRepository.save(newComplaint);
    }

    // get users details from database
    @GetMapping("/allUser")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    // get Complaint details from database
    @GetMapping("/allComplaint")
    List<UserComplaint> getAllComplaints(){
        return complaintRepository.findAll();
    }

    // get user with specified id
    @GetMapping("/getUser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    // edit particular user using their id
    @PutMapping("/editUser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));

    }


    // to delete particular user with id
    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted Successfully";
    }

    // to delete a complaint
    @DeleteMapping("/deleteComplaint/{id}")
    String deleteComplaint(@PathVariable Long id){
        if(!complaintRepository.existsById(id)){
            throw new ComplaintNotFoundException(id);
        }
        complaintRepository.deleteById(id);
        return "Complaint with id "+id+" has been deleted Successfully";
    }


}
