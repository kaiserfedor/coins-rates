import React, { Component } from 'react';
import './Rate.css';
import {coinsIcons} from '../icons/coins'
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';
import {getCoinName} from "./utils";

const CHANGE_PROPS = {
  positive: {
    class: 'Rate-change_positive',
    icon: arrowUp,
  },
  negative: {
    class: 'Rate-change_negative',
    icon: arrowDown,
  },
};

/**
 * Компонент отдельной строки для списка курсов валют
 */
export class Rate extends Component {

  render() {
    const {coin, index} = this.props;
    const change = Math.round(coin.change * 100) / 100;
    let changeProps = {class: ''};
    if (change !== 0) {
      changeProps = coin.change > 0 ? CHANGE_PROPS['positive'] : CHANGE_PROPS['negative'];
    }
    return (
      <div className="Rate">
        <div className="Rate-index">
          {index}
        </div>
        <div className="Rate-title">
          <div className="Rate-title-icon">
            <img src={coinsIcons[coin.symbol]} alt={coin.symbol}/>
          </div>
          {getCoinName(coin.symbol)}
        </div>
        <div className={`Rate-change ${changeProps.class}`}>
          {changeProps.icon && <img src={changeProps.icon} className="Rate-change-icon" alt=""/>}
          {change}
          %
        </div>
        <div className="Rate-price">
          {coin.price}
        </div>
      </div>
    );
  }
}
