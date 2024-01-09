package br.com.buscaTerapia.buscaTerapiaServer.repository;

import br.com.buscaTerapia.buscaTerapiaServer.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
