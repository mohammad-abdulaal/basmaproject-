import React from "react";

export default function Nav(){
    let button;
    if (localStorage.getItem('token')!=null) {
        button= (
            <ul id="nav-mobile" className = "right hide-on-med-and-down">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/" onClick={() =>localStorage.clear()}>Logout</a></li>
            </ul>
        )
    }else{
        button=(
            <ul id="nav-mobile" className = "right hide-on-med-and-down">
                {/* <li> <a href="/">Home</a></li> */}
                <li> <a href="/login">Login</a></li>
                <li> <a href="/signup">Signup</a></li>
            </ul>
        )
    }
    return (

        <nav>
            <div className="nav-wrapper">
                <a href='#' className="brand-logo">Basma </a>
                {button}
            </div>


        </nav>)
}