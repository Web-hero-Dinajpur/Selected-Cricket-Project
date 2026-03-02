import { Suspense } from 'react'
import './App.css'
import TopBannar from './Components/TopBannar/TopBannar'
import Available from './Components/Available/Available'

const playerAllData = fetch('../public/PlayerData.json').then(res => res.json())

function App() {

  return (
    <>
      <TopBannar></TopBannar>
      <div className='mt-32 mb-10 w-[1280px] mx-auto flex justify-end'>
        <button className='font-bold btn p-2 rounded-l-xl bg-yellow-300'>Available</button>
        <button className='font-bold btn px-4 rounded-r-xl'>Selected(0)</button>
      </div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Available playerAllData={playerAllData}></Available>
      </Suspense>
    </>
  )
}

export default App
