import "./styles.css";
import React from "react";
import SearchQuery from "./search-query";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Stack-Overflow</h1>
      <h2>Let's get started...!!!</h2>
      <SearchQuery />
    </div>
  );
};

export default App;
