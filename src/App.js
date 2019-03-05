import React, { Component } from 'react';

import './App.css';
import Perf from 'react-addons-perf';
import ReactVirtualized from './components/ReactVirtualized/ReactVirtualized';
class App extends Component {

  render() {
    window.perf = Perf;

    return (
      <div className="App">
        {/*<Students/>*/}
        <ReactVirtualized/>

      </div>
    );
  }
}

export default App;
