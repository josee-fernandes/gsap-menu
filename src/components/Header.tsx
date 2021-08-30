import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Hamburger } from './Hamburger'

interface IMenu{
   initial: boolean
   clicked: boolean
   name: string
   
}

export const Header: React.FC = () => {
   const [menu, setMenu] = useState<IMenu>({
      initial: true,
      clicked: false,
      name: 'Menu'
   })

   const [disabled, setDisabled] = useState(false)

   const handleMenu = () => {
      disableMenu()

      if(menu.initial){
         setMenu({
            initial: false,
            clicked: true,
            name: 'Close'
         })
      } else if(menu.clicked){
         setMenu({ ...menu, clicked: false, name: 'Menu' })
      } else if(!menu.clicked){
         setMenu({ ...menu, clicked: true, name: 'Close' })
      }
   }

   const disableMenu = () => {
      setDisabled(true)

      setTimeout(() => {
         setDisabled(false)
      }, 1200)
   }

   return (
      <header>
         <div className="container">
            <div className="wrapper">
               <div className="inner-header">
                  <div className="logo">
                     <Link to="/">HAMBRG.</Link>
                  </div>
                  <div className="menu">
                     <button disabled={disabled} onClick={handleMenu}>{menu.name}</button>
                  </div>
               </div>
            </div>
         </div>
         <Hamburger />
      </header>
   )
}