import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "UVxcpV1diRJGEG4eGDjmPBaaltNErjrUD3JnSIpdeCybIg5J1k77nP57C1LF1vhI",
  APISECRET: "2cCGsTssbBOotsrpoj7uNXEHrXbDEOQWcYxRHii7MkRnk363XbckOcN1IOMDwihb",
});

export default binance;
