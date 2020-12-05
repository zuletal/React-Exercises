import React from 'react'

export default function Adder({newNumber})   {
    console.log('num in adder is', newNumber)  
  
          return (
              <div>
                  <button  onClick={()=> newNumber(c=>c+1)} >  Click me
                  </button>
                 
              </div>
          )
      }
