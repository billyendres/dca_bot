import React, { useState, useEffect } from "react";
import axios from "axios";
import crypto from "crypto-js";
// import binance from "../binanceAPI/api";
// import tradeParameters from "../binanceAPI/tradeParameters";
// console.log(binance);

const baseUrl = "https://fapi.binance.com";
const endPoint = "/fapi/v1/balance";

let dataQueryString =
  "symbol=ADAUSDT&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1&recvWindow=60000&timestamp=" +
  Date.now();
// let dataQueryString =
//   "symbol=BTCUSDT&side=BUY&type=LIMIT&timeInForce=GTC&quantity=0.001&price=5000&recvWindow=60000&timestamp=" +
//   Date.now();

const keys = {
  akey: "pLjpU4fWaRu5KNQxfVWD31aGRNWI7SiHb0vXGhjUTz80dU5NpLPZmob3twX3Z6GP",
  skey: "r8s4avb3zURdmwZTrDgyCB9tBzmGr0rkQanaQJygGlgQGGF45GxYNIzmFMK983BO",
};

let signature = crypto
  .HmacSHA256(dataQueryString, keys["skey"])
  .toString(crypto.enc.Hex);

// apiKey and secretKey : from Binance API doc
// https://binance-docs.github.io/apidocs/spot/en/#signed-trade-user_data-and-margin-endpoint-security
let url =
  baseUrl + endPoint + "?" + dataQueryString + "&signature=" + signature;

const App = () => {
  const [metadata, setMetadata] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initialOrder = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const getRequest = await axios.get(url, {
          headers: {
            "X-MBX-APIKEY": keys["akey"],
          },
        });
        setMetadata(getRequest);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    initialOrder();
    console.log(metadata);
  }, [metadata]);

  return (
    <div className="App">
      <h1>loaded</h1>
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
