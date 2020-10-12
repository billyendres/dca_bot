import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";

const App = () => {
  const [price, setPrice] = useState(null);
  const [strategy, setStrategy] = useState(true);
  const [positionSize, setPositionSize] = useState(null);
  const [balance, setBalance] = useState(null);
  const [hedge, setSide] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dcaQuantity, setDcaQuantity] = useState(2);
  const [startBot, setStartBot] = useState(false);
  const [cancelOrders, setCancelOrders] = useState(false);
  const [symbol, setSymbol] = useState([
    "BTCUSDT",
    "ETHUSDT",
    "BCHUSDT",
    "XRPUSDT",
    "EOSUSDT",
    "LTCUSDT",
    "TRXUSDT",
    "ETCUSDT",
    "LINKUSDT",
    "XLMUSDT",
    "ADAUSDT",
    "XMRUSDT",
    "DASHUSDT",
    "ZECUSDT",
    "XTZUSDT",
    "BNBUSDT",
    "ATOMUSDT",
    "ONTUSDT",
    "IOTAUSDT",
    "BATUSDT",
    "NEOUSDT",
    "QTUMUSDT",
    "IOSTUSDT",
    "THETAUSDT",
    "KNCUSDT",
    "ZRXUSDT",
    "COMPUSDT",
    "VETUSDT",
    "ALGOUSDT",
    "ZILUSDT",
    "OMGUSDT",
    "DOGEUSDT",
    "SXPUSDT",
    "LENDUSDT",
    "KAVAUSDT",
    "BANDUSDT",
    "RLCUSDT",
    "WAVESUSDT",
    "MKRUSDT",
    "SNXUSDT",
    "DOTUSDT",
    "DEFIUSDT",
    "YFIUSDT",
    "BALUSDT",
    "CRVUSDT",
    "TRBUSDT",
    "YFIIUSDT",
    "RUNEUSDT",
    "SUSHIUSDT",
    "SRMUSDT",
    "BZRXUSDT",
    "EGLDUSDT",
    "SOLUSDT",
    "ICXUSDT",
    "STORJUSDT",
    "BLZUSDT",
    "UNIUSDT",
    "AVAXUSDT",
    "FTMUSDT",
    "HNTUSDT",
    "ENJUSDT",
    "FLMUSDT",
    "TOMOUSDT",
  ]);

  // Get base currency balances
  //   useEffect(() => {
  //     const futuresBalance = async () => {
  //       setBalance(await binance.futuresBalance());
  //     };
  //     futuresBalance();
  //     console.log(`Balance = ${balance}`);
  //   }, []);

  //  Retreive current coin/token price
  useEffect(() => {
    setInterval(() => {
      const coinPrices = async () => {
        let tokenPrice = await binance.futuresPrices();
        setPrice(tokenPrice.ADAUSDT);
      };
      coinPrices();
      // console.log(price);
    }, 10000);
  }, []);

  // Calculate Position size
  useEffect(() => {
    setInterval(() => {
      const size = async () => {
        let pos = await binance.futuresPositionRisk();
        setPositionSize(pos[11].positionAmt);
        //   console.log(`Position Size ${positionSize}`);
        console.log(pos[11]);
      };
      size();
    }, 10000);
  }, []);

  //  PLace buy order
  useEffect(() => {
    const futuresLimitBuy = async () => {
      if (startBot && strategy) {
        await binance.futuresBuy(symbol, quantity, 0.1);
        // Safety Order One
        await binance.futuresBuy(symbol, quantity * dcaQuantity, 0.09);
        // Safety Order Two
        await binance.futuresBuy(
          symbol,
          quantity * dcaQuantity * dcaQuantity,
          0.09
        );
        // Safety Order Three
        await binance.futuresBuy(
          symbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          0.09
        );
        // Safety Order Four
        await binance.futuresBuy(
          symbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity * dcaQuantity,
          0.09
        );
        // Safety Order Five
        await binance.futuresBuy(
          symbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          0.09
        );
        // Safety Order Six
        await binance.futuresBuy(
          symbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          0.09
        );
      }
    };
    futuresLimitBuy();
  }, [startBot, strategy]);

  // Place sell order
  useEffect(() => {
    const futuresLimitSell = async () => {
      if (startBot && !strategy) {
        await binance.futuresSell(symbol, quantity, 0.2);
        // Safety Order One
        await binance.futuresSell(symbol, quantity * dcaQuantity, 0.21);
        // Safety Order Two
        await binance.futuresSell(
          symbol,
          quantity * dcaQuantity * dcaQuantity,
          0.21
        );
        // Safety Order Three
        await binance.futuresSell(
          symbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          0.21
        );
        // Safety Order Four
        await binance.futuresSell(
          symbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity * dcaQuantity,
          0.21
        );
        // Safety Order Five
        await binance.futuresSell(
          symbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          0.21
        );
        // Safety Order Six
        await binance.futuresSell(
          symbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          0.21
        );
      }
    };
    futuresLimitSell();
  }, [startBot, strategy]);

  // Cancel all active orders
  useEffect(() => {
    const cancel = async () => {
      if (cancelOrders) {
        await binance.futuresCancelAll(symbol);
      }
    };
    cancel();
  }, [cancelOrders]);

  const onChangeHandlerInitialOrder = (e) => {
    setQuantity(e.target.value);
  };

  const onChangeHandlerDcaOrder = (e) => {
    setDcaQuantity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Billy's Bot</h1>
      <h2>
        Select currency Pair <list>{symbol}</list>
      </h2>
      <h2>{`Current price of: ${symbol} = ${price}`}</h2>
      <h2>{`Current position size = ${positionSize}`}</h2>
      <h2>
        Select Strategy{" "}
        <button onClick={() => setStrategy(!strategy)}>
          {strategy ? "LONG" : "SHORT"}
        </button>
      </h2>
      <h2>
        Base order size{" "}
        <input
          type="text"
          onChange={onChangeHandlerInitialOrder}
          value={quantity}
        />
      </h2>
      <h2>
        Safety order size eg. Base order * 2{" "}
        <input
          type="text"
          onChange={onChangeHandlerDcaOrder}
          value={dcaQuantity}
        />
      </h2>
      <h2>Percentage price deviation on open safety order</h2>
      <h2>{`Hedge current position = ${hedge}`}</h2>
      <button onClick={() => setSide(!hedge)}>
        {hedge ? "LONG DCA ORDER" : "HEDGE SHORT"}
      </button>
      <h2>
        Start Bot!{" "}
        <button onClick={() => setStartBot(!startBot)}>
          {!startBot ? "OFF" : "ON"}
        </button>
      </h2>
      <button onClick={() => setCancelOrders(!cancelOrders)}>
        {!cancelOrders ? "Click to cancel all active orders" : "Cancelled"}
      </button>
    </div>
  );
};

