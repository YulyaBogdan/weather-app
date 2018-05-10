import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './configs/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App tokenMapbox={process.env.REACT_APP_MAPBOX_TOKEN} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
