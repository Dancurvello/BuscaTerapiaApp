package br.com.buscaTerapia.buscaTerapiaServer.domains;

import jakarta.persistence.Entity;

@Entity
public class Therapist extends User {
    private Long fkUser;
    private String cnpj;
    private Long fkLocalization;
    private String street;

    private String numberLocal;
    private String complement;

    private String typeSessionLocal;

    private Long fkSpecialty;

    private Long fkHealthInsurance;

    private String licenseNumber;

    private String paymentMethod;

    public Therapist (Long idUser, String name, String cpf, String lastName, String email, String password, String phoneNumber, String profilePicture, int accountStatus, String aboutMe, Long fkUser, String cnpj, Long fkLocalization, String street, String numberLocal, String complement, String typeSessionLocal, Long fkSpecialty, Long fkHealthInsurance, String licenseNumber, String paymentMethod) {
        super(idUser, name, cpf, lastName, email, password, phoneNumber, profilePicture, accountStatus, aboutMe);
        this.fkUser = fkUser;
        this.cnpj = cnpj;
        this.fkLocalization = fkLocalization;
        this.street = street;
        this.numberLocal = numberLocal;
        this.complement = complement;
        this.typeSessionLocal = typeSessionLocal;
        this.fkSpecialty = fkSpecialty;
        this.fkHealthInsurance = fkHealthInsurance;
        this.licenseNumber = licenseNumber;
        this.paymentMethod = paymentMethod;
    }



}
