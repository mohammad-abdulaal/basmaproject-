import { Component } from "react";


class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }




    render() {
        let buttons;



        if(this.props.user) {
            buttons = (
                <ul id="nav-mobile" className = "right hide-on-med-and-down blue lighten-1">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/">Dashboard</a></li>
                    <li> <a href="/" onClick={() =>localStorage.clear()}>Logout</a></li>
                </ul>
            )
        }else {
            buttons = (
                <ul id="nav-mobile" className = "right hide-on-med-and-down blue lighten-1">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/login">Login</a></li>

                </ul>
            )
        }

        return (

            <nav>
                <div className="nav-wrapper blue lighten-1" >

                       <a href='#' className="brand-logo">Basma Admin</a>


                    {buttons}
                </div>


            </nav>)
    }
}

export default Nav