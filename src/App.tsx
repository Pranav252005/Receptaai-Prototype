import { useEffect, useState } from 'react'
import Landing from './components/Landing'
import PreloadGate from './components/PreloadGate'
import './App.css'

function App() {
  const [blurred, setBlurred] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBlurred(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PreloadGate>
      <div className="pageWrapper">
        <div className={`animatedBg ${blurred ? 'animatedBg--blurred' : ''}`} aria-hidden="true">
          <div className="blob blobGreen1" />
          <div className="blob blobGreen2" />
          <div className="blob blobCream1" />
          <div className="blob blobCream2" />
          <div className="blob blobBlue1" />
          <div className="blob blobBlue2" />
        </div>
        <div className="pageContent">
          <Landing />
        </div>
      </div>
    </PreloadGate>
  )
}

export default App
