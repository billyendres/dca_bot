import React, { useState, useEffect } from "react";
import binance from "../binanceAPI/api";

const Pnl = () => {
  const [profitAndLoss, setProfitAndLoss] = useState(null);

  // Retreive PNL
  useEffect(() => {
    setInterval(() => {
      const calclateProfitAndLoss = async () => {
        let profit = await binance.futuresPositionRisk();
        setProfitAndLoss(profit[47].unRealizedProfit);
      };
      calclateProfitAndLoss();
      // console.log(price);
    }, 3000);
  }, []);

  return (
    <div>
      <h2>{`PNL(ROE%) = ${profitAndLoss}`}</h2>
    </div>
  );
};

export default Pnl;
