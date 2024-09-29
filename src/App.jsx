import { useContext } from 'react'
import './App.css'
import Display from './Components/Display'
import Player from './Components/Player'
import Sidebar from './Components/Sidebar'
import { PlayerContex } from './Context/PlayerContex'

function App() {

  const {audioRef,track} = useContext(PlayerContex);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'/>
    </div>
  )
}

export default App
