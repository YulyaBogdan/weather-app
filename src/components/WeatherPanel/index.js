import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './WeatherPanel.scss';
import {fetchWeather} from "../../configs/store";
import {connect} from "react-redux";

 const mapStateToProps = store => ({params: store.weatherParams, city: store.city });
 const mapDispatchToProps = dispatch => ({
   weather: city => dispatch(fetchWeather(city)),
 });

class WeatherPanel extends PureComponent {

  constructor(){
    super();
    this.state = {
      day: '',
    };
  }

  static propTypes = {
    weather: PropTypes.func.isRequired
  };

  handleWeather = e => {
    e.preventDefault();
    this.props.weather(this.props.city);
   };

  handleDay = e => {
    this.setState({day: e.target.value});
  };

  render() {
    let show = <div></div>;
    if (this.props.params){
      switch (this.state.day){
        case 'today':
          show = <div className='weather-panel--display'>
            <img src={this.props.params.icon} alt={this.props.params.text}/>
            <p>{`${this.props.params.text} ${this.props.params.temperature}`}</p>
            </div>;
          break;
        case 'tomorrow':
          show = <div className='weather-panel--display'>
            <img src={this.props.params.tomorrowIcon} alt={this.props.params.tomorrowText}/>
            <p>{`${this.props.params.tomorrowText} ${this.props.params.tomorrowTemp}`}</p>
            </div>;
          break;
        case 'day after tomorrow':
          show = <div className='weather-panel--display'>
            <img src={this.props.params.aftertomorrowIcon} alt={this.props.params.aftertomorrowText}/>
            <p>{`${this.props.params.aftertomorrowText} ${this.props.params.aftertomorrowTemp}`}</p>
            </div>;
          break;
      }
    }
    return (
      <div className='weather-panel'>
        <div onClick={this.handleWeather} className='weather-panel--day-switcher'>
          <button onClick={this.handleDay} value='today'>Today</button>
          <button onClick={this.handleDay} value='tomorrow'>Tomorrow</button>
          <button onClick={this.handleDay} value='day after tomorrow'>Day after tomorrow</button>
        </div>
        {show}
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPanel);
