import './App.css';
import {useState} from 'react'
import Adder from './Adder'
import Displayer from './Displayer'

function App() {
  const [num,setNum]= useState(0)
  console.log('num is', num)
  return (
    <div className="App">
        <h1>Hello you</h1>
        <Adder newNumber={setNum}  />
        <Displayer number={num} />
    </div>
  );
} 

export default App;
