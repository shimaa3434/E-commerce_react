import React from 'react'
import './newColleations.css'
// import new_collection from '../asstes/new_collections'
import new_collections from '../asstes/new_collections'
import Item from '../Item/Item'
const NewColleations = () => {
  return (
    <div className='new_colleations'>
        <h1>new collections</h1>
        <hr />
        <div className="collections">
          {new_collections .map(item => (
            <Item key={item.id} item={item}/>
          ))}
        </div>
    </div>
  )
}

export default NewColleations