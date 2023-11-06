import React from 'react'
import './relatedProduct.css'
import data_product from '../asstes/all_product'
import Item from '../Item/Item'
const RelatedProduct = ({product}) => {
    const related = data_product.filter((e)=> e.id !== Number(product.id) && e.category === product.category)
  return (
    <div className='relatedProduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedProduct-item">
            {
                related.slice(0, 3).map((item, i)=> (
                    <Item key={i} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProduct