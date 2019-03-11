import React from 'react';
import '../../App.css';

const WinnerHeroComponent = (props) => {
  let image = require('../../assets/img/pilots/'+props.data.Driver.driverId+'.png');
  return(
    <div className="winner-hero">
      <img className="hero-image" src={image} alt={props.data.Driver.driverId} />
      <div className="hero-details">
        <span className="winner-head">World Champion</span>
        <span className="winner-name">{props.data.Driver.givenName} {props.data.Driver.familyName}</span>
        <span className="winner-car">Team: {props.data.Constructors[0].name}</span>
        <span className="winner-nationality">{props.data.Driver.nationality}</span>
      </div>
    </div>
  );
}

export default WinnerHeroComponent;