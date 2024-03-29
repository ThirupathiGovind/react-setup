import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept(() => {
    console.log("Module has been updated!")
  });
}
