package br.com.buscaTerapia.buscaTerapiaServer.domains;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private String name;
    private String cpf;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private String profilePicture;
    private int accountStatus;
    private String aboutMe;


    public User(Long idUser, String name, String cpf, String lastName, String email, String password, String phoneNumber, String profilePicture, int accountStatus, String aboutMe) {
        this.idUser = idUser;
        this.name = name;
        this.cpf = cpf;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.profilePicture = profilePicture;
        this.accountStatus = accountStatus;
        this.aboutMe = aboutMe;
    }


}



