import React from 'react'
import Card from './Card.jsx'
import styles from './card.module.css'

export default function CardContainer({data}) {
  const myarr=['Miri','Tahir','Anar']
  return (
    <div className='main'>
      <div className={styles.main_div}>
        {myarr.map((value,id)=>(
          <Card name={value} age={data.age} profession={data.profession} />
        ))}
      </div>
    </div>
  )
}
