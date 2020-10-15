import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";
import styled from "styled-components";
import "react-dropdown/style.css";

import { dca } from "../variables/symbols";

const Ont = () => {
  const [price, setPrice] = useState(null);
  const [positionSize, setPositionSize] = useState(null);
  const [averagePrice, setAveragePrice] = useState(null);
  const [takeProfitPercentage, setTakeProfitPercentage] = useState(0.0015);
  const [profitAndLoss, setProfitAndLoss] = useState(null);
  const [quantity, setQuantity] = useState(0.1);
  const [dcaQuantity, setDcaQuantity] = useState(2);
  const [dcaAmount, setDcaAmount] = useState(4);
  const [priceDeviationLong, setPriceDeviationLong] = useState(0.999);
  const [priceDeviationShort, setPriceDeviationShort] = useState(1.001);
  const [startBotLong, setStartBotLong] = useState(false);
  const [startBotShort, setStartBotShort] = useState(false);
  const [stackBookLong, setStackBookLong] = useState(false);
  const [stackBookShort, setStackBookShort] = useState(false);
  const [restackBook, setRestackBook] = useState(true);

  const baseSymbol = "ONTUSDT";

  // Retreive PNL
  useEffect(() => {
    setInterval(() => {
      const calclateProfitAndLoss = async () => {
        let profit = await binance.futuresPositionRisk();
        setProfitAndLoss(profit[60].unRealizedProfit);
      };
      calclateProfitAndLoss();
    }, 1000);
  }, []);

  // Retreive current coin/token price
  useEffect(() => {
    setInterval(() => {
      const coinPrices = async () => {
        let tokenPrice = await binance.futuresPrices();
        setPrice(tokenPrice.ONTUSDT);
        // console.log(tokenPrice.ONTUSDT);
      };
      coinPrices();
    }, 1000);
    // console.log(price);
  }, []);

  // Calculate Position size
  useEffect(() => {
    setInterval(() => {
      const size = async () => {
        let pos = await binance.futuresPositionRisk();
        setPositionSize(pos[60].positionAmt * 10);
        console.log(pos[60]);
      };
      size();
    }, 1000);
  }, []);

  // Calculate Entry Price
  useEffect(() => {
    setInterval(() => {
      const size = async () => {
        let pos = await binance.futuresPositionRisk();
        setAveragePrice(pos[60].entryPrice);
      };
      size();
    }, 1000);
  }, []);
  console.log(averagePrice);

  // PLace buy order
  useEffect(() => {
    const futuresLimitBuy = async () => {
      if (startBotLong && stackBookLong) {
        await binance.futuresBuy(
          baseSymbol,
          quantity,
          parseFloat(price * 0.999).toFixed(4)
        );
        // Safety Order One
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * priceDeviationLong * priceDeviationLong).toFixed(4)
        );
        // Safety Order Two
        await binance.futuresBuy(
          baseSymbol,
          quantity * dcaQuantity * dcaQuantity,
          parseFloat(
            price * priceDeviationLong * priceDeviationLong * priceDeviationLong
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
        );
        // Safety Order Eight
        await binance.futuresBuy(
          baseSymbol,
          quantity *
            dcaQuantity *
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
              priceDeviationLong *
              priceDeviationLong
          ).toFixed(4)
        );
        // Safety Order Nine
        // await binance.futuresBuy(
        //   baseSymbol,
        //   quantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity,
        //   parseFloat(
        //     price *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong
        //   ).toFixed(4)
        // );
        // Safety Order Ten
        // await binance.futuresBuy(
        //   baseSymbol,
        //   quantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity,
        //   parseFloat(
        //     price *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong *
        //       priceDeviationLong
        //   ).toFixed(4)
        // );
      }
    };
    futuresLimitBuy();
  }, [startBotLong, stackBookLong, baseSymbol]);

  // Place sell order
  useEffect(() => {
    const futuresLimitSell = async () => {
      if (startBotShort && stackBookShort) {
        await binance.futuresSell(
          baseSymbol,
          quantity,
          parseFloat(price * 1.001).toFixed(4)
        );
        // Safety Order One
        await binance.futuresSell(
          baseSymbol,
          quantity * dcaQuantity,
          parseFloat(price * priceDeviationShort * priceDeviationShort).toFixed(
            4
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
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
          ).toFixed(4)
        );
        // Safety Order Eight
        await binance.futuresSell(
          baseSymbol,
          quantity *
            dcaQuantity *
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
              priceDeviationShort *
              priceDeviationShort
          ).toFixed(4)
        );
        // Safety Order Nine
        // await binance.futuresSell(
        //   baseSymbol,
        //   quantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity,
        //   parseFloat(
        //     price *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort
        //   ).toFixed(4)
        // );
        // Safety Order Ten
        // await binance.futuresSell(
        //   baseSymbol,
        //   quantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity *
        //     dcaQuantity,
        //   parseFloat(
        //     price *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort *
        //       priceDeviationShort
        //   ).toFixed(4)
        // );
      }
    };
    futuresLimitSell();
  }, [startBotShort, stackBookShort, baseSymbol, dcaAmount]);

  //   console.log(dcaAmount);

  // Take profit
  useEffect(() => {
    const takeProfit = async () => {
      // LONG
      if (positionSize > 0) {
        await binance.futuresSell(
          baseSymbol,
          positionSize,
          parseFloat(averagePrice * 1.003).toFixed(4),
          {
            reduceOnly: true,
          }
        );
      }
      if (positionSize > -1 && positionSize < 1) {
        setTimeout(() => {
          setRestackBook(!restackBook);
          setRestackBook(!restackBook);
        }, 2000);
      }
      // SHORT
      if (positionSize < 0) {
        await binance.futuresBuy(
          baseSymbol,
          positionSize * -1,
          parseFloat(averagePrice * 0.997).toFixed(4),
          {
            reduceOnly: true,
          }
        );
      }
      if (positionSize > -1 && positionSize < 1) {
        setTimeout(() => {
          setRestackBook(!restackBook);
          setRestackBook(!restackBook);
        }, 2000);
      }
    };
    takeProfit();
  }, [takeProfitPercentage, profitAndLoss, positionSize, averagePrice]);

  // Cancel all active orders
  useEffect(() => {
    const restack = async () => {
      if (restackBook) {
        await binance.futuresCancelAll(baseSymbol);
      }
      setTimeout(() => {
        setStackBookLong(restackBook);
        setStackBookShort(restackBook);
        // console.log(`Cancel Orders ${restackBook}`);
        // console.log(`Stack Long ${stackBookLong}`);
        // console.log(`Stack short ${stackBookShort}`);
      }, 1000);
    };
    restack();
  }, [restackBook]);

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
  //             await binance.futuresMarketBuy(symbol, pyramidQuantity);
  //           }
  //         };
  //         marketBuyLong();
  //       }, [pyramidOrder]);

  //   // Pyramid Sell
  //   useEffect(() => {
  //     const pyramidShort = async () => {
  //       if (startBot && !strategy && pyramidOrder) {
  //         await binance.futuresMarketSell(symbol, pyramidQuantity);
  //       }
  //     };
  //     pyramidShort();
  //   }, [startBotShort, pyramidOrder]);
  //   console.log(symbol);

  return (
    <BaseStyle>
      <h1>Billy's DCA Bot</h1>
      <h2>{`TRADING PAIR: ${baseSymbol}`} </h2>
      <h4>{`Current price of: ${baseSymbol} = ${price}`}</h4>
      <h4>{`Current position size = ${positionSize}`}</h4>
      <h4>{`PNL(ROE%) = ${profitAndLoss}`}</h4>
      <h4>
        Start Long Bot!{" "}
        <button onClick={() => setStartBotLong(!startBotLong)}>
          {!startBotLong ? "OFF" : "ON"}
        </button>
      </h4>
      <h4>
        Start Bot Short!{" "}
        <button onClick={() => setStartBotShort(!startBotShort)}>
          {!startBotShort ? "OFF" : "ON"}
        </button>
      </h4>
      <h4>
        Base order quantity size:{" "}
        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </h4>
      <h4>
        Safety order size eg. Base order * 2 (Compounding){" "}
        <input
          type="text"
          onChange={(e) => setDcaQuantity(e.target.value)}
          value={dcaQuantity}
        />
      </h4>
      <h4>
        Safety Order Quantity:{" "}
        <label>
          <select
            value={dcaAmount}
            onChange={(e) => setDcaAmount(e.target.value)}
          >
            {dca.map((amount) => (
              <option key={amount}>{amount}</option>
            ))}
          </select>
        </label>
      </h4>
      <h4>
        Price deviation % to open safety order - LONG Strategy (Default 0.2%){" "}
        <input
          type="text"
          onChange={(e) => setPriceDeviationLong(e.target.value)}
          value={priceDeviationLong}
        />
      </h4>
      <h4>
        Price deviation % to open safety order - SHORT Strategy (Default 0.2%){" "}
        <input
          type="text"
          onChange={(e) => setPriceDeviationShort(e.target.value)}
          value={priceDeviationShort}
        />
      </h4>
      {/* <h4>
        Safety order step scale{" "}
        <input
          type="text"
          onChange={(e) => setSafetyOrderStep(e.target.value)}
          value={safetyOrderStep}
        />
      </h4> */}
      <h4>
        Select take profit %{" "}
        <input
          type="text"
          onChange={(e) => setTakeProfitPercentage(e.target.value)}
          value={takeProfitPercentage}
        />
      </h4>
      {/* <h4>
        Pyramid quantity (Market order) {strategy ? "LONG" : "SHORT"}{" "}
        <input
          type="text"
          onChange={(e) => setPyramidQuantity(e.target.value)}
          value={pyramidQuantity}
        />{" "}
        <button onClick={() => setPyramidOrder(!pyramidOrder)}>
          {!pyramidOrder ? "PYRAMID ORDER" : "PYRAMID ORDER COMPLETE"}
        </button>
      </h4> */}
      <h4>
        STACK THE BOOK:{" "}
        <button onClick={() => setRestackBook(!restackBook)}>
          {!restackBook ? "Restack The Book " : "Stacked"}
        </button>
      </h4>
    </BaseStyle>
  );
};

export default Ont;

const BaseStyle = styled.div`
  //   background-color: red;
  font-family: arial;
  display: flex-wrap;
  justify-content: center;
  text-align: center;
`;
