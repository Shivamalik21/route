
const data = require('./quotes');
const Body = () => {
    const numbers = data.quotes;
  
   return (
    <div style={{textAlign:"center"}}>
   {numbers.map((number,e)=>{
   
   if(e<=10){
    return(
      <div key={e} style={{ margin:"5vw", height:"17vw", boxShadow:"0px 0px 4px grey", display:"flex", flexDirection:"column", justifyContent:"center"}}>
         <p style={{fontWeight:"bold", fontSize:"30px"  }}>{number.quote}</p>
         <span style={{color:"brown", fontWeight:"bold"}}>{number.author}</span>
       </div>
    )
   }
  })
   }
    
     </div>
  
   )
  }
     
    
  
  
  export default Body