import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AboutPage from "./pages/about/AboutPage"
import Login from "./pages/login/Login"
import NotFound from './NotFound'
import NavBar from "./NavBar"
import SignUp from "./pages/login/SignUp"
import Student from "./pages/student/Student"
import ClaseInfo from "./pages/teacher/tareas/ClaseInfo"
import Teacher from "./pages/teacher/clases/Teacher"


function App() {
  const [tipo, setTipo] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={tipo == 1 ? <Student /> : tipo == 2 ? <Teacher /> : <Login tipo={setTipo} /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<ClaseInfo />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
