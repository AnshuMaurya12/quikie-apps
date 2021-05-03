import React from 'react'

 const ViewData = () => {
    return (
        <div>

            <h1>  View Data</h1>
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

          <Link to="/ViewData"> View </Link></button>
        <td> <span> $0.001 </span> <br/> USD</td>
      </tr>
      <tr>
        <td>Cardlytics Inc</td>
        <button className = "btn3"> &bull; CDLX</button>
        <td>$1.8B</td>
        <button className ="btn2"> Save Data</button>
        <td> <span> $66 </span> <br/> USD</td>
      </tr>
      <tr>
        <td>Brightcove Inc</td>
        <button className = "btn3">&bull; BCOV</button>
        <td>John</td>
        <button className ="btn2"> Save Data </button>
        <td> <span> $10 </span> <br/> USD</td>
      </tr>
      <tr>
        <td>BigString Corp</td>
        <button className = "btn3">&bull; BSGC</button>
        <td>John</td>
        <button className ="btn1"> View </button>
        <td> <span> $0.003</span> <br/> USD</td>
      </tr>
      <tr>
        <td>Akamai Technologies Inc</td>
        <button className = "btn3"> &bull;
         AKAM</button>
        <td>John</td>
        <button className ="btn2"> Save Data </button>
        <td> <span> $106 </span> <br/> USD</td>
      </tr>
    </tbody>
  </table>
        </div>
    )
}

export default ViewData;