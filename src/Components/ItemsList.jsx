import "./ItemsList.css";
import { useEffect, useState } from "react";

export default function ItemsList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  async function fetchShoppingItems() {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );
    const data = await response.json();
    setShoppingItems(data.data);
    console.log(shoppingItems);
  }

  useEffect(() => {
    fetchShoppingItems();
  }, []);

  return (
    <ul>
      {shoppingItems.map((item) => (
        <li>{item.name.en}</li>
      ))}
    </ul>
  );
}
