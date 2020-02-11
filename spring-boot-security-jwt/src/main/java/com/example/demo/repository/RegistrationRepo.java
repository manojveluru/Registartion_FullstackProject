package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Registration;

public interface RegistrationRepo extends JpaRepository<Registration, Long>{

}
