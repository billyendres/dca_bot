import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "2pirB2JwcBRL4dtPVhffamXwgQtoWpZxRZA1ifpQ3kNV1HfrFcIdxN5JVclcCqZV",
  APISECRET: "OyokS6Bid5QGkRj2WuzhoW8ocUZMYzswvZjtEvYc7KrtXekohVnNCOTWujHL2gy2",
});

export default binance;
