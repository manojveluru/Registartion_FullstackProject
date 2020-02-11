package com.example.demo.controllers;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Registration;
import com.example.demo.repository.RegistrationRepo;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

@Autowired RegistrationRepo repo;
	
	@PostMapping("/register")
	public String register(@RequestBody Registration registartion) 
	{
		repo.save(registartion);
		return registartion.getName()+" registartion process succesfully completed";
	}
	
	@GetMapping("/getAllUsers")
	public List<Registration> findAllUsers()
	{
		return (List<Registration>) repo.findAll();
	}
	
	/*
	 * @GetMapping("/findUser/{email}") public List<Registration>
	 * findUser(@PathVariable String email) { return
	 * repo.findByEmail(email).isPresent() ? repo.findByEmail(email).get() :
	 * Collections.EMPTY_LIST; }
	 */
	
	@GetMapping("/findUserById/{id}")
	public Registration findUserById(@PathVariable Long id) 
	{
		return repo.findById(id).get();
	}
	
	@DeleteMapping("/cancel/{id}")
	public List<Registration> cancelRegistration(@PathVariable long id)
	{
		repo.deleteById(id);;
		return (List<Registration>) repo.findAll();
	}
	
	@PutMapping("/update/{id}")
	public String updateRegistration(@PathVariable long id, @RequestBody Registration registration) 
	{
		System.out.println(registration);
		Optional<Registration> user = repo.findById(id);
		if(user.isPresent())
		{
			Registration r = user.get();
			System.out.println(registration.getName());
			r.setName(registration.getName());
			r.setEmail(registration.getEmail());
			r.setExperience(registration.getExperience());
			r.setDomain(registration.getDomain());
			repo.save(r);
			System.out.println(r);
			return "Hi "+r.getId()+" Updated successfully";
		}
		else 
		{
			return "The following record does not found";
		}
		
	}
}
