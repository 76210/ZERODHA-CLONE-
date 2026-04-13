import React, { useState, useContext } from "react";
//import React, {useContext}  from "react"; 

import axios from "axios"; 
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {     
 const { closeBuyWindow } = useContext(GeneralContext); // ✅ FIX
 const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice), 
        mode: "BUY",
      });
     GeneralContext.closeBuyWindow(); // correct call
    } catch (err) {
      console.log("ORDER ERROR:", err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ FIX 
  }; 
  return (
    <div className="buy-window">
      <h4>{uid} BUY</h4>

      <div className="inputs">
        <fieldset>
          <legend>Qty</legend>
          <input type="number"  value={stockQuantity}  onChange={(e) => setStockQuantity(e.target.value)} />
        </fieldset>

        <fieldset>
          <legend>Price</legend>
          <input type="number" step="0.05" value={stockPrice}  onChange={(e) => setStockPrice(e.target.value)} />
        </fieldset>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button> 
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button> 
        </div>
      </div>
    </div>
  );
};                           
export default BuyActionWindow; 
