import "./App.css";
import { useState } from "react";
import Title from "./Components/Title";
import SearchField from "./Components/SearchField";
import ItemsList from "./Components/ItemsList";

function App() {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <>
      <Title />
      <SearchField onChange={setSearchValue} />
      <ItemsList searchValue={searchValue} />
    </>
  );
}

export default App;