export default App;

//   const openOrders = async () => {
//     let orders = await binance.futuresOpenOrders();
//     console.log(orders);
//   };
//   openOrders();
//   const [positionSize, setPositionSize] = useState(null);
//   useEffect(() => {
//     const initialBuyOrder = async () => {
//       // Chose pair to trade
//       let currencyPair = "ADAUSDT";
//       // Chose amount to trade
//       let amount = 1;
//       // Get coin price
//       let coinPrice = await binance.futuresPrices();
//       // Initial Order
//       let initialOrder = coinPrice[currencyPair];
//       console.log(`Initial Order ${initialOrder}`);
//       // DCA Order One
//       let dcaOne = parseFloat(coinPrice[currencyPair] * 0.998).toFixed(5);
//       console.log(`DCA 1 buy Price ${dcaOne}`);
//       // Calculate Position Size
//       let pos = await binance.futuresPositionRisk();
//       setPositionSize(pos[11].positionAmt);
//       console.log(positionSize);
//       //  console.log(pos[11]);
//       let price = 0.1;

//       // Run initial order function
//       if (positionSize < 0.9) {
//         await binance.futuresBuy(
//           currencyPair,
//           amount,
//           price
//           //   initialOrder
//         );
//       }
//       //   let orders = await binance.futuresOpenOrders();
//       //   console.log(orders);
//       // Run DCA Order One function
//       if (positionSize > 0.9) {
//         await binance.futuresBuy(currencyPair, amount, dcaOne);
//       }
//     };
//     initialBuyOrder();
//     console.log(positionSize);
//   }, [positionSize]);

// import axios from "axios";
// import crypto from "crypto-js";

// const baseUrl = "https://fapi.binance.com";
// const endPoint = "/fapi/v1/order";

// const symbol = "ADAUSDT";
// const side = "BUY";
// const type = "LIMIT";
// const timeInForce = "GTC";
// const quantity = 1;
// const recvWindow = 5000;
// const price = 0.1;
// const timestamp = Date.now();

// let dataQueryString =
//   "symbol=" +
//   symbol +
//   "&side=" +
//   side +
//   "&type=" +
//   type +
//   "&timeInForce=" +
//   timeInForce +
//   "&quantity=" +
//   quantity +
//   "&price=" +
//   price +
//   "&recvWindow=" +
//   recvWindow +
//   "&timestamp=" +
//   timestamp;

//symbol string
//timestamp
//only encrypt after ?

// const keys = {
//   akey: "UVxcpV1diRJGEG4eGDjmPBaaltNErjrUD3JnSIpdeCybIg5J1k77nP57C1LF1vhI",
//   skey: "2cCGsTssbBOotsrpoj7uNXEHrXbDEOQWcYxRHii7MkRnk363XbckOcN1IOMDwihb",
// };

// let signature = crypto
//   .HmacSHA256(dataQueryString, keys["skey"])
//   .toString(crypto.enc.Hex);

// let url =
//   baseUrl + endPoint + "?" + dataQueryString + "&signature=" + signature;

//   useEffect(() => {
//     const getBalance = async () => {
//       const getRequest = await axios.get(url, {
//         headers: {
//           "X-MBX-APIKEY": keys["akey"],
//         },
//       });
//       setMetadata(getRequest);
//     };
//     getBalance();
//     const initialOrder = async () => {
//       const getRequest = await axios.post(url, {
//         headers: {
//           "content-type": "application/json",
//           "X-MBX-APIKEY": keys["akey"],
//         },
//       });
//       setProducts(getRequest);
//     };
//     initialOrder();
//   }, []);
//   console.log(metadata);
//   console.log(products);
