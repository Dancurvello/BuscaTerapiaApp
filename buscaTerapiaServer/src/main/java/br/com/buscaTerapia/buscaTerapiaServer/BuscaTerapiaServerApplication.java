package br.com.buscaTerapia.buscaTerapiaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "br.com.buscaTerapia.buscaTerapiaServer.domains") // informando ao spring onde estão as entidades
public class BuscaTerapiaServerApplication {

	public static void main(String[] args) {

		SpringApplication.run(BuscaTerapiaServerApplication.class, args);
		System.out.println("Server is running...");
	}

}
