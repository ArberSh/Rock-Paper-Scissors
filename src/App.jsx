import { useEffect, useState } from "react";
import "./App.css";
import Rock from "./assets/Rock.png"
import Paper from "./assets/Paper.png"
import Scissors from "./assets/Scissors.png"

function App() {
  const [PlayerChoice, setPlayerChoice] = useState("");
  const [number, setNumber] = useState();
  const BotChoice = ["rock", "paper", "scissors"];
  const [PlayerDidAChoice, SetPlayerDidAChoice] = useState(false);
  const [WhoWins, SetWhoWins] = useState("");
  const [GameNumber, SetGameNumber] = useState(0);
  const [PlayerWon,SetPlayerWon] = useState(0)
  const [BotWon,SetBotWon] = useState(0)

  console.log(number);
  console.log(BotChoice[number]);
  console.log(PlayerChoice);

  useEffect(()=>{
    if (number !== undefined && PlayerChoice !== ""){
    const botChoice =BotChoice[number]
    if (PlayerChoice === botChoice) {
      SetWhoWins("draw");
    } else if (
      (PlayerChoice === "rock" && botChoice === "paper") ||
      (PlayerChoice === "scissors" && botChoice === "rock") ||
      (PlayerChoice === "paper" && botChoice === "scissors")
    ) {
      SetBotWon(Index => Index + 1)
      SetWhoWins("Bot wins");
    } else {
      SetWhoWins("Player wins");
      SetPlayerWon(Index => Index + 1)
    }
  }
  },[number, PlayerChoice])


  function PlayerChoose(e) {
    console.log(e.target.value + "player choooseeee")
    setNumber(Math.floor(Math.random() * 3));
    setPlayerChoice(e.target.value)
    SetPlayerDidAChoice(true);
    SetGameNumber(GameNumber => GameNumber + 1);
  }

  return (
    <>
      <div className="md:flex flex-col justify-center items-center h-screen">
        <div className="flex">
          <div className="flex items-center flex-col bg-amber-400">
            <h1>{PlayerWon}</h1>
            <h1>Player Choose:</h1>
            <h1>{PlayerChoice}</h1>
          </div>
          <div className="flex flex-col text-center bg-lime-500">
            <h1>{BotWon}</h1>
            <h1>Bot Choose: </h1>
            {PlayerDidAChoice && (
              <h1>{BotChoice[number]}</h1>
            )}
          </div>
        </div>
        <div className="">
          <button className="m-2 w-36 p-2 border-gray-900 border-solid border-4" value="rock" onClick={PlayerChoose}>
            
              <img className="rotate-90 scale-x-[-1]" src={Rock} alt="" />
            </button>
            <button className="m-2 w-36 px-2 pb-2 pt-5 border-gray-900 border-solid border-4" value="paper" onClick={PlayerChoose}>
              <img className="rotate-90 scale-x-[-1]" src={Paper} alt="" />
            </button>
            <button className="m-2 w-40 px-4 pt-0.5 pb-2 border-gray-900 border-solid border-4" value="scissors" onClick={PlayerChoose}>
              <img className="rotate-90 scale-x-[-1]" src={Scissors} alt="" />
            </button>
          <h1 className="text-center text-lg">{WhoWins}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
