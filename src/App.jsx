import React from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddUserPage from "./pages/AddUserPage"
import EditUserPage from "./pages/EditUserPage"

export default function App(){
  const location = useLocation()
  return (
    <div className="container">
      <header className="header">
        <div className="brand">SynergyLabs</div>
        <nav style={{display:"flex",gap:12}}>
          <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
          <Link to="/add-user" style={{color:"white",textDecoration:"none"}}>Add User</Link>
        </nav>
      </header>
      <main style={{marginTop:18}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/edit-user/:id" element={<EditUserPage />} />
        </Routes>
      </main>
    </div>
  )
}