package com.moso.CompanyDirectory;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.*;

/**
 * The type Employee controller
 * 
 * @author GiangTD
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;

	/**
	 * Get all employees list
	 * 
	 * @return the list
	 */
	@GetMapping("/employees") // GET method for reading operation
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	/**
	 * Gets employee by id
	 * 
	 * @param employeeId
	 * @return the employee by id
	 * @throws Exception
	 */
	@GetMapping("/employees/{id}") // GET method for Read Operation
	public ResponseEntity<Employee> getEmployeeById(@PathVariable(value = "id") Long employeeId) throws Exception {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new Exception("Employee " + employeeId + " not found"));
		return ResponseEntity.ok().body(employee);
	}

	/**
	 * Create Employee
	 * 
	 * @param employee
	 * @return the employee
	 */
	@PostMapping("/employees") // POST method for Create operation
	public Employee createEmployee(@Valid @RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	/**
	 * Update employee response entity
	 * 
	 * @param employeeId
	 * @param employeeDetails
	 * @return the response entity
	 * @throws Exception
	 */
	@PutMapping("/employees/{id}") // PUT method for Update operation
	public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId,
			@Valid @RequestBody Employee employeeDetails) throws Exception {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new Exception("Employee " + employeeId + " not found"));

		employee.setAge(employeeDetails.getAge());
		employee.setFullName(employeeDetails.getFullName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setPhoneNumber(employeeDetails.getPhoneNumber());
		employee.setPosition(employeeDetails.getPosition());
		employee.setNumberDaysOff(employeeDetails.getNumberDaysOff());
		employee.setTotalDaysOff(employeeDetails.getTotalDaysOff());

		final Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	/**
	 * Delete employee map
	 * 
	 * @param employeeId
	 * @return the map of the deleted employee
	 * @throws Exception
	 */
	@DeleteMapping("/employees/{id}") // DELETE method for delete operation
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId) throws Exception {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new Exception("Employee " + employeeId + " not found"));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
