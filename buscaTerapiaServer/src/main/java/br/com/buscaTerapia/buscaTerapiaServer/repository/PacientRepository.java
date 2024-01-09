package br.com.buscaTerapia.buscaTerapiaServer.repository;

import br.com.buscaTerapia.buscaTerapiaServer.domains.Pacient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacientRepository extends JpaRepository<Pacient, Long> {
}
