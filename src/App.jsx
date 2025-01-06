import { useState } from "react";
import "./App.css";
import { GameView } from "./components/GameView";
import { Navbar } from "./components/Navbar";
import { GameProvider } from "./context/GameProvider";

function App() {
  return (
    <GameProvider>
      <Navbar />
      <GameView />
    </GameProvider>
  );
}

export default App;
