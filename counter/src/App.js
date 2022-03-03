import logo from './logo.svg';
import './App.css';

//relative path is where you are currently at
// absolute path from //Users/brendacassita/Desktop/DPL/week1/react/react-demo

import Counter from './Counter'

function App() {
  // JSX write 'html in js
  // JSX is React thing
  const handleClickYo = ()=>{
    console.log('clicked')
  }
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = 'a'>Hello!</h1>
        <p onClick={handleClickYo}>click me</p>
        <Counter />
    </div>
  );
}

export default App;

// MAIN CONCEPTS//
// JSX
// Components (functional)
// State
// Props