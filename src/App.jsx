import "./App.css";
import { useState } from "react";
import Title from "./Components/Title";
import SearchField from "./Components/SearchField";
import ItemsList from "./Components/ItemsList";
import ActiveList from "./Components/ActiveList";

function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [activeItems, setActiveItems] = useState([]);

  function addActiveItem(clickedItem) {
    setActiveItems((activeItems) => [...activeItems, clickedItem]);
    console.log(clickedItem);
  }

  return (
    <>
      <Title />
      <ActiveList activeItems={activeItems} />
      <SearchField onChange={setSearchValue} />
      <ItemsList
        activeItems={activeItems}
        searchValue={searchValue}
        onClick={(event) => addActiveItem(event.target.textContent)}
      />
    </>
  );
}

export default App;
