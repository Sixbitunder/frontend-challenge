import React from 'react';
import '../../App.css';


const TableContent = (props) => {
  if(props.data) {
    return(
      <table className="results-table">
        <thead>
          <tr>
            <th className="limiter"></th>
            <th>Grand Prix</th>
            <th>Winner</th>
            <th>Car</th>
            <th className="limiter"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            let circuit = item.Circuit.Location.country;
            let winner = item.Results[0].Driver.familyName;
            let car = item.Results[0].Constructor.name;
            let driverId = item.Results[0].Driver.driverId;
            return( 
              <tr key={item.date} className={driverId === props.winner ? 'winner' : ''}>
                <td className="limiter"></td>
                <td className="dark bold">{circuit}</td>
                <td className="dark bold">{winner}</td>
                <td className="dark semibold">{car}</td>
                <td className="limiter"></td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    );
  } else {
    return(
      <div>

      </div>
    );
  }
}

export default TableContent