import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./pages/User"
import Register from "./pages/Register"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
