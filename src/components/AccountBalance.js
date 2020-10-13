import React, { useState, useEffect } from "react";

const AccountBalance = () => {
  const [balance, setBalance] = useState(null);

  // Get base currency balances
  useEffect(() => {
    const futuresBalance = async () => {
      setBalance(await binance.futuresBalance());
    };
    futuresBalance();
    console.log(`Balance = ${balance}`);
  }, []);
  return (
    <div>
      <h> account balance</h>
    </div>
  );
};

export default AccountBalance;
