import "./ItemsList.css";
import bla from "../utils/fetchAPI";

export default function ItemsList() {
  const shoppingItems = bla();
  console.log(shoppingItems);

  return (
    <ul>
      {shoppingItems.map((item) => (
        <li>{item.name.en}</li>
      ))}
    </ul>
  );
}
