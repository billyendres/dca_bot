// import React, { useState, useEffect, createContext } from "react";
// import binance from "../binanceAPI/api";
// export const PriceContext = createContext(price);

// const [price, setPrice] = useState(null);
// const TokenPrice = () => {
//   // Retreive current coin/token price
//   useEffect(() => {
//     setInterval(() => {
//       const coinPrices = async () => {
//         let tokenPrice = await binance.futuresPrices();
//         setPrice(tokenPrice.RENUSDT);
//       };
//       coinPrices();
//       // console.log(price);
//     }, 10000);
//   }, []);

//   return (
//     <div>
//       <h2>{`Current price of: RENUSDT = ${price}`}</h2>
//     </div>
//   );
// };

// export default TokenPrice;
