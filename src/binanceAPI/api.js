import Binance from "node-binance-api";

const binance = new Binance().options({
//////////////////////////////////////
  useServerTime: true,
});

export default binance;

// TESTNET
// APIKEY: "01420dbe852ef484d732d81e7dd78636bea185ac40168032c20d710d7c2e51ec",
// APISECRET: "45e9e8d4152f5aba40572d856df3d0d0133dfc43250a1c21e7c46c4c04241757",
