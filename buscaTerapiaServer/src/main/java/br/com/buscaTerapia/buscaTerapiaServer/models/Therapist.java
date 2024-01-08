package br.com.buscaTerapia.buscaTerapiaServer.models;

public class Therapist extends User {
    private Long fkUser;

    public Therapist(Long idUser, String name, String cpf, String lastName, String email, String password, String phoneNumber, String profilePicture, int accountStatus, String aboutMe, Long fkUser) {
        super(idUser, name, cpf, lastName, email, password, phoneNumber, profilePicture, accountStatus, aboutMe);
        this.fkUser = fkUser;
    }



}
