import "./ItemsList.css";
import fetchShoppingItems from "../utils/fetchAPI";

export default function ItemsList({ activeItems, searchValue, onClick }) {
  const shoppingItems = fetchShoppingItems();

  let filteredShoppingItems;

  if (searchValue) {
    filteredShoppingItems = shoppingItems.filter((item) =>
      item.name.en.toLowerCase().includes(searchValue)
    );

    filteredShoppingItems = filteredShoppingItems.filter(
      (item) => !activeItems.includes(item.name.en)
    );
  }

  return (
    <>
      {filteredShoppingItems?.length === 0 ? (
        <p>Sorry, we couldn't find what you were looking for :(</p>
      ) : (
        <ul>
          {filteredShoppingItems?.map((item) => (
            <li key={item._id} onClick={onClick} value={item._id}>
              {item.name.en}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
