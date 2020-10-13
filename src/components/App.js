import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { symbols } from "../variables/symbols";
import "react-dropdown/style.css";

const App = () => {
  const [price, setPrice] = useState(null);
  const [strategy, setStrategy] = useState(true);
  const [positionSize, setPositionSize] = useState(null);
  const [profitAndLoss, setProfitAndLoss] = useState(null);
  const [balance, setBalance] = useState(null);
  const [takeProfit, setTakeProfit] = useState(0.5);
  const [quantity, setQuantity] = useState(1);
  const [dcaQuantity, setDcaQuantity] = useState(2);
  const [priceDeviationLong, setPriceDeviationLong] = useState(0.998);
  const [priceDeviationShort, setPriceDeviationShort] = useState(1.002);
  const [safetyOrderStep, setSafetyOrderStep] = useState(1);
  const [startBot, setStartBot] = useState(false);
  const [cancelOrders, setCancelOrders] = useState(false);
  const [stackBook, setStackBook] = useState(false);
  const [pyramidQuantity, setPyramidQuantity] = useState();
  const [pyramidOrder, setPyramidOrder] = useState(false);
  const [symbol, setSymbol] = useState(symbols);

  const baseSymbol = "ADAUSDT";

  const defaultOption = "ADAUSDT";

  // Get base currency balances
  useEffect(() => {
    const futuresBalance = async () => {
      setBalance(await binance.futuresBalance());
    };
    futuresBalance();
    console.log(`Balance = ${balance}`);
  }, []);

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

  //  Retreive PNL
  useEffect(() => {
    setInterval(() => {
      const calclateProfitAndLoss = async () => {
        let profit = await binance.futuresPositionRisk();
        setProfitAndLoss(profit[11].unRealizedProfit);
      };
      calclateProfitAndLoss();
      // console.log(price);
    }, 3000);
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
      if (startBot && strategy && stackBook) {
        await binance.futuresBuy(
          baseSymbol,
          quantity,
          parseFloat(price).toFixed(5)
        );
        // Safety Order One
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * priceDeviationLong).toFixed(5)
        );
        // Safety Order Two
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity,
          parseFloat(price * priceDeviationLong * priceDeviationLong).toFixed(5)
        );
        // Safety Order Three
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price * priceDeviationLong * priceDeviationLong * priceDeviationLong
          ).toFixed(5)
        );
        // Safety Order Four
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(5)
        );
        // Safety Order Five
        await binance.futuresBuy(
          baseSymbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          parseFloat(
            price *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(5)
        );
        // Safety Order Six
        await binance.futuresBuy(
          baseSymbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          parseFloat(
            price *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(5)
          //   parseFloat(coinPrice[currencyPair] * 0.998).toFixed(5)
        );
      }
    };
    futuresLimitBuy();
  }, [startBot, strategy, stackBook]);

  // Pyramid Buy
  useEffect(() => {
    const pyramidLong = async () => {
      if (startBot && strategy && pyramidOrder) {
        await binance.futuresMarketBuy(baseSymbol, pyramidQuantity);
      }
    };
    pyramidLong();
  }, [startBot, strategy, pyramidOrder]);

  // Place sell order
  useEffect(() => {
    const futuresLimitSell = async () => {
      if (startBot && !strategy && stackBook) {
        await binance.futuresSell(
          baseSymbol,
          quantity,
          parseFloat(price * 1.0002).toFixed(5)
        );
        // Safety Order One
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * 1.0002 * priceDeviationShort).toFixed(5)
        );
        // Safety Order Two
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price * 1.0002 * priceDeviationShort * priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Three
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              1.0002 *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Four
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              1.0002 *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Five
        await binance.futuresSell(
          baseSymbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          parseFloat(
            price *
              1.0002 *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Six
        await binance.futuresSell(
          baseSymbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          parseFloat(
            price *
              1.0002 *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
      }
    };
    futuresLimitSell();
  }, [startBot, strategy, stackBook]);

  // Pyramid Sell
  useEffect(() => {
    const pyramidShort = async () => {
      if (startBot && !strategy && pyramidOrder) {
        await binance.futuresMarketSell(baseSymbol, pyramidQuantity);
      }
    };
    pyramidShort();
  }, [startBot, strategy, pyramidOrder]);

  // Cancel all active orders
  useEffect(() => {
    const cancel = async () => {
      if (cancelOrders) {
        await binance.futuresCancelAll(baseSymbol);
      }
    };
    cancel();
  }, [cancelOrders]);

  return (
    <BaseStyle>
      <h1>Billy's DCA Bot</h1>
      <h2>
        Select currency Pair{" "}
        <Dropdown
          options={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          value={defaultOption}
          placeholder="Select a coin/token to trade"
        />
      </h2>
      <h2>{`Current price of: ADAUSDT = ${price}`}</h2>
      <h2>{`Current position size = ${positionSize}`}</h2>
      <h2>{`PNL(ROE%) = ${profitAndLoss}`}</h2>
      <h2>
        Start Bot!{" "}
        <button onClick={() => setStartBot(!startBot)}>
          {!startBot ? "OFF" : "ON"}
        </button>
      </h2>
      <h2>
        Select Strategy{" "}
        <button onClick={() => setStrategy(!strategy)}>
          {strategy ? "LONG" : "SHORT"}
        </button>
      </h2>
      <h2>
        Base order qunatity size{" "}
        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </h2>
      <h2>
        Safety order size eg. Base order * 2 (Compounding){" "}
        <input
          type="text"
          onChange={(e) => setDcaQuantity(e.target.value)}
          value={dcaQuantity}
        />
      </h2>
      <h2>
        Price deviation % to open safety order - LONG Strategy (Default 0.2%){" "}
        <input
          type="text"
          onChange={(e) => setPriceDeviationLong(e.target.value)}
          value={priceDeviationLong}
        />
      </h2>
      <h2>
        Price deviation % to open safety order - SHORT Strategy (Default 0.2%){" "}
        <input
          type="text"
          onChange={(e) => setPriceDeviationShort(e.target.value)}
          value={priceDeviationShort}
        />
      </h2>
      <h2>
        Safety order step scale{" "}
        <input
          type="text"
          onChange={(e) => setSafetyOrderStep(e.target.value)}
          value={safetyOrderStep}
        />
      </h2>
      <h2>
        Select take profit %{" "}
        <input
          type="text"
          onChange={(e) => setTakeProfit(e.target.value)}
          value={takeProfit}
        />
      </h2>
      <h2>
        Stack the book {strategy ? "LONG" : "SHORT"}{" "}
        <button onClick={() => setStackBook(!stackBook)}>
          {!stackBook ? "PLACE ORDERS" : "ORDERS RECEIVED"}
        </button>
      </h2>
      <h2>
        Pyramid quantity (Market order) {strategy ? "LONG" : "SHORT"}{" "}
        <input
          type="text"
          onChange={(e) => setPyramidQuantity(e.target.value)}
          value={pyramidQuantity}
        />{" "}
        <button onClick={() => setPyramidOrder(!pyramidOrder)}>
          {!pyramidOrder ? "PYRAMID ORDER" : "PYRAMID ORDER COMPLETE"}
        </button>
      </h2>
      <h2>
        Cancel all active orders{" "}
        <button onClick={() => setCancelOrders(!cancelOrders)}>
          {!cancelOrders ? "Cancel" : "Cancelled"}
        </button>
      </h2>
    </BaseStyle>
  );
};

export default App;

const BaseStyle = styled.div`
  //   background-color: red;
  font-family: arial;
  display: flex-wrap;
  justify-content: center;
  text-align: center;
`;

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

// const baseSymbol = "ADAUSDT";
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
