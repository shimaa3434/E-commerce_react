import React, { createContext, useState } from "react";

import all_product from '../compents/asstes/all_product'


export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {}
    for(let i= 0; i<all_product.length+1; i++){
        cart[i]= 0
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId)=>{
        setCartItems((p)=> ({...p, [itemId]:p[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((p)=> ({...p, [itemId]:p[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for (const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo = all_product.find((e)=>  e.id === Number(i))
                totalAmount += itemInfo.new_price * cartItems[i]
            }  
        }
        return totalAmount
    }
    const getTotalCartItems = ()=>{
        let totalItems= 0
        for (const i in cartItems){
            if(cartItems[i] > 0){
                totalItems += cartItems[i]
            }
        }
        return totalItems
    }
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}
    return (
<ShopContext.Provider value={contextValue} >
    {props.children}
</ShopContext.Provider>
    )
    
}

export default ShopContextProvider