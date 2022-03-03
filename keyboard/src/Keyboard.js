import { useState } from "react"


const Keyboard=()=>{

  //useState function
  const [message, setMessage] = useState('')

  const handleClicked = (char)=>{
    setMessage(message + char)
  }

  const renderKeyboard = ()=>{
    let abc =[]
    for(let i = 97; i<=122; i++){
      abc.push(String.fromCharCode(i))
    }
    let jsx = abc.map(char=>{
      return <button key={char} onClick={()=>handleClicked(char)}>{char}</button>
    })
    return jsx
  }

  const backspace = ()=>{
    setMessage(message.slice(0, message.length-1))
  }

  return (
    <div>
      <h1>Keyboard App</h1>
      <p>{message}</p>
      {renderKeyboard()}
      <button onClick={()=>backspace()}>backspace</button>
    </div>
  )
}

export default Keyboard