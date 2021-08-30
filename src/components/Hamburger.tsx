import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { IHamburger } from '../interfaces/hamburger'

export const Hamburger: React.FC<IHamburger> = ({ menuState }) => {
   const menu = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if(menuState.clicked || (menuState.clicked && !menuState.initial)){
         if(menu.current){
            menu.current.style.display = 'block'
         }
      } else if(!menuState.clicked){
         if(menu.current){
            menu.current.style.display = 'none'
         }
      }
   }, [menuState])

   return (
      <div ref={menu} className="hamburger-menu">
         <div className="menu-secondary-background-color">

         </div>
         <div className="menu-layer">
            <div className="menu-city-background">

            </div>
            <div className="container">
               <div className="wrapper">
                  <div className="menu-links">
                     <nav>
                        <ul>
                           <li>
                              <Link to="/opportunities">Opportunities</Link>
                           </li>
                           <li>
                              <Link to="/solutions">Solutions</Link>
                           </li>
                           <li>
                              <Link to="/contact">Contact</Link>
                           </li>
                        </ul>
                     </nav>
                     <div className="info">
                        <h3>Our Promise</h3>
                        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                     </div>
                     <div className="locations">
                        Locations: 
                        <span>Dallas</span>
                        <span>Austin</span>
                        <span>New York</span>
                        <span>San Francisco</span>
                        <span>Beijing</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}