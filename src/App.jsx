import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Slide from "./Slide";
import Typewriter from 'typewriter-effect';

export default function App() {
  const [click, setClick] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const ShowMenu = () => setdropdown(!dropdown);
  const HideMenu = () => setdropdown(false);

  const handleclick = () => setClick(!click);
  const closeMobilemenu = () => setClick(false);
  return (
    <>
      <div className="header">
        <div className="logo"><Link to='/' className="logo">LOGO</Link></div>
        <i onClick={handleclick} className={click ? "fa fa-close" : 'fa fa-bars'}></i>
        <ul className={click ? "mobile-navbar active" : "mobile-navbar"}>
          <li className="nav-item nav-items">
            <Link onClick={closeMobilemenu} className="nav-links" to='/'>HOME</Link>
          </li>
          <li className="nav-item">
            <Link onClick={closeMobilemenu} className="nav-links" to='/blogs'>BLOGS</Link>
          </li>
          <li className="nav-item services" onMouseEnter={ShowMenu} onMouseLeave={HideMenu} >
            <Link onClick={closeMobilemenu} className="nav-links" to='/services'>SERVICES <i class={dropdown ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} /> </Link>{dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link onClick={closeMobilemenu} className="nav-links" to='about-us'>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link onClick={closeMobilemenu} className="nav-links" to='contact-us'>CONTACT</Link>
          </li>
        </ul>
      </div>
      <Slide />
      <h1><Typewriter className='TypeWriter'
        options={{
          strings: ['Welcome To Our Website...', 'Thanks For Coming...'],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
    </>
  );
}
