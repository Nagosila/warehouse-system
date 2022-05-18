import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const[loginInput,setLogin]=useState({
        email:'',
        password:'',
        error_list:[],
    });

    const handleInput =(event)=>{
         event.persist();
         setLogin({
              ...loginInput,[event.target.name]:event.target.value  
         });
    }
const loginSubmit=(event)=>{
    event.preventDefault(); 
    const data = {
        email: loginInput.email,
        password: loginInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post('api/login',data).then(res => {
        if(res.data.status === 200)
        {
            localStorage.setItem('auth_token',res.data.token);
            localStorage.setItem('auth_name',res.data.username);
            swal("Success", res.data.message,"success");
            console.log(res.data.username);

            if(res.data.role === '')
            {
                history.push('/admin/dashboard');
            }
            else
            {
                history.push('/');
            }
            
        }
         else if(res.data.status === 401)
         {
            
                swal("Warning", res.data.message,"warning");         
         }
         else
         {
            setLogin({...loginInput,error_list: res.data.validation_errors});
         }
    });
 });
}
  return (
    <div>
        <Navbar/>
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'> 
                                    <h4>Login</h4>                        
                        </div>
                        <form onSubmit={loginSubmit}>
                            <div className='card-body'>
                                  
                                      <div className='form-group mb3'></div>
           <label>Email ID</label>
          <input type="email" id="email" name="email" onChange={handleInput} value={loginInput.email} className='form-control' />
          <span>{loginInput.error_list.email}</span>
                            </div>
                            <div className='card-body'>
                                  
                                      <div className='form-group mb3'></div>
                                      <label>Password</label>
         <input type="password" id="password" name="password" onChange={handleInput} value={loginInput.password} className='form-control' />
         <span>{loginInput.error_list.password}</span>                    
                            </div>
                            <div className='form-group mb-3'>
                                <button type='submit' className='btn btn-primary'>Login</button>

                            </div>
                            </form>   

                    </div>

                </div>

            </div>

        </div>
    </div>
    
  )
}

export default Login