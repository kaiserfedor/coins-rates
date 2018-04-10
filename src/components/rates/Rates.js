import React, { Component } from 'react';
import './Rates.css';
import {Rate} from '../rate/Rate';
import arrowRight from '../icons/arrow-right.svg'

const mockRates = {"rates":[{"symbol":"BTC","price":7069.87,"change":-0.724747114973634},{"symbol":"ETH","price":419.31,"change":0},{"symbol":"XRP","price":0.5005,"change":0.00500008},{"symbol":"BCH","price":675.65,"change":3.5510666993624262},{"symbol":"LTC","price":118.39,"change":1.1188930645712247},{"symbol":"ADA","price":0.1591,"change":4.947229551451171},{"symbol":"NEO","price":53.68,"change":13.225058004640378},{"symbol":"XLM","price":0.2077,"change":2.1642892277422554},{"symbol":"EOS","price":5.97,"change":0.6745362563237878},{"symbol":"XMR","price":178.05,"change":2.889338341519787}]};

/**
 * Список курсов валют
 */
export class Rates extends Component {

  state = {
    rates: [],
  };

  componentDidMount() {
    // так выглядит реальный запрос
    // fetch('https://api.desearch.com/api/rates/v2?t=BTC,ETH,XRP,BCH,LTC,ADA,NEO,XLM,EOS,XMR')
    //   .then(response => response.json())
    //   .then(rates => this.setState({rates}));

    // заглушка для API
    setTimeout(() => {
      this.setState({rates: mockRates.rates});
    }, 500)
  }

  render() {
    const {rates} = this.state;
    return (
      <div className="Rates">
        <div className="Rates-header">
          <span className="Rates-header-title">
            Popular Coins
            <img src={arrowRight} alt=""/>
          </span>
          <span className="Rates-header-time">24h</span>
          <span className="Rates-header-currency">USD</span>
        </div>
        {rates.map((coin, index) =>
          <Rate key={index} index={index + 1} coin={coin} />
        )}
      </div>
    );
  }
}
