import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import User from "./pages/User"
import Register from "./pages/register"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
