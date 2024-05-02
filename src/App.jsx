import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AboutPage from "./pages/about/AboutPage"
import Login from "./pages/login/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
