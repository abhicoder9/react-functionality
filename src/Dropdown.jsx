import React from 'react';
import './Dropdown.css'
import { useState } from 'react';
import { Menuitem } from './Menuitem';
import {Link} from 'react-router-dom';

function Dropdown() {
    const [click,setClick] = useState(false);
    const handleClick =()=> setClick(!click);
  return (
    <>
    <ul onClick={handleClick} className ={click? 'dropdown-menu active':'dropdown-menu'}>
        {Menuitem.map((item,index)=> {
            return(
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>{item.title}</Link>
                </li>
            )
        })}
    </ul>
    </>
  )
}

export default Dropdown;