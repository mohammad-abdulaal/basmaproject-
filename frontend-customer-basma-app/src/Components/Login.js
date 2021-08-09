import axios from "axios";
import React, { useState } from "react";
import {Redirect} from 'react-router-dom';

export default function Login(){

    const [loggedin,SetLoggedin]=useState(false)
    const [User,setUser]=useState(
        {
            email:"",
            password:""
        }
    )
    const handleEmailChange = (textValue) => {
        setUser((prevTransaction) => ({
          ...prevTransaction,
          email: textValue.target.value,
        }));
    };
    const handlePasswordChange = (textValue) => {
        setUser((prevTransaction) => ({
          ...prevTransaction,
          password: textValue.target.value,
        }));
      };
    let values={
        email:User.email,
        password:User.password
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        axios.post("http://localhost:8000/api/login",values)
             .then((res)=>{
                 console.log(res.status)
                 console.log(res.data.token)
                 console.log("hello",res.data)
                 if(res.status==200){
                     localStorage.setItem('token',res.data.token)
                     SetLoggedin(true)
                 }
             })
        // SetLoggedin(true)
        console.log("Submit")
    }
    if(loggedin===true) {
        return <Redirect to={'/'}></Redirect>
    }
    return(
        <div class="row">
            <form class = "col offset-s4 s4" onSubmit={handleSubmit}>
                <div className = "input-field col s12">
                    <h3>Login</h3>
                </div>
                <div className = "input-field col s12">
                    <input type="email" className="validate" placeholder="Email" id="email" onChange={handleEmailChange}></input>
                    <label for="email">Email</label>
                </div>
                <div className = "input-field col s12">
                    <input type="password" className="validate" placeholder="Password" id="pass" onChange={handlePasswordChange}></input>
                    <label for="pass">Password</label>
                </div>
                <div className = "input-field col s12">
                    <button class="waves-effect waves-light btn">Login</button>
                </div>
            </form>
        </div>
    )
}