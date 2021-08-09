import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component = {()=> <Home/>}></Route>
          <Route exact path="/signup" component = {()=> <Signup/>}></Route>
          <Route exact path="/login" component = {()=> <Login/>}></Route>
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
