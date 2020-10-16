import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";
import styled from "styled-components";
import "react-dropdown/style.css";

import { dca } from "../variables/symbols";

const Ont = () => {
  const [price, setPrice] = useState(null);
  const [positionSize, setPositionSize] = useState(null);
  const [averagePrice, setAveragePrice] = useState(null);
  const [takeProfitPercentageLong, setTakeProfitPercentageLong] = useState(
    1.003
  );
  const [takeProfitPercentageShort, setTakeProfitPercentageShort] = useState(
    0.997
  );
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
  const [marketBuy, setMarketBuy] = useState(false);
  const [marketSell, setMarketSell] = useState(false);
  const [quantityMarketBuy, setQuantityMarketBuy] = useState(0);
  const [quantityMarketSell, setQuantityMarketSell] = useState(0);

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

  const initialBuy = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity,
      parseFloat(price * 0.999).toFixed(4)
    );
  };

  const safetyOrderOneLong = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity * dcaQuantity,
      parseFloat(price * priceDeviationLong * priceDeviationLong).toFixed(4)
    );
  };

  const safetyOrderTwoLong = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity * dcaQuantity * dcaQuantity,
      parseFloat(
        price * priceDeviationLong * priceDeviationLong * priceDeviationLong
      ).toFixed(4)
    );
  };

  const safetyOrderThreeLong = async () => {
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
  };

  const safetyOrderFourLong = async () => {
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
  };

  const safetyOrderFiveLong = async () => {
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
  };

  const safetyOrderSixLong = async () => {
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
  };

  const safetyOrderSevenLong = async () => {
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
  };

  const safetyOrderEightLong = async () => {
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
  };

  const safetyOrderNineLong = async () => {
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
          priceDeviationLong *
          priceDeviationLong
      ).toFixed(4)
    );
  };

  const safetyOrderTenLong = async () => {
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
          priceDeviationLong *
          priceDeviationLong *
          priceDeviationLong
      ).toFixed(4)
    );
  };

  // PLace buy order
  useEffect(() => {
    const futuresLimitBuy = async () => {
      if (startBotLong && stackBookLong && dcaAmount > 0 && dcaAmount < 2) {
        initialBuy();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 1 &&
        dcaAmount < 3
      ) {
        initialBuy();
        safetyOrderOneLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 2 &&
        dcaAmount < 4
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 3 &&
        dcaAmount < 5
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 4 &&
        dcaAmount < 6
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 5 &&
        dcaAmount < 7
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 6 &&
        dcaAmount < 8
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
        safetyOrderSixLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 7 &&
        dcaAmount < 9
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
        safetyOrderSixLong();
        safetyOrderSevenLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 8 &&
        dcaAmount < 10
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
        safetyOrderSixLong();
        safetyOrderSevenLong();
        safetyOrderEightLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 9 &&
        dcaAmount < 11
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
        safetyOrderSixLong();
        safetyOrderSevenLong();
        safetyOrderEightLong();
        safetyOrderNineLong();
      } else if (
        startBotLong &&
        stackBookLong &&
        dcaAmount > 10 &&
        dcaAmount < 12
      ) {
        initialBuy();
        safetyOrderOneLong();
        safetyOrderTwoLong();
        safetyOrderThreeLong();
        safetyOrderFourLong();
        safetyOrderFiveLong();
        safetyOrderSixLong();
        safetyOrderSevenLong();
        safetyOrderEightLong();
        safetyOrderNineLong();
        safetyOrderTenLong();
      } else {
      }
    };
    futuresLimitBuy();
  }, [startBotLong, stackBookLong, baseSymbol]);

  const initialSell = async () => {
    await binance.futuresSell(
      baseSymbol,
      quantity,
      parseFloat(price * 1.001).toFixed(4)
    );
  };

  const safetyOrderOneShort = async () => {
    await binance.futuresSell(
      baseSymbol,
      quantity * dcaQuantity,
      parseFloat(price * priceDeviationShort * priceDeviationShort).toFixed(4)
    );
  };

  const safetyOrderTwoShort = async () => {
    await binance.futuresSell(
      baseSymbol,
      quantity * dcaQuantity * dcaQuantity,
      parseFloat(
        price * priceDeviationShort * priceDeviationShort * priceDeviationShort
      ).toFixed(4)
    );
  };

  const safetyOrderThreeShort = async () => {
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
  };

  const safetyOrderFourShort = async () => {
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
  };

  const safetyOrderFiveShort = async () => {
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
  };

  const safetyOrderSixShort = async () => {
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
  };

  const safetyOrderSevenShort = async () => {
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
  };

  const safetyOrderEightShort = async () => {
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
  };

  const safetyOrderNineShort = async () => {
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
          priceDeviationShort *
          priceDeviationShort
      ).toFixed(4)
    );
  };

  const safetyOrderTenShort = async () => {
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
          priceDeviationShort *
          priceDeviationShort *
          priceDeviationShort
      ).toFixed(4)
    );
  };

  // Place sell order
  useEffect(() => {
    const futuresLimitSell = async () => {
      if (startBotShort && stackBookShort && dcaAmount > 0 && dcaAmount < 2) {
        initialSell();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 1 &&
        dcaAmount < 3
      ) {
        initialSell();
        safetyOrderOneShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 2 &&
        dcaAmount < 4
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 3 &&
        dcaAmount < 5
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 4 &&
        dcaAmount < 6
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 5 &&
        dcaAmount < 7
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 6 &&
        dcaAmount < 8
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
        safetyOrderSixShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 7 &&
        dcaAmount < 9
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
        safetyOrderSixShort();
        safetyOrderSevenShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 8 &&
        dcaAmount < 10
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
        safetyOrderSixShort();
        safetyOrderSevenShort();
        safetyOrderEightShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 9 &&
        dcaAmount < 11
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
        safetyOrderSixShort();
        safetyOrderSevenShort();
        safetyOrderEightShort();
        safetyOrderNineShort();
      } else if (
        startBotShort &&
        stackBookShort &&
        dcaAmount > 10 &&
        dcaAmount < 12
      ) {
        initialSell();
        safetyOrderOneShort();
        safetyOrderTwoShort();
        safetyOrderThreeShort();
        safetyOrderFourShort();
        safetyOrderFiveShort();
        safetyOrderSixShort();
        safetyOrderSevenShort();
        safetyOrderEightShort();
        safetyOrderNineShort();
        safetyOrderTenShort();
      } else {
      }
    };
    futuresLimitSell();
  }, [startBotShort, stackBookShort, baseSymbol, dcaAmount]);
  console.log(dcaAmount);

  // Take profit
  useEffect(() => {
    const takeProfit = async () => {
      // LONG
      if (positionSize > 0) {
        await binance.futuresSell(
          baseSymbol,
          positionSize,
          parseFloat(averagePrice * takeProfitPercentageLong).toFixed(4),
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
          parseFloat(averagePrice * takeProfitPercentageShort).toFixed(4),
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
  }, [
    takeProfitPercentageLong,
    takeProfitPercentageShort,
    profitAndLoss,
    positionSize,
    averagePrice,
  ]);

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
  useEffect(() => {
    const marketOrderLong = async () => {
      if (marketBuy) {
        await binance.futuresMarketBuy(baseSymbol, quantityMarketBuy);
      }
    };
    marketOrderLong();
  }, [marketBuy]);

  // Pyramid Sell
  useEffect(() => {
    const marketOrderShort = async () => {
      if (marketSell) {
        await binance.futuresMarketSell(baseSymbol, quantityMarketSell);
      }
    };
    marketOrderShort();
  }, [marketSell]);

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
        Price deviation % to open safety order - LONG Strategy{" "}
        <input
          type="text"
          onChange={(e) => setPriceDeviationLong(e.target.value)}
          value={priceDeviationLong}
        />
      </h4>
      <h4>
        Price deviation % to open safety order - SHORT Strategy{" "}
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
        Select take profit % Long{" "}
        <input
          type="text"
          onChange={(e) => setTakeProfitPercentageLong(e.target.value)}
          value={takeProfitPercentageLong}
        />
      </h4>
      <h4>
        Select take profit % Short{" "}
        <input
          type="text"
          onChange={(e) => setTakeProfitPercentageShort(e.target.value)}
          value={takeProfitPercentageShort}
        />
      </h4>
      <h4>
        Market Buy{" "}
        <input
          type="text"
          onChange={(e) => setQuantityMarketBuy(e.target.value)}
          value={quantityMarketBuy}
        />{" "}
        <button onClick={() => setMarketBuy(!marketBuy)}>
          {!marketBuy ? "MARKET BUY" : "BOUGHT @ MARKET"}
        </button>
      </h4>
      <h4>
        Market Sell{" "}
        <input
          type="text"
          onChange={(e) => setQuantityMarketSell(e.target.value)}
          value={quantityMarketSell}
        />{" "}
        <button onClick={() => setMarketSell(!marketSell)}>
          {!marketSell ? "MARKET SEll" : "SOLD @ MARKET"}
        </button>
      </h4>
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
