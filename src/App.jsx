import { useState } from 'react'
import { FollowMouse } from './FollowMouse'

import './App.css'

function App() {
  const[mounted, setMounted] = useState(true)
  return (
    <main>
      { mounted && <FollowMouse/> }
      <button onClick={() => setMounted(!mounted)}>
        componente
      </button>
    </main>
  )
}

export default App
