package com.mellsvs.springreact.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeDto {
    private Long id;
    private String first_name;
    private String last_name;
    private String email;

}
