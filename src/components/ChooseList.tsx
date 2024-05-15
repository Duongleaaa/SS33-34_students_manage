import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function ChooseList() {
  return (
    <div>
      <ul style={{
        display:'flex',
        gap:'10px'
      }}>
        <li> <button  className='choose-item'><FontAwesomeIcon icon={faCircleArrowLeft} /></button></li>
        <li ><button className='choose-item active'>1</button></li>
        <li ><button className='choose-item'>2</button></li>
        <li ><button className='choose-item'>3</button></li>
        <li ><button className='choose-item'>4</button></li>
        <li> <button  className='choose-item'><FontAwesomeIcon icon={faCircleArrowRight} /></button></li>
      </ul>
    </div>
  )
}
