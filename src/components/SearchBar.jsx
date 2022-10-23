import React from "react";
import { useGlobalContext } from "../Context/Context";

const SearchBar = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <div className="searchBar-container">
      <h1>Search Hacker News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder=""
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
