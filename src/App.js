import React, { Component } from 'react';
import './App.css';


import ControlPanel from './components/ControlPanel';
import Map from './components/Map';

export default class App extends Component {

    render() {
        return (
            <div>
                <Map token={this.props.tokenMapbox} />
                <ControlPanel containerComponent={this.props.containerComponent} token={this.props.tokenApixu}/>
            </div>
        );
    }

}