import React from 'react'
import  './footer.css'
import footer_logo from '../asstes/logo_big.png'
import instagram_icon  from '../asstes/instagram_icon.png'
import pintester_icon from '../asstes/pintester_icon.png'
import whatsapp_icon from '../asstes/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>logo</p>
        </div>
        <ul className="footer_link">
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="footer_social_icon">
            <div className="footer_icon_container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer_icon_container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>copyright @ 2023- all right reserved</p>
        </div>
    </div>
  )
}

export default Footer