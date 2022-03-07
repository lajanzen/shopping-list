import "./ItemsList.css";
import fetchShoppingItems from "../utils/fetchAPI";

export default function ItemsList() {
  const shoppingItems = fetchShoppingItems();
  console.log(shoppingItems);

  return (
    <ul>
      {shoppingItems.map((item) => (
        <li>{item.name.en}</li>
      ))}
    </ul>
  );
}
