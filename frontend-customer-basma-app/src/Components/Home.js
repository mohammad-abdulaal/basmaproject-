import axios from "axios";
import React, { useState ,useEffect } from "react";

export default function Home(){
    const [Name,setName]=useState("");
    const [loading,setloading]=useState(true);
    let token=localStorage.getItem("token")
    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(
            'http://localhost:8000/api/user',
            config
          ).then(res => {
              setName({
                Name:res.data.first_name + " " + res.data.last_name
                })
                console.log(res.data.first_name)
              setloading(false)
          })
          .catch((error) => {
                console.log(error)
              });
    },[])
    if (loading===false){
        return(
            <div>
                <h4>Welcome {Name.Name} To Basma </h4>
                <h5>
                    Contact us inorder to help have a new smile and thank you for choosing us !
                </h5>
            </div>
        )
    }
    return(
        <div>
            You are not logged in
        </div>
    )
}