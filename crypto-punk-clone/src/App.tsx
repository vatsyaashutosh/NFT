import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [punkListData, setPunkListData] = useState<any>([]);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x4092A0F7956Ab5B79079E4715063FCf683fae43C"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
