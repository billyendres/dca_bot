import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";
import styled from "styled-components";
import "react-dropdown/style.css";

import { dca } from "../variables/symbols";

const LRC = () => {
  const [price, setPrice] = useState(null);
  const [positionSize, setPositionSize] = useState(null);
  const [averagePrice, setAveragePrice] = useState(null);
  const [takeProfitPercentageLong, setTakeProfitPercentageLong] = useState(
    1.004
  );
  const [takeProfitPercentageShort, setTakeProfitPercentageShort] = useState(
    0.996
  );
  const [profitAndLoss, setProfitAndLoss] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [dcaQuantity, setDcaQuantity] = useState(2);
  const [dcaAmount, setDcaAmount] = useState(4);
  const [priceDeviationLong, setPriceDeviationLong] = useState(0.996);
  const [priceDeviationShort, setPriceDeviationShort] = useState(1.004);
  const [startBotLong, setStartBotLong] = useState(false);
  const [startBotShort, setStartBotShort] = useState(false);
  const [stackBookLong, setStackBookLong] = useState(false);
  const [stackBookShort, setStackBookShort] = useState(false);
  const [restackBook, setRestackBook] = useState(true);
  const [marketBuy, setMarketBuy] = useState(false);
  const [marketSell, setMarketSell] = useState(false);
  const [quantityMarketBuy, setQuantityMarketBuy] = useState(0);
  const [quantityMarketSell, setQuantityMarketSell] = useState(0);
  const [takeProfitPriceLong, setTakeProfitPriceLong] = useState(null);
  const [takeProfitPriceShort, setTakeProfitPriceShort] = useState(null);

  const baseSymbol = "LRCUSDT";

  // Retreive PNL
  useEffect(() => {
    setInterval(() => {
      const calclateProfitAndLoss = async () => {
        let profit = await binance.futuresPositionRisk();
        setProfitAndLoss(profit[32].unRealizedProfit);
        console.log(profit);
      };
      calclateProfitAndLoss();
    }, 1000);
  }, []);

  // Retreive current coin/token price
  useEffect(() => {
    setInterval(() => {
      const coinPrices = async () => {
        let tokenPrice = await binance.futuresPrices();
        setPrice(tokenPrice.LRCUSDT);
        // console.log(tokenPrice.LRCUSDT);
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
        setPositionSize(pos[32].positionAmt);
        console.log(pos);
      };
      size();
    }, 1000);
  }, []);

  // Calculate Entry Price
  useEffect(() => {
    setInterval(() => {
      const size = async () => {
        let pos = await binance.futuresPositionRisk();
        setAveragePrice(pos[32].entryPrice);
      };
      size();
    }, 1000);
  }, []);

  console.log(averagePrice);

  const initialBuy = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity,
      parseFloat(price * 0.998).toFixed(5)
    );
  };

  const safetyOrderOneLong = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity * dcaQuantity,
      parseFloat(price * priceDeviationLong * priceDeviationLong).toFixed(5)
    );
  };

  const safetyOrderTwoLong = async () => {
    await binance.futuresBuy(
      baseSymbol,
      quantity * dcaQuantity * dcaQuantity,
      parseFloat(
        price * priceDeviationLong * priceDeviationLong * priceDeviationLong
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      parseFloat(price * 1.002).toFixed(5)
    );
  };

  const safetyOrderOneShort = async () => {
    await binance.futuresSell(
      baseSymbol,
      quantity * dcaQuantity,
      parseFloat(price * priceDeviationShort * priceDeviationShort).toFixed(5)
    );
  };

  const safetyOrderTwoShort = async () => {
    await binance.futuresSell(
      baseSymbol,
      quantity * dcaQuantity * dcaQuantity,
      parseFloat(
        price * priceDeviationShort * priceDeviationShort * priceDeviationShort
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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
      ).toFixed(5)
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

  useEffect(() => {
    const takeProfitLong = () => {
      setTakeProfitPriceLong(averagePrice * takeProfitPercentageLong);
    };
    takeProfitLong();
  }, [averagePrice, takeProfitPercentageLong]);

  useEffect(() => {
    const takeProfitShort = () => {
      setTakeProfitPriceShort(averagePrice * takeProfitPercentageShort);
    };
    takeProfitShort();
  }, [averagePrice, takeProfitPercentageShort]);

  // Take profit
  useEffect(() => {
    const takeProfit = async () => {
      // LONG
      if (positionSize > 0 && startBotLong) {
        await binance.futuresSell(
          baseSymbol,
          positionSize,
          parseFloat(takeProfitPriceLong).toFixed(5),
          {
            reduceOnly: true,
          }
        );
      }
      if (positionSize > -1 && positionSize < 1 && startBotShort) {
        setTimeout(() => {
          setRestackBook(!restackBook);
          setRestackBook(!restackBook);
        }, 2000);
      }
      // SHORT
      if (positionSize < 0 && startBotShort) {
        await binance.futuresBuy(
          baseSymbol,
          positionSize * -1,
          parseFloat(takeProfitPriceShort).toFixed(5),
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
    takeProfitPriceLong,
    takeProfitPriceShort,
    profitAndLoss,
    positionSize,
    averagePrice,
    startBotShort,
    startBotLong,
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
      }, 1000);
    };
    restack();
  }, [restackBook]);

  // Market Buy
  useEffect(() => {
    const marketOrderLong = async () => {
      if (marketBuy) {
        await binance.futuresMarketBuy(baseSymbol, quantityMarketBuy);
      }
    };
    marketOrderLong();
  }, [marketBuy]);

  // Market Sell
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
      <TradingPair>{`TRADING PAIR: ${baseSymbol}`} </TradingPair>
      <Heading>{`Current price of: ${baseSymbol} = ${price}`}</Heading>
      <Heading>{`Current position size = ${positionSize}`}</Heading>
      <Heading>{`PNL(ROE%) = ${profitAndLoss}`}</Heading>
      <Heading>{`Average Entry Price = ${averagePrice}`}</Heading>
      {positionSize > 0 && (
        <Heading>{`Take Profit Price Long = ${parseFloat(
          takeProfitPriceLong
        ).toFixed(4)}`}</Heading>
      )}
      {positionSize < 0 && (
        <Heading>{`Take Profit Price Short = ${parseFloat(
          takeProfitPriceShort
        ).toFixed(4)}`}</Heading>
      )}
      <Heading>
        Start Long Bot!{" "}
        <Button onClick={() => setStartBotLong(!startBotLong)}>
          {!startBotLong ? "OFF" : "ON"}
        </Button>
      </Heading>
      <Heading>
        Start Bot Short!{" "}
        <Button onClick={() => setStartBotShort(!startBotShort)}>
          {!startBotShort ? "OFF" : "ON"}
        </Button>
      </Heading>
      <Heading>
        Base order quantity size:{" "}
        <Input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </Heading>
      <Heading>
        Safety order size eg. Base order * 2 (Compounding){" "}
        <Input
          type="text"
          onChange={(e) => setDcaQuantity(e.target.value)}
          value={dcaQuantity}
        />
      </Heading>
      <Heading>
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
      </Heading>
      <Heading>
        Price deviation % to open safety order - LONG Strategy{" "}
        <Input
          type="text"
          onChange={(e) => setPriceDeviationLong(e.target.value)}
          value={priceDeviationLong}
        />
      </Heading>
      <Heading>
        Price deviation % to open safety order - SHORT Strategy{" "}
        <Input
          type="text"
          onChange={(e) => setPriceDeviationShort(e.target.value)}
          value={priceDeviationShort}
        />
      </Heading>
      <Heading>
        Select take profit % Long{" "}
        <Input
          type="text"
          onChange={(e) => setTakeProfitPercentageLong(e.target.value)}
          value={takeProfitPercentageLong}
        />
      </Heading>
      <Heading>
        Select take profit % Short{" "}
        <Input
          type="text"
          onChange={(e) => setTakeProfitPercentageShort(e.target.value)}
          value={takeProfitPercentageShort}
        />
      </Heading>
      <Heading>
        Market Buy{" "}
        <Input
          type="text"
          onChange={(e) => setQuantityMarketBuy(e.target.value)}
          value={quantityMarketBuy}
        />{" "}
        <Button onClick={() => setMarketBuy(!marketBuy)}>
          {!marketBuy ? "MARKET BUY" : "BOUGHT @ MARKET"}
        </Button>
      </Heading>
      <Heading>
        Market Sell{" "}
        <Input
          type="text"
          onChange={(e) => setQuantityMarketSell(e.target.value)}
          value={quantityMarketSell}
        />{" "}
        <Button onClick={() => setMarketSell(!marketSell)}>
          {!marketSell ? "MARKET SELL" : "SOLD @ MARKET"}
        </Button>
      </Heading>
      <Heading>
        STACK THE BOOK:{" "}
        <Button onClick={() => setRestackBook(!restackBook)}>
          {!restackBook ? "Restack The Book " : "Stacked"}
        </Button>
      </Heading>
    </BaseStyle>
  );
};

export default LRC;

const BaseStyle = styled.div`
  padding: 0.5rem;
  font-family: arial;
  display: flex-wrap;
  justify-content: center;
`;

const TradingPair = styled.h2`
  padding: 0.5rem;
`;

const Heading = styled.h3`
  padding: 0.2rem;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const Input = styled.input`
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
