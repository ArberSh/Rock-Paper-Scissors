import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber] = useState()
  const BotChoice = ["rock","paper","scissors"]
  const [PlayerChoice,SetPlayerChoice] = useState()
  const [PlayerDidAChoice,SetPlayerDidAChoice] = useState(false)
  const [WhoWins,SetWhoWins] = useState("")
  const [Clicked,SetClicked] = useState(0)

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 3)); 
  }, [Clicked]);

  console.log(number)
  console.log(BotChoice[number]) 
  console.log(Clicked)
  
function PlayerChoose(e){
  SetClicked(Clicked => Clicked + 1)
  if(e.target.value === BotChoice[number]){
      SetPlayerDidAChoice(true)
      SetWhoWins("draw")
    }
    else if((e.target.value === "rock" && BotChoice[number] === "paper") || (e.target.value === "scissors" && BotChoice[number] === "rock") || (e.target.value === "paper" && BotChoice[number] === "scissors")){
      SetPlayerDidAChoice(true)
      SetWhoWins("Bot wins")
    }
    else{
      SetPlayerDidAChoice(true)
      SetWhoWins("Player wins")
    }
  }


  return (
    <>
    {PlayerDidAChoice && 
    <h1>Bot Choose:  {BotChoice[number]}</h1>
    }
      
      <button className='m-1' value="rock" onClick={PlayerChoose}>Rock</button>
      <button className='m-1' value="paper" onClick={PlayerChoose}>Paper</button>
      <button className='m-1' value="Scissors" onClick={PlayerChoose}>Scissors</button>

      <h1 className='text-lg'>{WhoWins}</h1>
    </>
  )
}

export default App
