import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { showModal, showSidebar}=useGlobalContext();
  return <main>

    <button className="sidebar-toggle" onClick={showSidebar}>
    <FaBars></FaBars>
  </button>
  <button className="btn" onClick={showModal} >Show Modal</button>
  
  </main>
}

export default Home
