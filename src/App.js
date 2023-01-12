import React from 'react'
import Home from './pages/home/Home'
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import New from "./pages/new/New"
import Single from "./pages/single/Single"
import {Routes,Route} from "react-router-dom"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<New />} />
        <Route path="/single" element={<Single />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  )
}

export default App
