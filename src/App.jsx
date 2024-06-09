import { useEffect, useState } from "react";
import "./App.css";
import rock from "./assets/Rock.png";
import paper from "./assets/Paper.png";
import scissors from "./assets/Scissors.png";

function App() {
  const [PlayerChoice, setPlayerChoice] = useState("");
  const [number, setNumber] = useState();
  const BotChoice = ["rock", "paper", "scissors"];
  const [PlayerDidAChoice, SetPlayerDidAChoice] = useState(false);
  const [WhoWins, SetWhoWins] = useState("");
  const [GameNumber, SetGameNumber] = useState(0);
  const [PlayerWon, SetPlayerWon] = useState(0);
  const [BotWon, SetBotWon] = useState(0);
  const [WaitTime, SetWaitTime] = useState(false);
  const [ImageB, SetImageB] = useState("");
  const [ImageP, SetImageP] = useState("");
  const [GameStart,SetGameStart] = useState(false)

  useEffect(() => {
    if(GameNumber > 0){
      SetGameStart(true)
    }
    if (number !== undefined && PlayerChoice !== "") {
      const botChoice = BotChoice[number];
      SetImageB(botChoice === "rock" ? rock : botChoice === "paper" ? paper : scissors);
      SetImageP(PlayerChoice === "rock" ? rock : PlayerChoice === "paper" ? paper : scissors);

      if (PlayerChoice === botChoice) {
        SetWhoWins("Draw");
      } else if (
        (PlayerChoice === "rock" && botChoice === "paper") ||
        (PlayerChoice === "scissors" && botChoice === "rock") ||
        (PlayerChoice === "paper" && botChoice === "scissors")
      ) {
        SetBotWon((Index) => Index + 1);
        SetWhoWins("Cpu wins");
      } else {
        SetWhoWins("Player wins");
        SetPlayerWon((Index) => Index + 1);
      }
    }
  }, [number, PlayerChoice]);

  function PlayerChoose(e) {
    SetWaitTime(false);
    setTimeout(() => {
      SetWaitTime(true);
      setNumber(Math.floor(Math.random() * 3));
    }, 1000);
    setPlayerChoice(e.currentTarget.value);
    SetPlayerDidAChoice(true);
    SetGameNumber((GameNumber) => GameNumber + 1);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
            {GameStart ?  WaitTime ? <h1 className="text-center text-lg">{WhoWins}</h1> : <h1 className="text-center text-lg">...Waiting</h1> : <h1 className="text-center text-lg">Please Select One of these </h1>}
        <div className="flex ">
           
          <div className="flex items-center text-center flex-col">
            {WaitTime && <h1>{PlayerWon}</h1>}
            {GameStart && <h1>Player Choose:</h1>}
            {WaitTime ? (
              <div className="p-4">
                <img className="w-24 scale-x-[-1] rotate-90" src={ImageP} alt="" />
                <h1>{PlayerChoice}</h1></div>
              
            ) : (
              GameStart &&
              <div>
                <div className="p-4 scale-y-[-1]">
                  <img className="w-24 animate-shake" src={rock} alt="" />
                </div>
                <h1>Shaking...</h1>
              </div> )}
          </div>
          <div className="flex flex-col text-center">
            {WaitTime && <h1>{BotWon}</h1>}
            {GameStart && <h1>Cpu Choose: </h1>}
            {WaitTime ? (
              PlayerDidAChoice && (
                <div className="p-4" >
                  <img className=" w-24 rotate-90 scale-[-1]" src={ImageB} alt="" />
                  <h1>{BotChoice[number]}</h1>
                </div>
              )
            ) : (
                GameStart &&
              <div>
                <div className="p-4 scale-[-1]">
                  <img className="w-24 animate-shake" src={rock} alt="" />
                </div>
                <h1>Shaking...</h1>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <button className=" sm:w-40 m-2 w-20 p-2" value="rock" onClick={PlayerChoose}>
            <img className="rotate-90 scale-x-[-1]" src={rock} alt="" />
            Rock
          </button>
          <button className="sm:w-40 m-2 w-20 px-2 pb-2 pt-0" value="paper" onClick={PlayerChoose}>
            <img className="rotate-90 scale-x-[-1]" src={paper} alt="" />
            Paper
          </button>
          <button className="sm:w-40 m-2 w-24 px-4 pt-0.5 pb-2" value="scissors" onClick={PlayerChoose}>
            <img className="rotate-90 scale-x-[-1]" src={scissors} alt="" />
            Scissors
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
