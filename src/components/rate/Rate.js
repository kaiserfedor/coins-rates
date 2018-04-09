import React, { Component } from 'react';
import './Rate.css';
import {coinsIcons} from '../icons/coins'
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';

/**
 * Компонент отдельной строки для списка курсов валют
 */
export class Rate extends Component {

  render() {
    const {coin, index} = this.props;
    const changeClass = coin.change > 0 ? 'Rate-change_positive' : 'Rate-change_negative';
    const icon = coin.change > 0 ? arrowUp : arrowDown ;
    return (
      <div className="Rate">
        <div className="Rate-index">
          {index}
        </div>
        <div className="Rate-title">
          <div className="Rate-title-icon">
            <img src={coinsIcons[coin.symbol]}/>
          </div>
          {coin.symbol}
        </div>
        <div className={`Rate-change ${changeClass}`}>
          <img src={icon} className="Rate-change-icon"/>
          {Math.round(coin.change * 100) / 100}
        </div>
        <div className="Rate-price">
          {coin.price}
        </div>
      </div>
    );
  }
}
