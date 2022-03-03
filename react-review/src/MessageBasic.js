import {useState} from 'react'


const MessageBasic = ()=>{
 
    const [message, setMessage] = useState('')
    const handleClicked = (char) => {
        console.log(`${char} clicked`)
        setMessage(message + char)
    }
    const renderKeyboard = ()=>{
      let abc = getAlphabet() // create abc varaiable soring array of char
      let jsx = abc.map(char=>{
        return <button key={char} onClick={()=>handleClicked(char)}>{char}</button>
      })
      return jsx
    }

    return (
       <div>
           
           <p>{message}</p>
        
           {renderKeyboard()}
       </div> 
    )
}

export default MessageBasic