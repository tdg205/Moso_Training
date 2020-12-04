package com.moso.CompanyDirectory;

import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "tbEmployee")
@EntityListeners(AuditingEntityListener.class)
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "fullName", nullable = false)
	private String fullName;

	@Column(name = "age", nullable = false)
	private int age;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "phoneNumber", nullable = false)
	private String phoneNumber;

	@Column(name = "position", nullable = false)
	private String position;

	@Column(name = "numberDaysOff", nullable = false)
	private int numberDaysOff;

	@Column(name = "totalDaysOff", nullable = false)
	private int totalDaysOff;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getNumberDaysOff() {
		return numberDaysOff;
	}

	public void setNumberDaysOff(int numberDaysOff) {
		this.numberDaysOff = numberDaysOff;
	}

	public int getTotalDaysOff() {
		return totalDaysOff;
	}

	public void setTotalDaysOff(int totalDaysOff) {
		this.totalDaysOff = totalDaysOff;
	}

}
