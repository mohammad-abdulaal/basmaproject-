import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn : false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const data = {
            email : this.email,
            password :this.password
        }
        setTimeout( () => {
            if(data.email == "marc.basma@gmail.com" && data.password == "admin123")
            {
                localStorage.setItem("user_id", 103)
                this.setState({
                    loggedIn: true
                });
                this.props.setUser({
                    id:103,
                    email: "marc.basma@gmail.com",
                    first_name: "Marc",
                    last_name: "Khoeiry"
                })
            }
        }, 1000)
    }


    render() {


        if(this.state.loggedIn) {
            return <Redirect to={'/'}></Redirect>
        }

        return (
            <div class="row">
                <form class = "col offset-s4 s4" onSubmit={this.handleSubmit}>
                    <div className = "input-field col s12">
                        <h3>Login</h3>
                    </div>

                    <div className = "input-field col s12">
                        <input type="email" className="validate" placeholder="Email" id="email" onChange={e=> this.email = e.target.value}></input>
                        <label for="email">Email</label>
                    </div>



                    <div className = "input-field col s12">
                        <input type="password" className="validate" placeholder="Password" id="pass" onChange={e=> this.password = e.target.value}></input>
                        <label for="pass">Password</label>

                    </div>

                    <div className = "input-field col s12">
                        <button class="waves-effect waves-light btn">Login</button>
                    </div>

                </form>



            </div>

        )
    }
}

export default Login;