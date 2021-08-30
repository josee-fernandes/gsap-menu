import React from 'react'
import { Link } from 'react-router-dom'

import { Hamburger } from './Hamburger'

export const Header: React.FC = () => {
   return (
      <header>
         <div className="container">
            <div className="wrapper">
               <div className="inner-header">
                  <div className="logo">
                     <Link to="/">HAMBRG.</Link>
                  </div>
                  <div className="menu">
                     <button>Menu</button>
                  </div>
               </div>
            </div>
         </div>
         <Hamburger />
      </header>
   )
}