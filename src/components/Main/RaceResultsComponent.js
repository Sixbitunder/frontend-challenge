import React from 'react';
import SectionHeaderComponent from './SectionHeaderComponent';
import TableContent from './TableContent';
import '../../App.css';
import { GET_RESULTS } from '../../api';
import WinnerHeroComponent from './WinnerHeroComponent';

class RaceResultsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      races: [],
      winnerId: '',
      winner_data: '',
      season: this.props.selected,
      isLoading: false,
      error: null
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selected !== this.props.selected) {
      this.getData();
    }
  }

  getData = async function () {
    this.setState({isLoading: true})
    try {
      await Promise.all([
        fetch(GET_RESULTS+this.props.selected+'/results/1.json')
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong...');
          }
        })
        .then(data => this.setState({races: data.MRData.RaceTable.Races})),
        fetch(GET_RESULTS+this.props.selected+'/driverStandings.json')
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong...');
          }
        })
        .then(data => this.setState({
          winnerId: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId,
          winner_data: data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0],
          isLoading: false
        }))
        .catch(error => this.setState({error, isLoading: false}))
      ])
    }
    catch(err) {
      console.log(err);
    };
  }

  render() {
    if(this.state.isLoading) {
      return(
        <SectionHeaderComponent className="loading" title="Loading..."/>
      );
    }
    if(this.state.races.length > 0 && this.state.winnerId !== '' && this.state.winner_data !== '') {
      return(
        <div className="results-wrapper">
          <SectionHeaderComponent className="results-header" title={this.props.selected ? this.props.selected+' Race Results' : ''}/>
          <WinnerHeroComponent data={this.state.winner_data}/>
          <div className="table-wrapper">
            <TableContent data={this.state.races} winner={this.state.winnerId} />
          </div>
        </div>
      );
    }
    return(
      <div></div>
    );
  }
}

export default RaceResultsComponent;