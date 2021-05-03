import React from 'react';
import './quikie.css';


 
const Navbar = () => {
return(
    <>

<div className="header">
    <div id = "h1"> <h1>Quikie </h1>
    <span> Apps </span> 
      </div>
      </div>


    <div className="inline">
    <div className = "box1">
    <img src= "./Images/GOOGL.png" alt ="google" width= "60px" height = "60px" className="img" /> 
     <h6> GOOGL </h6>
    <h2 className = "box2"> 1515 USD</h2>    
    </div>
     &nbsp;
     &nbsp;
     &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;&nbsp;
    &nbsp;
    &nbsp;&nbsp;
    &nbsp;

   <div className = "box1">
    <img src= "./Images/FB.png" alt ="google" width= "60px" height = "60px" className="img" /> 
     <h6> FB </h6>
    <h2 className = "box2"> 266 USD</h2>    
    </div>
    
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;&nbsp;
    &nbsp;

    <div className = "box1">
    <img src= "./Images/AMZN.svg" alt ="google" width= "60px" height = "60px" className="img" /> 
     <h6> AMAZ </h6>
    <h2 className = "box2"> 266 USD</h2>    
    </div>
    </div>
    
    

    </>
);
}

export default Navbar;
