import React, {Component} from 'react'
import axios from 'axios'
class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {

            user: null,

            users:[],
            user_id:localStorage.getItem("user_id"),



        }


    }



    componentDidMount() {
        axios.get(
            'http://localhost:8000/api/getall',
          ).then(res => {
              console.log(res.data)
              console.log(res.data.all[0])
              this.setState({
                  users:res.data.all
              })
              console.log("users",this.state.users)
            });

    }






    delete(e, id) {
        e.preventDefault();
        console.log("On Delete")
        const body= {
            user_id:id,
        }
        console.log("On Delete")
        this.setState(
        {
            users: this.state.users.filter(users => {
                        return users.id != id
                    })
        })
        axios.delete(`http://localhost:8000/api/deletebyid/${id}`)
    }

    approve(e, id) {
        console.log("approved", e.target)
        const bodyParameters = {
            user_id: id,
        };
        axios.post("http://localhost:8000/api/approve", bodyParameters)
        console.log("after success")
        e.target.disabled = true
    }
    render(){
        return (
            <div className="container">
                <h4>Manage The Users of the Website</h4>
                <table>
                    <tbody>
                        <tr>
                            <td><h5>Name</h5></td>
                            <td><h5>Email</h5></td>
                            <td><h5>Approve</h5></td>
                            <td><h5>Delete</h5></td>
                        </tr>


                        {
                            this.state.users.map(user =>
                                (
                                    <tr key={user.id}>
                                        <td>{user.first_name}  {user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                    onClick={(e)=>this.approve(e, user.id)}
                                                    className="waves-effect waves-light btn">
                                                        <i className="material-icons prefix">check</i>
                                            </button>

                                        </td>
                                        <td>
                                            <button
                                                    onClick={(e)=>this.delete(e, user.id)}
                                                    className="waves-effect waves-light btn">
                                                        <i className="material-icons prefix">delete</i>
                                            </button>

                                        </td>


                                    </tr>
                                )

                            )
                        }


                    </tbody>

                </table>


            </div>
        )
    }



}

export default Admin