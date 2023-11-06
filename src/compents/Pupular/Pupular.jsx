import React from 'react'
import './pupular.css'
import data_product from '../asstes/data'
import Item from '../Item/Item'
const Pupular = () => {
  return (
    <div className='pupular'>
        <h1>pupular in women</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item)=> {return <Item key={item.id} item={item}/>} )}
        </div>
    </div>
  )
}

export default Pupular