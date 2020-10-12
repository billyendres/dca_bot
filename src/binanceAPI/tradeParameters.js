import binance from "./api";

const tradeParameters = async () => {
  // Chose pair to trade
  let currencyPair = "ADAUSDT";
  // Chose amount to trade
  let amount = 1;

  let pos = await binance.futuresPositionRisk();
  let positionSize = pos[11].positionAmt;
  //   console.log(positionSize);
  //   console.log(pos[11]);

  let price = 0.1;

  // Get coin price
  let coinPrice = await binance.futuresPrices();

  // Initial Order
  let initialOrder = coinPrice[currencyPair];
  console.log(`Initial Order ${initialOrder}`);

  // DCA Order One
  let dcaOne = parseFloat(coinPrice[currencyPair] * 0.998).toFixed(5);
  console.log(`DCA 1 buy Price ${dcaOne}`);

  // DCA Order Two
  let dcaTwo = parseFloat(coinPrice[currencyPair] * 0.994).toFixed(5);
  console.log(`DCA 2 buy Price ${dcaTwo}`);

  // DCA Order Three
  let dcaThree = parseFloat(coinPrice[currencyPair] * 0.99).toFixed(5);
  console.log(`DCA 3 buy Price ${dcaThree}`);

  //   Initial Buy Order
  const initialBuyOrder = async () => {
    await binance.futuresBuy(
      currencyPair,
      amount,
      price
      //   initialOrder
    );
    // console.log(positionSize);
  };
  initialBuyOrder();

  let pos1 = await binance.futuresOpenOrders("ADAUSDT");
  let excq = pos1[0];

  console.log(positionSize);

  //   let positions = await binance.futuresOpenOrders("ADAUSDT");
  //   console.log(positions);

  //   let pos = await binance.futuresBalance();
  //   console.log(pos);

  //     console.log(positionSizeOne);

  //   const dcaOrderOne = async () => {
  //     console.log(positionSize);
  //     await binance.futuresBuy(currencyPair, amount * 2, dcaOne);
  //   };
  //   const dcaOrderTwo = async () => {
  //     await dcaOrderOne();
  //     await binance.futuresBuy(currencyPair, amount * 2, dcaTwo);
  //   };

  //   dcaOrderTwo();
};
// tradeParameters();

export default tradeParameters;
