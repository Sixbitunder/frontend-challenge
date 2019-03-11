import React from 'react';
import { GET_SEASONS } from '../../api';
import SeasonListComponent from './SeasonsListComponent';
import SectionHeaderComponent from './SectionHeaderComponent';
import RaceResultsComponent from './RaceResultsComponent';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: [],
      selectedSeason: ''
    }
  }

  componentDidMount() {
    //We limit the query from 2005 to 2015
    fetch(GET_SEASONS+'?limit=11&offset=55')
    .then(response => response.json())
    .then(data => this.setState({seasons: data.MRData.SeasonTable.Seasons}))
  }

  seasonChange = (season) => {
    if(season !== '') {
      this.setState({
        selectedSeason: season
      })
    }
  }

  render() {
    return(
      <main className="app-main">
        <div className="seasons-wrapper">
        <SectionHeaderComponent title="Select the Season" className="season-header"/>
        <SeasonListComponent 
          data={this.state.seasons}
          selected={this.state.selectedSeason}
          handler={(season) => this.seasonChange(season)}/>
        </div>
        <RaceResultsComponent selected={this.state.selectedSeason} />
      </main>
    );
  }
}

export default MainComponent