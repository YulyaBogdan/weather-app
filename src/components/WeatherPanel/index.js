import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './WeatherPanel.scss';
import {fetchWeather} from "../../configs/store";
import {connect} from "react-redux";

 const mapStateToProps = () => ({});
 const mapDispatchToProps = dispatch => ({
   weather: (city) => dispatch(fetchWeather(city)),
 });

class WeatherPanel extends PureComponent {

  constructor(){
    super();
    this.state = {
      city: '',
    };
  }

  static propTypes = {
    weather: PropTypes.func.isRequired
  };

  handleDay = e => {
    e.preventDefault();
    this.props.weather(this.props.city);
  };

  render() {

    return (
        <div className='weather-panel'>
          <button onClick={this.handleDay} value='today'>Today</button>
          <button onClick={this.handleDay} value='tomorrow'>Tomorrow</button>
          <button onClick={this.handleDay} value='day after tomorrow'>Day after tomorrow</button>
          <div> {this.props.city}</div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPanel);
