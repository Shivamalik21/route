import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", borderBottom:"1px solid grey", alignItems:"center", height:"14vh", fontWeight:"bold"}}>
   <div><h1 id="headerh1">Geekfoods</h1>
   </div>
   <div>
    <ul style={{listStyle:"none", display:"flex", gap:"4vw", color:"none",textDecoration:"none"}} id="ulList">
       
     <NavLink to="/quote" className={"tag"}> quotes</NavLink>
     <NavLink to="/resturants" className={"tag"}> Resturant</NavLink>
     <NavLink to="/food" className={"tag"}> Foods</NavLink>
     <NavLink to="/contact" className={"tag"}> Contact</NavLink>

       

    </ul>
   </div>
   <button  id="btn">Get started</button>
    </div>
  )
}

export default Header