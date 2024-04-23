package com.mellsvs.springreact.repository;

import com.mellsvs.springreact.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
