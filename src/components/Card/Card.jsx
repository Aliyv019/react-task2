import React from 'react'
import './card.css'

export default function Card({name,age,profession}) {
    const testnumber=0

  return (
    <>
        <h2>{name}</h2>
        <p>Bu adamin {age} yasi var. Isi gucu {profession}dir. {testnumber}</p>
        <div className='card_btns'>
            <button>Add</button>
            <button>Subtract</button>
        </div>
    </>
  )
}
