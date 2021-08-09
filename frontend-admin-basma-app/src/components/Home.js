import { Component } from "react"
import Admin from './Admin'
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render(){
        if(this.props.user) {
            return(
                <div>
                    <h4>Hi {this.props.user.first_name + " " + this.props.user.last_name}</h4>
                    <Admin user={this.props.user}></Admin>
                </div>
            )
        }

        return (

            <div style={{
                position: 'absolute', left:"50%", top:"50%",
                transform: 'translate(-50%, -50%)'
             }}>
                 <img src={require("../assets/basma-logo.png").default}/>
                 <h3>Invisible aligners.The better alternative to braces.</h3>

            </div>
        )
    }
}


export default Home