package br.com.buscaTerapia.buscaTerapiaServer.domains;

import jakarta.persistence.Entity;

import java.util.Date;
@Entity
public class Pacient extends User {

    private Long fkUser;
    private Date birthdate;
    private String medicalDiagnostic;

    public Pacient(Long idUser, String name, String cpf, String lastName, String email, String password, String phoneNumber, String profilePicture, int accountStatus, String aboutMe, Long fkUser, Date birthdate, String medicalDiagnostic) {
        super(idUser, name, cpf, lastName, email, password, phoneNumber, profilePicture, accountStatus, aboutMe);
        this.fkUser = fkUser;
        this.birthdate = birthdate;
        this.medicalDiagnostic = medicalDiagnostic;
    }


}
