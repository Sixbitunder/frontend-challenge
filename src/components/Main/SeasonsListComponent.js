import React from 'react';
import '../../App.css';

const selectSeason = function(season, props) {
  props.handler(season);
}

const SeasonItem = (props) => {
  return(
    <li className={(props.selected === props.item ? 'season-item active' : 'season-item')} 
      onClick={() => selectSeason(props.item, props)}>
      <div className="item-container">
        <span className="first-name">
          Season 
          <span className="last-name">
            {' '+props.item}
          </span>
        </span>
        <i className={(props.selected === props.item) ? 'chevron bottom' : 'chevron right'}/>
      </div>
    </li>
  );
}

const SeasonListComponent = (props) => {
  return(
    <ul className="seasons-list">
      {props.data.map((item) => 
        <SeasonItem 
          key={item.season}
          item={item.season}
          handler={props.handler}
          selected={props.selected}
          />)}
    </ul>
  );
}

export default SeasonListComponent