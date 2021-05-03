import React from "react";
import './Home.css';



const Home = () => {
 

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
        <th> ACTION</th>
        <th> CURRENT PRICE</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>141 Capital Inc </td>
        <button className = "btn3"> &bull; ONCP</button>
        <td>$145.4K</td>
        <button className ="btn1"> 

           View </button>
        <td>  $0.001 <br/> USD</td>
      </tr>
      <tr>
        <td>Cardlytics Inc</td>
        <button className = "btn3"> &bull; CDLX</button>
        <td>$1.8B</td>
        <button className ="btn2"> 
         Save Data </button>
        
        <td> $66  <br/> USD </td>
      </tr>
      <tr>
        <td>Brightcove Inc</td>
        <button className = "btn3">&bull; BCOV</button>
        <td> $394M</td>
        <button className ="btn2"> 
      Save Data </button>
        <td> $10
          <br/> USD</td>
      </tr>
      <tr>
        <td>BigString Corp</td>
        <button className = "btn3">&bull; BSGC</button>
        <td> $543K</td>
        <button className ="btn1"> 
         View </button>
        <td> $0.003
          <br/> USD</td>
      </tr>
      <tr>
        <td>Akamai Technologies Inc</td>
        <button className = "btn3"> &bull;
         AKAM</button>
        <td> $145.4K</td>
        <button className ="btn2"> 
        
         Save Data </button>
        <td> 
          $106 
          <br/> USD</td>
      </tr>
    </tbody>
  </table>
</div>
      

    
    
  );
};

export default Home;