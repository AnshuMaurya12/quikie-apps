import React from "react";
import './Home1.css';

const Home1 = () => {
 

  return (


    <div className="container">


      

<nav className="navbar navbar-light bg-light justify-content-between">
  <h5 className="navbar-brand">Stock Details Table</h5>
  <form className="form-inline">
    <input className="form-control" type="search" placeholder="Search Company Name" aria-label="Search"/>
  </form>
</nav>
           
  <table className="table table-hover">
    <thead>
      <tr>
        <th>COMPANY NAME</th>
        <th>SYMBOL</th>
        <th>MARKET CAP</th>
       

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>141 Capital Inc </td>
        <button className = "btn3"> &bull; ONCP</button>
        <td>$145.4K</td>
        <button className ="btn1"> View </button>
        
      </tr>
      <tr>
        <td>Cardlytics Inc</td>
        <button className = "btn3"> &bull; CDLX</button>
        <td>$1.8B</td>
        <button className ="btn2"> Save Data</button>
        
      </tr>
      <tr>
        <td>Brightcove Inc</td>
        <button className = "btn3">&bull; BCOV</button>
        <td>$160</td>
        <button className ="btn2"> Save Data </button>
        
    

      </tr>
    </tbody>
  </table>
</div>
      

    
    
  );
};

export default Home1;