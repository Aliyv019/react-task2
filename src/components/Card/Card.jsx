import React, { useState } from 'react'
import './card.css'

export default function Card({name,age,profession}) {
    const testnumber=0
    const [num, setNum] = useState(0)

  return (
    <>
        <h2>{name}</h2>
        <p>Bu adamin {age} yasi var. Isi gucu {profession}dir. {num}</p>
        <div className='card_btns'>
            <button onClick={()=>setNum(num+1)}>Add</button>
            <button onClick={()=>setNum(num-1)}>Subtract</button>
        </div>
    </>
  )
}
