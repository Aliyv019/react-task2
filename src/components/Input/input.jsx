import React, { useState } from 'react'
import './input.css'

export default function Input() {
  const [inputValue,setInputValue]=useState('')
  const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }
  const handleButtonClick=()=>{
    console.log(inputValue);
  }
  return (
    <div className='input_div'>
        <input placeholder='Type something' type='text' onChange={handleInputChange}/>
        <button onClick={handleButtonClick}>Search</button>
    </div>
    
  )
}
//idk why there is search in button we don't search anything :D