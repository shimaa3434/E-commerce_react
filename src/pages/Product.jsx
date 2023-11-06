import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breakcrums from '../compents/Breakcrums/Breakcrums'
import ProductDisplay from '../compents/ProductDisplay/ProductDisplay'
import DescriptionBox from '../compents/DescriptionBox/DescriptionBox'
import RelatedProduct from '../compents/relatedProduct/RelatedProduct'
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find(i => i.id === Number(productId))
  return (
    <div>
      <Breakcrums product={product}/>
      <ProductDisplay  product={product}/>
      <DescriptionBox />
      <RelatedProduct product={product}/>
    </div>
  )
}

export default Product