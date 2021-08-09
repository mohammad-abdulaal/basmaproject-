import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from './components/Login';
// import SignUp from './Components/SignUp.js';
// import Home from './Components/Home.js';
import Nav from './components/Nav';
import { Component } from 'react';
import Home from './components/Home';

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      user:null
    }
  }

  componentDidMount(){
    // setTimeout(()=>{
    //   console.log("Got some user Response")

    //   this.setUser({
    //     userID:1,
    //     email: "amina@gmail.com",
    //     first_name: "Amina",
    //     last_name: "Safa"
    //   })

    // }, 1000)
  }

    setUser=user=>{
      this.setState({
        user:user
      })
    }


  render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Nav user={this.state.user}/>
            <Switch>
              <Route exact path="/" component = {()=> <Home user ={this.state.user}/>}></Route>
              <Route exact path="/login" component = {()=> <Login setUser={this.setUser}/>}></Route>
            </Switch>

          </div>
        </BrowserRouter>
      );
    }
}
export default App;
