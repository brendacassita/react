import { useState } from "react"



const Flashcard = (props)=>{
  const [showQuestion, setShowQuestion] = useState(true)
  const renderCard = ()=>{
    if(showQuestion){
      return<p>{props.question}</p>
    }else{
      return<p>{props.answer}</p>
    }
  }

  return(
    <div style={{border: '1px solid black', margin: '10px'}}>
      <button onClick={()=>setShowQuestion(!showQuestion)}>toggle</button>
    {renderCard()}
    </div>
  )
}
export default Flashcard