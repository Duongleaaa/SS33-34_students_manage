import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function UpDelBlock() {
  return (
    <div style={{display:'flex',gap:'10px'}}>
      <button className='btn-function'>Chặn</button>
      <button className='btn-function'>Sửa</button>
      <button className='btn-function'>Xóa</button>
    </div>
  )
}
