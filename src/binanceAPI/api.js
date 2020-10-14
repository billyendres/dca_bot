import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "2pirB2JwcBRL4dtPVhffamXwgQtoWpZxRZA1ifpQ3kNV1HfrFcIdxN5JVclcCqZV",
  APISECRET: "OyokS6Bid5QGkRj2WuzhoW8ocUZMYzswvZjtEvYc7KrtXekohVnNCOTWujHL2gy2",
});

export default binance;

// TESTNET
// APIKEY: "01420dbe852ef484d732d81e7dd78636bea185ac40168032c20d710d7c2e51ec",
// APISECRET: "45e9e8d4152f5aba40572d856df3d0d0133dfc43250a1c21e7c46c4c04241757",
