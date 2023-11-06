import React, { useContext } from 'react'
import './css/shopCategory.css'
import {ShopContext} from '../context/ShopContext'
import dropdown from '../compents/asstes/dropdown_icon.png'
import Item from '../compents/Item/Item'
const ShopCategory = ({banner, category}) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop_category'>
      <img src={banner} className ="shopCategory_banner" alt="" />
      <div className="shopCategory_indexSort">
        <p>
          <span>showing 1-12</span> out of {all_product.length} product
        </p>
        <div className="shopCategory_sort">
          sotr By <img   src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map(item => {
          if(category === item.category){
            return (
              <Item item={item} />
            )

          }else{
            return null
          }
        })}
      </div>
      <div className="shopCategroy_loadmore">
          explore more
      </div>
    </div>
  )
}

export default ShopCategory