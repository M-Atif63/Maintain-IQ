import React from 'react'
import "./button.css"
function Button({ btnValue,btnStyle }) {
  return (
    <div>
      <button style={btnStyle} className='button'>{btnValue}</button>
    </div>
  )
}

export default Button
