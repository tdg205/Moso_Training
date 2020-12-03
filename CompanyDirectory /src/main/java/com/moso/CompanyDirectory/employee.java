package com.moso.CompanyDirectory;

import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "tbEmployee")
@EntityListeners(AuditingEntityListener.class)
public class employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
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
}
