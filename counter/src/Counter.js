import React, {useState} from 'react'

const Counter = (props) =>{
  // const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0)
  const add = () =>{
    console.log('add clicked')
    setCount(count+1)
  }
  const minus =()=>{
    console.log('minus clicked')
    setCount(count - 1)
  }
  const reset =()=>{
    setCount(0)
  }
  return(
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}


// in js you can have 1 default export
export default Counter 

// you can have many export
