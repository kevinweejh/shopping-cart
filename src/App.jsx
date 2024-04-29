// import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  // TODO: Generate products onLoad, pass it down as Props to Shop, and Cart

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App;
