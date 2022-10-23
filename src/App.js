import News from "./components/News";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Pagination />
      <News />
    </div>
  );
}

export default App;
