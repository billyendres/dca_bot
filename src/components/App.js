import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { symbols } from "../variables/symbols";
import BTC from "../tokens/BTC";
import ETH from "../tokens/ETH";
import BCH from "../tokens/BCH";
import XRP from "../tokens/XRP";
import EOS from "../tokens/EOS";
import LTC from "../tokens/LTC";
import TRX from "../tokens/TRX";
import ETC from "../tokens/ETC";
import LINK from "../tokens/LINK";
import XLM from "../tokens/XLM";
import ADA from "../tokens/ADA";
import FLM from "../tokens/FLM";
import FTM from "../tokens/FTM";
import RUNE from "../tokens/RUNE";
import XMR from "../tokens/XMR";
import DASH from "../tokens/DASH";
import BZRX from "../tokens/BZRX";

import ONT from "../tokens/ONT";

const App = () => {
  const [showComponentOne, setShowComponentOne] = useState("");
  const [showComponentTwo, setShowComponentTwo] = useState("");

  return (
    <>
      <Reset />
      <Header>Billy's DCA Bot</Header>
      <PairOne>
        <PairOneDropdown>
          <PairOneHeader>Select Pair One: </PairOneHeader>
          <label>
            <select
              value={showComponentOne}
              onChange={(e) => setShowComponentOne(e.target.value)}
            >
              {symbols.map((symbolOne) => (
                <option key={symbolOne}>{symbolOne}</option>
              ))}
            </select>
          </label>
        </PairOneDropdown>
        {showComponentOne === "ADAUSDT" && <ADA />}
        {showComponentOne === "ONTUSDT" && <ONT />}
        {showComponentOne === "BZRXUSDT" && <BZRX />}
        {showComponentOne === "FLMUSDT" && <FLM />}
        {showComponentOne === "FTMUSDT" && <FTM />}
        {showComponentOne === "RUNEUSDT" && <RUNE />}
      </PairOne>
      <PairTwo>
        <PairTwoDropdown>
          <PairTwoHeader>Select Pair Two: </PairTwoHeader>
          <label>
            <select
              value={showComponentTwo}
              onChange={(e) => setShowComponentTwo(e.target.value)}
            >
              {symbols.map((symbolTwo) => (
                <option key={symbolTwo}>{symbolTwo}</option>
              ))}
            </select>
          </label>
        </PairTwoDropdown>
        {showComponentTwo === "ADAUSDT" && <ADA />}
        {showComponentTwo === "ONTUSDT" && <ONT />}
        {showComponentTwo === "BZRXUSDT" && <BZRX />}
        {showComponentTwo === "FLMUSDT" && <FLM />}
        {showComponentTwo === "FTMUSDT" && <FTM />}
        {showComponentTwo === "RUNEUSDT" && <RUNE />}
      </PairTwo>

      {/* <BTC />
        <ETH />
        <BCH />
        <XRP />
        <EOS />
        <LTC />
        <TRX />
        <ETC />
        <LINK />
        <XLM />
        <ADA />
        <XMR />
        <DASH />
        <ZEC />
        <XTZ />
        <BNB />
        <ATOM />
        <ONT />
        <IOTA />
        <BAT />
        <NEO />
        <QTUM />
        <IOST />
        <THETA />
        <KNC />
        <ZRX />
        <COMP />
        <VET />
        <ALGO />
        <ZIL />
        <OMG />
        <DOGE />
        <SPX />
        <LEND />
        <KAVA />
        <BAND />
        <RLC />
        <WAVES />
        <MKR />
        <SNX />
        <DOT />
        <DEFI />
        <YFI />
        <BAL />
        <CRV />
        <TRB />
        <YFII />
        <RUNE />
        <SUSHI />
        <SRM />
        <BZRX />
        <FIL />
        <EGLD />
        <SOL />
        <ICX />
        <STORJ />
        <BLZ />
        <UNI />
        <AVAX />
        <FTM />
        <HNT />
        <ENJ />
        <FLM />
        <TOMO />
        <NEAR />
        <KSM /> */}
      {/* <Gradient /> */}
    </>
  );
};

export default App;

const Reset = createGlobalStyle`
  * {
   margin: auto;
   font-family: arial;
   display: flex-wrap;
   justify-content: center;
   text-align: center;
   align-items: center;
   color: #FF3AB7;
   background: #03fce3;
  }`;

const Header = styled.h1`
  margin: 1rem;
  text-transform: uppercase;
  font-size: 3rem;
  text-shadow: 3px 3px 2px rgba(95, 12, 85, 1);
  color: 252, 3, 161;
`;

const PairOne = styled.div`
  width: 48vw;
  float: left;
  text-transform: uppercase;
`;

const PairTwo = styled.div`
  width: 48vw;
  float: right;
  text-transform: uppercase;
`;

const PairOneHeader = styled.div`
  width: 48vw;
  float: left;
  text-transform: uppercase;
  text-shadow: 1.5px 1.5px 1px rgba(95, 12, 85, 1);
  margin: 0;
`;

const PairTwoHeader = styled.div`
  width: 48vw;
  float: right;
  text-transform: uppercase;
  text-shadow: 1.5px 1.5px 1px rgba(95, 12, 85, 1);
  margin: 0;
`;

const PairOneDropdown = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PairTwoDropdown = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
