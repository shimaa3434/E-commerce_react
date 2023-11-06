import React from 'react'
import './newsLelter.css'
const NewsLelter = () => {
  return (
    <div className='news_lelter'>
        <h1>get exclusive Offers on your Email</h1>
        <p>subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='youe email id' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLelter