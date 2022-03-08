import { useEffect, useState } from "react";

export default function fetchShoppingItems() {
  const [shoppingItems, setShoppingItems] = useState([]);

  async function fetchItems() {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );
    const data = await response.json();
    setShoppingItems(data.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return shoppingItems;
}
