import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./pages/User"
import Register from "./pages/Register"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
