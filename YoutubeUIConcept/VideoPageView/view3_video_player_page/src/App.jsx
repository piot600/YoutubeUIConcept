import { useState } from 'react'
import './App.css'
import VideoPlayerPage from "./pages/VideoPlayerPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <VideoPlayerPage/>
  )
}

export default App
