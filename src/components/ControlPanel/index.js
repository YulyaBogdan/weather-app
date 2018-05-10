import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './ControlPanel.scss';
import {fetchSearch} from '../../configs/store';
import {connect} from 'react-redux';
import WeatherPanel from "../WeatherPanel";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  search: (city) => dispatch(fetchSearch(city)),
});

const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

class ControlPanel extends PureComponent {

  constructor(){
    super();
    this.state = {
      city: '',
    };
  }

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.search(this.state.city);
  };

  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container className="control-panel">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={e => this.setState({city: e.target.value})}
          />
        </form>
        <WeatherPanel city={this.state.city}/>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);