package br.com.buscaTerapia.buscaTerapiaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BuscaTerapiaServerApplication {

	public static void main(String[] args) {

		SpringApplication.run(BuscaTerapiaServerApplication.class, args);
		System.out.println("Server is running...");
	}

}
