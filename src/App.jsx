import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [PlayerChoice, setPlayerChoice] = useState("");
  const [number, setNumber] = useState();
  const BotChoice = ["rock", "paper", "scissors"];
  const [ArrayForBots, SetArrayForBots] = useState([]);
  const [PlayerDidAChoice, SetPlayerDidAChoice] = useState(false);
  const [WhoWins, SetWhoWins] = useState("");
  const [GameNumber, SetGameNumber] = useState(0);
  const [PlayerWon,SetPlayerWon] = useState(0)
  const [BotWon,SetBotWon] = useState(0)

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 3));
    SetArrayForBots((array) => [...array, BotChoice[number]]);
  }, [GameNumber]);

  console.log(ArrayForBots);
  console.log(number);
  console.log(BotChoice[number]);
  console.log(PlayerDidAChoice);

  function PlayerChoose(e) {
    setPlayerChoice(e.target.value)
    SetPlayerDidAChoice(true);
    SetGameNumber(GameNumber => GameNumber + 1);
    if (PlayerChoice === BotChoice[number]) {
      SetWhoWins("draw");
    } else if (
      (PlayerChoice === "rock" && BotChoice[number] === "paper") ||
      (PlayerChoice === "scissors" && BotChoice[number] === "rock") ||
      (PlayerChoice === "paper" && BotChoice[number] === "scissors")
    ) {
      SetBotWon(Index => Index + 1)
      SetWhoWins("Bot wins");
    } else {
      SetWhoWins("Player wins");
      SetPlayerWon(Index => Index + 1)
    }
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
              <h1>{ArrayForBots[ArrayForBots.length - 1]}</h1>
            )}
          </div>
        </div>
        <div className="">
          <button className="m-1" value="rock" onClick={PlayerChoose}>
              Rock
            </button>
            <button className="m-1" value="paper" onClick={PlayerChoose}>
              Paper
            </button>
            <button className="m-1" value="scissors" onClick={PlayerChoose}>
              Scissors
            </button>
          <h1 className="text-center text-lg">{WhoWins}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
