package org.npci.restapi.repository;

import org.npci.restapi.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(path = "product")
@CrossOrigin("http://localhost:4200/")
public interface ProductDao extends JpaRepository<Product, Integer> {

}
