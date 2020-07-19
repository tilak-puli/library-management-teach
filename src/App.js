import React from "react";
import "./App.css";
import books from "./data";

import ListBooks from "./components/ListBooks";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ListBooks books={books} />
    </div>
  );
}

export default App;
