import React from 'react'

export default function Adder({number})   {
  console.log('num in adder is', number)  

        return (
            <div>
                <button  onClick={number(c=>c+1)} >  Click me
                </button>
            </div>
        )
    }



