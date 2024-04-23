package com.mellsvs.springreact.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
//super anahtar kelimesi üst sınıfın (RunTimeException) yapıcı metotunu çağırmak için kullanılır.

    public ResourceNotFoundException(String message){
        super(message);
    }
}
