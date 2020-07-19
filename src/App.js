import React from "react";
import "./App.css";
import books from "./data";

import ListBooks from "./components/ListBooks";

function App() {
  return (
    <div className="App">
      <ListBooks books={books} />
    </div>
  );
}

export default App;
