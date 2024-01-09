package br.com.buscaTerapia.buscaTerapiaServer.repository;


import br.com.buscaTerapia.buscaTerapiaServer.domains.Therapist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TherapistRepository extends JpaRepository<Therapist, Long> {
}
