import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { AssetsFile, GifSpriteFile, HomePage, MockUps } from "./pages";

function App() {
  return (
    <>
      <div className="view">Best with FULL SCREEN view</div>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/mockups" exact component={MockUps} />
        <Route path="/assets" exact component={AssetsFile} />
        <Route path="/gif" exact component={GifSpriteFile} />
      </Switch>
    </>
  );
}

export default App;
