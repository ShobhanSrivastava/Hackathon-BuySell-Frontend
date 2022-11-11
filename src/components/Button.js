import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className="bg-black p-2 text-white" onClick={onClick}>{text}</button>
  )
}

export default Button