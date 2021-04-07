import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
function App() {
  return (
      //BEM class naming
    <div className="App">

        {/* header */}
        <Header></Header>
        {/* Tinder Card */}
        <TinderCards></TinderCards>
        {/* Swipe Buttons */}

    </div>
  );
}

export default App;
