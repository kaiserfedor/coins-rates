const SYMBOL_TO_NAME_MAP = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  XRP: 'Ripple',
  BCH: 'Bitcoin Cash',
  LTC: 'Litecoin',
  ADA: 'Cardano',
  NEO: 'NEO',
  XLM: 'Stellar',
  EOS: 'EOS',
  XMR: 'Monero',
};

export function getCoinName(symbol) {
  return SYMBOL_TO_NAME_MAP[symbol] || symbol;
}