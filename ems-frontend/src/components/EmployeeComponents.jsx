import React, { useState,useEffect } from 'react'
import { createEmployee } from '../services/EmployeeService'
import{useNavigate,useParams}from 'react-router-dom';
import { getEmployee } from '../services/EmployeeService';
import { updateEmployee } from '../services/EmployeeService';

const EmployeeComponents = () => {
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')  
    const [email,setEmail]=useState('')  

    const {id} = useParams();
    const [errors,setErrors]= useState({
        first_name:'',
        last_name:'',
        email:''
    })
    const navigator =useNavigate();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response) =>{
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email);
            }).catch(error =>{
                console.error(error);
            })
        }
     },[id])

    const handleFirstName = (e)=> setFirstName(e.target.value);
       

    const handleLastName=(e)=> setLastName(e.target.value);
       
    
    const handleEmail=(e)=> setEmail(e.target.value);
     
    
    function saveOrUpdateEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee = {first_name,last_name,email}
            console.log(employee)

            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error=>{
                    console.error(error);
                })
            }else{

                createEmployee(employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error =>{
                    console.error(error);
                })
            }

           
        }
  
    }
    function validateForm(){
        let valid = true;
        const errorsCopy={... errors}

        if(first_name.trim()){
            errorsCopy.first_name='';
        
        }else{
            errorsCopy.first_name='First name is required';
          valid = false;} 

        if(last_name.trim()){
            errorsCopy.last_name='';
        
        }else{
            errorsCopy.last_name='Last name is required';
          valid = false; }

        if(email.trim()){
            errorsCopy.email='';
        
        }else{
            errorsCopy.email='email is required';
        }
        setErrors(errorsCopy);
        return valid;
    }
    function pageTitle(){
        if(id){
            return  <h2 className='text-center'>Update Employee</h2>
            }else{
                return  <h2 className='text-center'>Add Employee</h2>
            }

    }

    return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                    <div className='card-body'>
                        <form>
                             <div className='form-group mb-2'>
                            <label className='form-label'>First Name: </label>  
                            <input
                            type='text'
                            placeholder='Enter Employee First Name'
                            name='firstName'
                            value={first_name}
                            className={`form-control ${errors.first_name ? 'is-invalid': ''}`}
                            onChange={(e)=> setFirstName(e.target.value)}

                            ></input> 
                            { errors.first_name && <div className='invalid-feedback'>{errors.first_name} </div>}
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Last Name: </label>  
                        <input
                            type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={last_name}
                            className={`form-control ${errors.last_name ? 'is-invalid': ''}`}
                          
                            onChange={(e)=> setLastName(e.target.value)}

                            ></input>
                            { errors.last_name && <div className='invalid-feedback'>{errors.last_name} </div>} 
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email: </label>  
                        <input
                            type='text'
                            placeholder='Enter Employee email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invalid': ''}`}
                        
                            onChange={(e)=> setEmail(e.target.value)}

                            ></input> 
                            { errors.email && <div className='invalid-feedback'>{errors.email} </div>}

                    </div>
                    <button className='btn btn-success'onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
            </div>
            </div>  
        </div>
    </div>
  )
}

export default EmployeeComponents
