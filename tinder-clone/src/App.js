import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
      //BEM class naming
    <div className="App">

        {/* header */}
        <Header></Header>
        {/* Tinder Card */}
        <TinderCards></TinderCards>
        {/* Swipe Buttons */}
        <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
