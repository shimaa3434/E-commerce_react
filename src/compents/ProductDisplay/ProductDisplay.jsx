import React, { useContext } from 'react'
import './productDisplay.css'
import _ from 'lodash';
import start_icon from '../asstes/star_icon.png'
import star_dull_icon from "../asstes/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';
const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product_display'>
        <div className="left">
            <div className="img-list">
                {/* {
                    product.image.map(item =>  <img src={item} alt="" />)
                } */}
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="img">
            <img src={product.image} alt="" className='main-img'/>
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="star">
                {_.times(4, ()=> <img src={start_icon} alt="" /> )}
                <img src={star_dull_icon} alt="" />
                <p>(200)</p>
            </div>
            <div className="prices">
                <div className="old-price">${product.old_price}</div>
                <div className="new-price">${product.new_price}</div>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente eveniet nesciunt sequi, aperiam magnam rerum nostrum voluptatibus veritatis ipsam dolorum dolor amet vero ipsa maiores recusandae deleniti tempora 
            </div>
            <div className="size">
                <h1>select size</h1>
                <div className="size-list">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>add to cart</button>
            <p className='product-category'><span>Category : </span> Women, T-shirt, crop Top</p>
            <p className='product-category'><span>Tags : </span>Modern, Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay