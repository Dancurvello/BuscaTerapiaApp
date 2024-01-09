package br.com.buscaTerapia.buscaTerapiaServer.controllers;

import br.com.buscaTerapia.buscaTerapiaServer.domains.User;
import br.com.buscaTerapia.buscaTerapiaServer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    public UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        // Aqui você pode adicionar lógica para verificar a existência do usuário, validar campos, etc.
        userRepository.save(user);
        return "Usuário registrado com sucesso!";
    }
}
