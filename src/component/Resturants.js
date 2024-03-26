import React,{useState,useEffect} from 'react'
import { FaPhone,FaBeer, FaStar} from "react-icons/fa";
let arr1=[{star:"<FaStar/>"},{star:"<FaStar/>"},{star:"<FaStar/>" },{star:"<FaStar/>"},{ star:"<FaStar/>"}]   
const arr=require('./Data.json')
const List = () => {
 const[product,setProduct]=useState(arr)
 const[star,setstar]=useState([arr1])

 useEffect(()=>{
  setstar([arr1])
 },[star])
function myfunction(data){
  const dt=arr.filter((e)=>{
    if(e.name.toLowerCase().includes(data.trim())){
      return true
    }else{
      return false
    }
  })
  setProduct(dt)
}
function changerating(value){
  if(value>0&& value<=5){
     product[0].stars=value;
     
  }if(value.value!=="backspace" && value==="0"){
    alert("value between 1 to 5")
  }
  setProduct([...product])
}
  return (
    <div >
        <div style={{display:"flex", justifyContent:"space-between", margin:"6% 7% 0% 4%"}}>
           <input placeholder='search' className='inp' onChange={((e)=>{
            myfunction(e.target.value)
           })}/>
           <input placeholder='rating' className='inp' type="number" onChange={(e)=>{
            changerating(e.target.value)
           }}/>
        </div>
        <div style={{display:"flex", flexWrap:"wrap", gap:"20vh", marginTop:"5vh",paddingLeft:"2vw", }}>
          {product.map((e,index)=>{
              return(
                <div key={index} style={{border:"1px solid grey", width:"25%", height:"29.5vh", borderRadius:"40px", overflow:"hidden",boxShadow:"0px 1px 2px grey"}}>
               <p style={{fontSize:"15px", fontWeight:"bold", marginLeft:"1vw"}}>@ {e.name}</p>
              <p><FaPhone style={{color:"#22c55e", width:"15px", marginLeft:"1vw"}}  />  {e.contact.phone}</p>
              <p style={{marginLeft:"2vw", color:"gold"}}>{arr1.map((e,index)=>{
               return(
                
               <span key={index}>{<FaStar/>}</span>
                 )
                 
              })
                 }</p>
               <div style={{ paddingLeft:"2vw", backgroundColor:"#f3f4f6", marginTop:"-0.5vh"}}>
              <p style={{fontSize:"15px", color:"#22c55e" ,fontWeight:"bold"}}><FaBeer/> {e.categories[0]}</p>
              <a href='https://google.com' style={{textDecoration:"none"}}> Visit Menu</a>
              </div>
               </div>
              )
            })}
          </div>

    </div>
  )
}

export default List