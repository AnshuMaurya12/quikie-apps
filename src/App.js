import React  from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/WebApp/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router,Route,Switch ,Link } from "react-router-dom";
import Home1 from './components/MobileApp/Home1';
import View from './components/MobileApp/View';
import View1  from './components/WebApp/View1'


function App(props) {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className= "stock">
        <Switch>
          <Route exact path="/" component={Home} />
          <Link to = "/Home"></Link>
        </Switch>
        </div>
      </div>

      
      <Navbar/>
      <div className = "stock1">
      <Route exact path="/" component={View1} />
      
      </div>


      <div className = "mobile">
 
      <View/>
      <Home1/>
      </div>
    </Router>
  );
}

export default App;
