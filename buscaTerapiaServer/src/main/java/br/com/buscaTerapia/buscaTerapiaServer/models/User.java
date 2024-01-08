package br.com.buscaTerapia.buscaTerapiaServer.models;



public class User {
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



