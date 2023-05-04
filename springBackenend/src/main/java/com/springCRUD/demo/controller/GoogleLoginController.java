//package com.springCRUD.demo.controller;
//
//import com.springCRUD.demo.model.GoogleLoginUser;
//import com.springCRUD.demo.model.User;
//import com.springCRUD.demo.repository.GoogleLoginUserRepository;
//import com.springCRUD.demo.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.io.IOException;
//import java.security.GeneralSecurityException;
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.Optional;
//
//
//@RestController
//@CrossOrigin("http://localhost:3000")
//public class GoogleLoginController {
//
//    // from googleLogin
//    @Autowired
//    private GoogleLoginUserRepository googleLoginUserRepository;
//
//    @PostMapping("/google-login")
//    public ResponseEntity<?> googleLogin(@RequestBody GoogleLoginRequest request) {
//        String idToken = request.getIdToken();
//
//        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), JacksonFactory.getDefaultInstance())
//                .setAudience(Collections.singletonList(CLIENT_ID))
//                .build();
//
//        try {
//            GoogleIdToken idTokenObj = verifier.verify(idToken);
//            if (idTokenObj != null) {
//                GoogleIdToken.Payload payload = idTokenObj.getPayload();
//                String email = payload.getEmail();
//                String name = (String) payload.get("name");
//                String pictureUrl = (String) payload.get("picture");
//
//                Optional<GoogleLoginUser> existingUser = googleLoginUserRepository.findByEmail(email);
//                GoogleLoginUser googleLoginUser;
//                if (existingUser.isPresent()) {
//                    googleLoginUser = existingUser.get();
//                } else {
//                    googleLoginUser = new GoogleLoginUser();
//                    googleLoginUser.setEmail(email);
//                }
//
//                googleLoginUser.setName(name);
//                googleLoginUser.setPictureUrl(pictureUrl);
//
//                googleLoginUserRepository.save(googleLoginUser);
//
//                // Generate JWT token and return to the client
//
//                GoogleLoginUser googleLoginUser1 = new GoogleLoginUser(googleLoginUser.getEmail(), "", new ArrayList<>());
//                String jwtToken = jwtUtils.generateJwtToken(googleLoginUser1);
//
//            } else {
//                return ResponseEntity.badRequest().body("Invalid ID token.");
//            }
//        } catch (GeneralSecurityException | IOException e) {
//            return ResponseEntity.badRequest().body("Error verifying ID token.");
//        }
//
//        // Return JWT token to client
//
//
//    }
//    // ends
//
//}
