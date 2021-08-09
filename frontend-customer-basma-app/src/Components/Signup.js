import React, { useState } from "react";
import Login from "./Login";
import axios from "axios";
import {Redirect} from 'react-router-dom';


export default function Signup(props){
  const[User,setUser] =useState({
      id:null,
      first_name:"",
      last_name:"",
      email:"",
      password:""
    });
   const HandleFirstNameChange =(textValue)=>{
    setUser((prevTransaction) => ({
        ...prevTransaction,
        first_name: textValue.target.value,
      }));
   }
   const HandleLastNameChange =(textValue)=>{
    setUser((prevTransaction) => ({
        ...prevTransaction,
        last_name:textValue.target.value,
      }));
   }
   const HandleEmailChange =(textValue)=>{
    setUser((prevTransaction) => ({
        ...prevTransaction,
        email:textValue.target.value,
    }));
   }
   const HandlePasswordChange =(textValue)=>{
    setUser((prevTransaction) => ({
        ...prevTransaction,
        password: textValue.target.value,
    }));
   }

   const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false);
   let data={
       first_name:User.first_name,
       last_name:User.last_name,
       email:User.email,
       password:User.password,
       is_approved:0
   }
   const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(data)
       axios.post(" http://localhost:8000/api/signup",data)
            .then((res)=>{
                console.log(res.status)
                if(res.status===201){
                    setIsRegistraionSuccess(true)
                }
            })
   }
   if (isRegistraionSuccess===true){
       return(
        <Redirect to={'/login'}></Redirect>
       )
   }
   return(
       <div className="input-field col 12">
                <form class = "col offset-s4 s4" onSubmit={handleSubmit}>
                    <div className = "input-field col s12">
                        <h3>Sign Up</h3>
                    </div>

                    <div className="input-field col 12">
                        <input type="text" className="validate" placeholder="First Name" id="first_name" onChange={HandleFirstNameChange}></input>
                        <label for="first_name">First Name</label>
                    </div>

                    <div className="input-field col 12">
                        <input type="text" className="validate" placeholder="Last Name" id="last_name" onChange={HandleLastNameChange}></input>
                        <label for="last_name">Last Name</label>
                    </div>

                    <div className="input-field col 12">
                        <input type="email" className="validate" placeholder="Email" id="email" onChange={HandleEmailChange}></input>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col 12">
                        <input type="password" className="validate" placeholder="Password" id="pass" onChange={HandlePasswordChange}></input>
                        <label for="pass">Password</label>
                    </div>
                    <div className="input-field col 12">
                        <button class="waves-effect waves-light btn">Sign Up</button>
                    </div>
                </form>



            </div>
   )
}