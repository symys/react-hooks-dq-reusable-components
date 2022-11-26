import React from "react";
import PotionTile from "./PotionTile";

// Study me! What information do I require to work?
// How am I the same as InventoryTile? How am I different?

function ShopTile({ potion, addToInventory, children }) {
 
  return (
    <PotionTile className={"card"} potion={potion} onClick={addToInventory} children={children}/>
  );
}

export default ShopTile;
