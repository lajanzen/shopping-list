import { useEffect, useState } from "react";

export default function bla() {
  const [shoppingItems, setShoppingItems] = useState([]);

  async function fetchShoppingItems() {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );
    const data = await response.json();
    setShoppingItems(data.data);
  }

  useEffect(() => {
    fetchShoppingItems();
  }, []);

  return shoppingItems;
}
