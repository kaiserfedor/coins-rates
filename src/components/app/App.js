import React, { Component } from 'react';
import logo from './logo-desearch.svg';
import arrowRight from '../icons/arrow-right.svg'
import './App.css';
import {Rates} from '../rates/Rates'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-popular">
          <span>Popular Coins</span>
          <img src={arrowRight} />
          <span className="App-popular-time">24h</span>
          <span className="App-popular-currency">USD</span>
        </div>
        <Rates/>
      </div>
    );
  }
}
