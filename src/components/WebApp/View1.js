import React from "react";


const View1 = () => {
 

  return (


    <div className="container">

<nav className="navbar alert alert-info justify-content-between">
  <h5 className="navbar-brand">Save Data Table</h5>
</nav>
           
  <table className="table table-hover">
  
    <tbody>
      <tr>
        <td>141 Capital Inc </td>
        <button className = "btn3"> &bull; ONCP</button>
        <td>$145.4K</td>
        <button className ="btn1"> Delete </button>
        <td>  $0.001  <br/> USD</td>
      </tr>
     
      <tr>
        <td>BigString Corp</td>
        <button className = "btn3">&bull; BSGC</button>
        <td>$543K </td>
        <button className ="btn1"> Delete </button>
        <td>  $0.003 <br/> USD</td>
      </tr>
      
    </tbody>
    </table>
    <nav className="navbar alert alert-primary justify-content-center">
       
         <button className= "btn1 m-8"> Back</button>
</nav>
  
</div>
      

    
    
  );
};

export default View1;