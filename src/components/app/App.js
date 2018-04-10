import React, { Component } from 'react';
import logo from './logo-desearch.svg';
import './App.css';
import {Rates} from '../rates/Rates'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Rates/>
      </div>
    );
  }
}
