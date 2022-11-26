import React from "react";
import PotionTile from "./PotionTile";

// Study me! What information do I require to work?
// How am I the same as ShopTile? How am I different?

function InventoryTile({ potion, sell, children }) {

  return (
    <PotionTile potion={potion} onClick={sell} children={children} className={"inventory-card"}/>
  );
}

export default InventoryTile;
