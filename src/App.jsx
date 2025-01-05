import { useState } from "react";
import "./App.css";
import { GameView } from "./components/GameView";
import { Navbar } from "./components/Navbar";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState();
  return (
    <>
      <Navbar />
      <GameView />
    </>
  );
}

export default App;
