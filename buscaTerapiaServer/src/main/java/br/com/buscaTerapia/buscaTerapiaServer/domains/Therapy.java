package br.com.buscaTerapia.buscaTerapiaServer.domains;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Therapy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTherapy;
    private String statusTherapy;

    public Therapy(Long idTherapy, String statusTherapy) {
        this.idTherapy = idTherapy;
        this.statusTherapy = statusTherapy;
    }
}
