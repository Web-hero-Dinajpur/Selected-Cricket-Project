import { Suspense, useState } from 'react'
import './App.css'
import TopBannar from './Components/TopBannar/TopBannar'
import Available from './Components/Available/Available'
import Selected from './Components/Selected/Selected'

const playerAllData = fetch('../public/PlayerData.json').then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvalaibleBalance] = useState(6000000)
  const [purchasedPlayers, setPurchesedPlayers] = useState([])
  return (
    <>
      <TopBannar availableBalance={availableBalance}></TopBannar>

      <div className='mt-32 mb-10 w-[1280px] mx-auto flex justify-end'>
        <button onClick={() => setToggle(true)} className={`font-bold btn p-2 rounded-l-xl ${toggle ? "bg-yellow-300" : ""}`}>Available</button>
        <button onClick={() => setToggle(false)} className={`font-bold btn px-4 rounded-r-xl ${toggle ? "" : "bg-yellow-300"}`}>Selected(0)</button>
      </div>
      {
        toggle === true ? <Suspense fallback={<h3>Loading...</h3>}>< Available
          setAvalaibleBalance={setAvalaibleBalance}
          availableBalance={availableBalance}
          playerAllData={playerAllData}
          purchasedPlayers={purchasedPlayers}
          setPurchesedPlayers={setPurchesedPlayers}
        ></Available ></Suspense >
          : <Suspense><Selected
            purchasedPlayers={purchasedPlayers}
          ></Selected></Suspense>
      }
    </>
  )
}

export default App
