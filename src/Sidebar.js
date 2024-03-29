import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`} >

  <div className="sidebar-header">
    <div className="logo"><img src={logo} alt="" /></div>
    <button className="close-btn" onClick={closeSidebar}><FaTimes></FaTimes></button>
    </div>
    <ul className="links">
      {
        links.map((item)=>{
          const {id,url,text,icon}=item;
          return <li key={id} >
            <a href={url}>
              {icon}
              {text}
            </a>

          </li>
        })
      }
    </ul>
    <ul className="social-icons">
      {
        social.map((item) => {
          const { id, url, icon } = item;
          return <li key={id} >
            <a href={url}>
              {icon}
             
            </a>

          </li>
        })
      }
    </ul>


  
  

  </aside>
}

export default Sidebar
