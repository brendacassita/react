import {useState} from 'react'

const Container = (props)=>{
  const [showContent, setShowContent] = useState(true)
  return (
    <div className = 'Container'>
      <div>
      <h1> {props.header}</h1>
      <button onClick={()=>setShowContent(!showContent)}>
        {showContent ? 'hide':'show'}
      </button>
      </div>
      {showContent && props.children}
      
    </div>
  )
}
export default Container