// import React, { useState, useEffect } from "react";
// import binance from "../binanceAPI/api";
// import { baseSymbol } from "./App";

// const CancelOrders = () => {
//   const [cancelOrders, setCancelOrders] = useState(false);

//   // Cancel all active orders
//   useEffect(() => {
//     const cancel = async () => {
//       if (cancelOrders) {
//         await binance.futuresCancelAll(baseSymbol);
//       }
//     };
//     cancel();
//   }, [cancelOrders]);

//   return (
//     <div>
//       <h2>
//         Cancel all active orders{" "}
//         <button onClick={() => setCancelOrders(!cancelOrders)}>
//           {!cancelOrders ? "Cancel" : "Cancelled"}
//         </button>
//       </h2>
//     </div>
//   );
// };

// export default CancelOrders;
