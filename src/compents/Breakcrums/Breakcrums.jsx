import React from 'react'
import './breakcrums.css'
import arrow_icon from '../asstes/breadcrum_arrow.png'
const Breakcrums = ({product}) => {
  return (
    <div className='breadcrum'>
      home <img src={arrow_icon} alt="" />
      shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  )
}

export default Breakcrums