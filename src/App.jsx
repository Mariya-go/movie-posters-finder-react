import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

function App() {
  const [searchQuery, setSearchQuery] = useState("man");

  const getSearchValue = (inputValue) => {
    setSearchQuery(inputValue);
  };

  return (
    <div className="main-container">
      <Header text="🎥 Movies posters" />
      <Search getSearchValue={getSearchValue} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
