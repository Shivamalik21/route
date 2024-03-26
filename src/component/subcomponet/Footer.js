import React from 'react'
import { FaFacebook ,FaGithub,FaInstagram,FaTwitch,FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
   <div style={{display:"flex",flexDirection:"column", alignItems:"center", backgroundColor:"lightgray", justifyContent:"space-around"}}>
    <h1 style={{color:"green" }} id="footerh1">logoipsum</h1>
  
   <div style={{width:"30vw", textAlign:"center"}}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p></div>
   
   <div>
    <ul style={{listStyle:"none", display:"flex", gap:"5vw", cursor:"pointer"}} id="ulList">
      <li>About</li>
      <li>Careers</li>
      <li>History</li>
      <li>Service</li>
      <li>Project</li>
      <li>Blog.</li>

    </ul>
   </div>
   <div>
    <ul style={{listStyle:"none", display:"flex", gap:"3vw", fontSize:"25px", cursor:"pointer",  }} id="icon">
      <li><FaFacebook/></li>
      <li><FaTwitter/></li>
      <li><FaInstagram/></li>
      <li><FaTwitch/></li>
      <li><FaGithub/></li>
    </ul>
   </div>
   </div>
  )
}

export default Footer