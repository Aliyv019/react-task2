import React from 'react'
import Card from './Card.jsx'

export default function CardContainer({data}) {
  return (
    <div className='main'>
      <div className='container'>
        <Card name={data.name} age={data.age} profession={data.profession} />
      </div>
    </div>
  )
}
