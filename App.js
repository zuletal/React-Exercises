import './App.css';
import {useState} from 'react'
import Adder from './Adder'
import Displayer from './Displayer'

function App() {
  const [num,setNum]= useState(0)
  return (
    <div className="App">
        <h1>Hello you</h1>
        <Adder number={setNum}  />
        <Displayer count={num} />
    </div>
  );
} 

export default App;
