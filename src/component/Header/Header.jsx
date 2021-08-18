import React from 'react'
import './Header.css'

export default function Header () {
    return(
        <nav >
    <div className="nav-wrapper green flex">
      <a href="#" className="brand-logo">ReactMovie</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#" >Movie</a></li>
        <li><a href="#">Multfilms</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
  </nav>
        
    )
}