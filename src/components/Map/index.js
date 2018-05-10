import React, {Component} from 'react';
import MapGL, {FlyToInterpolator} from 'react-map-gl';
import {connect} from "react-redux";
import PropTypes from "prop-types";


const mapStateToProps = (state) => ({
  location: state.location
});
const mapDispatchToProps = () => ({});

class Map extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        latitude: 37.7751,
        longitude: 35.4193,
        zoom: 1.5,
        width: window.innerWidth,
        height: window.innerHeight,

      },
    };
  }

  static propTypes = {
    token: PropTypes.string.isRequired,
    location: PropTypes.array,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _onViewportChange = viewport => this.setState({viewport: {...this.state.viewport, ...viewport}});


  _resize = () => this._onViewportChange({
    width: this.props.width || window.innerWidth,
    height: this.props.height || window.innerHeight
  });

  _goToViewport = ({longitude, latitude}) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    })
  };

  render() {

    const {viewport} = {...this.state, transitionInterpolator: new FlyToInterpolator(), transitionDuration: 3000};

    if(this.props.location){
      viewport.longitude= this.props.location[0];
      viewport.latitude= this.props.location[1];
      viewport.zoom= 11;
    } else {
      viewport.longitude= 37;
      viewport.latitude= 35;
      viewport.zoom= 1.5;
    }
    return (
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._onViewportChange}
          dragToRotate={false}
          mapboxApiAccessToken={this.props.token}
        />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
