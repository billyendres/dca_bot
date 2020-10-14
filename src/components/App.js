import React, { useState, useEffect, useCallback } from "react";
import Pnl from "./Pnl";
import CancelOrders from "./CancelOrders";
import binance from "../binanceAPI/api";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { symbols } from "../variables/symbols";
import "react-dropdown/style.css";
export const baseSymbol = "RENUSDT";

const App = () => {
  const [price, setPrice] = useState(null);
  //   const [strategy, setStrategy] = useState(true);
  const [positionSize, setPositionSize] = useState(null);
  const [takeProfitPercentage, setTakeProfitPercentage] = useState(0.0005);
  const [profitAndLoss, setProfitAndLoss] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [dcaQuantity, setDcaQuantity] = useState(2);
  const [priceDeviationLong, setPriceDeviationLong] = useState(0.998);
  const [priceDeviationShort, setPriceDeviationShort] = useState(1.002);
  const [safetyOrderStep, setSafetyOrderStep] = useState(1);
  const [startBotLong, setStartBotLong] = useState(false);
  const [startBotShort, setStartBotShort] = useState(false);
  const [stackBookLong, setStackBookLong] = useState(false);
  const [stackBookShort, setStackBookShort] = useState(false);
  const [cancelOrders, setCancelOrders] = useState(false);
  //   const [pyramidQuantity, setPyramidQuantity] = useState();
  //   const [pyramidOrder, setPyramidOrder] = useState(false);
  const [symbol, setSymbol] = useState(symbols);
  //   const [Tpl, setTpL] = useState(false);
  //   const [openOrders, setOpenOrders] = useState(null);
  const defaultOption = "RENUSDT";

  // Retreive PNL
  useEffect(() => {
    setInterval(() => {
      const calclateProfitAndLoss = async () => {
        let profit = await binance.futuresPositionRisk();
        setProfitAndLoss(profit[47].unRealizedProfit);
      };
      calclateProfitAndLoss();
      // console.log(price);
    }, 1000);
  }, []);

  // Retreive current coin/token price
  useEffect(() => {
    setInterval(() => {
      const coinPrices = async () => {
        let tokenPrice = await binance.futuresPrices();
        setPrice(tokenPrice.RENUSDT);
      };
      coinPrices();
      // console.log(price);
    }, 1000);
  }, []);

  // Calculate Position size
  useEffect(() => {
    setInterval(() => {
      const size = async () => {
        let pos = await binance.futuresPositionRisk();
        setPositionSize(pos[47].positionAmt);
        console.log(pos[47]);
      };
      size();
    }, 1000);
  }, []);

  //  PLace buy order
  useEffect(() => {
    const futuresLimitBuy = async () => {
      if (startBotLong && stackBookLong) {
        await binance.futuresBuy(
          baseSymbol,
          quantity,
          parseFloat(price * priceDeviationLong).toFixed(5)
        );
        // Safety Order One
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * priceDeviationLong * priceDeviationLong).toFixed(5)
        );
        // Safety Order Two
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price * priceDeviationLong * priceDeviationLong * priceDeviationLong
          ).toFixed(5)
        );
        // Safety Order Three
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong
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
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(5)
        );
        // Safety Order Seven
        await binance.futuresBuy(
          baseSymbol,
          quantity *
            dcaQuantity *
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
              priceDeviationLong *
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(5)
        );
      }
    };
    futuresLimitBuy();
  }, [startBotLong, stackBookLong]);

  // Place sell order
  useEffect(() => {
    const futuresLimitSell = async () => {
      if (startBotShort && stackBookShort) {
        await binance.futuresSell(
          baseSymbol,
          quantity,
          parseFloat(price * priceDeviationShort).toFixed(5)
        );
        // Safety Order One
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * priceDeviationShort * priceDeviationShort).toFixed(
            5
          )
        );
        // Safety Order Two
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Three
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price *
              priceDeviationShort *
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
              priceDeviationShort *
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
              priceDeviationShort *
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
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(5)
        );
        // Safety Order Seven
        await binance.futuresSell(
          baseSymbol,
          quantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity *
            dcaQuantity,
          parseFloat(
            price *
              priceDeviationShort *
              priceDeviationShort *
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
  }, [startBotShort, stackBookShort]);

  // Take profit
  useEffect(() => {
    const takeProfit = async () => {
      // LONG
      if (profitAndLoss > takeProfitPercentage && positionSize > 0) {
        await binance.futuresMarketSell(baseSymbol, positionSize);
        setCancelOrders(!cancelOrders);
      }
      // SHORT
      if (profitAndLoss > takeProfitPercentage && positionSize < 0) {
        await binance.futuresMarketBuy(baseSymbol, positionSize * -1);
        setCancelOrders(!cancelOrders);
      }
    };
    takeProfit();
  }, [takeProfitPercentage, profitAndLoss, positionSize]);

  // Cancel all active orders
  useEffect(() => {
    const cancel = async () => {
      if (cancelOrders) {
        await binance.futuresCancelAll(baseSymbol);
        setTimeout(() => {
          setStackBookLong(!!stackBookLong);
          setStackBookShort(!!stackBookShort);
          console.log(stackBookLong);
          console.log(stackBookShort);
        }, 1500);
      }
    };
    cancel();
  }, [cancelOrders]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       const orders = async () => {
  //         let order = await binance.futuresOpenOrders(baseSymbol);
  //         setOpenOrders(order);
  //         console.log(openOrders);
  //       };
  //       orders();
  //     }, 5000);
  //   }, [openOrders]);

  // Pyramid Buy
  //     useEffect(() => {
  //         const marketBuyLong = async () => {
  //           if (pyramidOrder) {
  //             await binance.futuresMarketBuy(baseSymbol, pyramidQuantity);
  //           }
  //         };
  //         marketBuyLong();
  //       }, [pyramidOrder]);

  //   // Pyramid Sell
  //   useEffect(() => {
  //     const pyramidShort = async () => {
  //       if (startBot && !strategy && pyramidOrder) {
  //         await binance.futuresMarketSell(baseSymbol, pyramidQuantity);
  //       }
  //     };
  //     pyramidShort();
  //   }, [startBotShort, pyramidOrder]);

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
      <h2>{`Current price of: RENUSDT = ${price}`}</h2>
      <h2>{`Current position size = ${positionSize}`}</h2>
      {/* <Pnl /> */}
      <h2>{`PNL(ROE%) = ${profitAndLoss}`}</h2>
      <h2>
        Start Long Bot!{" "}
        <button onClick={() => setStartBotLong(!startBotLong)}>
          {!startBotLong ? "OFF" : "ON"}
        </button>
      </h2>
      <h2>
        Start Bot Short!{" "}
        <button onClick={() => setStartBotShort(!startBotShort)}>
          {!startBotShort ? "OFF" : "ON"}
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
          onChange={(e) => setTakeProfitPercentage(e.target.value)}
          value={takeProfitPercentage}
        />
      </h2>
      <h2>
        Stack the book LONG
        <button onClick={() => setStackBookLong(!stackBookLong)}>
          {!stackBookLong ? "PLACE ORDERS" : "ORDERS RECEIVED"}
        </button>
      </h2>
      <h2>
        Stack the book SHORT
        <button onClick={() => setStackBookShort(!stackBookShort)}>
          {!stackBookShort ? "PLACE ORDERS" : "ORDERS RECEIVED"}
        </button>
      </h2>
      {/* <h2>
        Pyramid quantity (Market order) {strategy ? "LONG" : "SHORT"}{" "}
        <input
          type="text"
          onChange={(e) => setPyramidQuantity(e.target.value)}
          value={pyramidQuantity}
        />{" "}
        <button onClick={() => setPyramidOrder(!pyramidOrder)}>
          {!pyramidOrder ? "PYRAMID ORDER" : "PYRAMID ORDER COMPLETE"}
        </button>
      </h2> */}
      <CancelOrders />
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
//       let currencyPair = "RENUSDT";
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
