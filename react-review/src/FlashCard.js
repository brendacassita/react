import {useState} from "react";

const FlashCard = (props)=>{
  const [showQuestion, setShowQuestion] =  useState(true)
  const renderCard =()=>{
    if(showQuestion){
      return <p>{props.question}</p>
    }else{
      return <p>{props.answer}</p>
    }
  }
  return(
    <div style={{border:`1px solid ${props.color || 'red'}`}}> 
      <button onClick={()=>setShowQuestion(!showQuestion)}>toggle</button>
      {renderCard()}
    </div>
  )
}

export default FlashCard