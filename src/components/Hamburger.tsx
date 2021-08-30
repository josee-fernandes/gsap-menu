import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { IHamburger } from '../interfaces/hamburger'

import gsap from 'gsap'

import dallas from '../images/dallas.webp'
import austin from '../images/austin.webp'
import newyork from '../images/newyork.webp'
import sanfrancisco from '../images/sanfrancisco.webp'
import beijing from '../images/beijing.webp'

const cities = [
   { name: 'Dallas', image: dallas },
   { name: 'Austin', image: austin },
   { name: 'New York', image: newyork },
   { name: 'San Francisco', image: sanfrancisco },
   { name: 'Beijing', image: beijing },
]

export const Hamburger: React.FC<IHamburger> = ({ menuState }) => {
   const menu = useRef<HTMLDivElement>(null)
   const revealMenu = useRef<HTMLDivElement>(null)
   const revealMenuBackground = useRef<HTMLDivElement>(null)
   const cityBackground = useRef<HTMLDivElement>(null)
   const line1 = useRef<HTMLAnchorElement>(null)
   const line2 = useRef<HTMLAnchorElement>(null)
   const line3 = useRef<HTMLAnchorElement>(null)
   const info = useRef<HTMLDivElement>(null)


   const staggerHide = (node1: any, node2: any) => {
      gsap.to([node1, node2], {
         duration: .8,
         height: 0,
         ease: 'power3.inOut',
         stagger: {
            amount: .07
         }
      })
   }

   const staggerReveal = (node1: any, node2: any) => {
      gsap.from([node1, node2], {
         duration: .8,
         height: 0,
         transformOrigin: 'right top',
         skewY: 2,
         ease: 'power3.inOut',
         stagger: {
            amount: .1
         }
      })
   }

   const staggerText = (node1: any, node2: any, node3: any) => {
      gsap.from([node1, node2, node3], {
         duration: .8,
         y: 100,
         delay: .1,
         ease: 'power3.inOut',
         stagger: {
            amount: .3
         }
      })
   }

   const fadeInUp = (node: any) => {
      gsap.from(node, {
         y: 60,
         duration: 1,
         delay: .2,
         opacity: 0,
         ease: 'power3.inOut'
      })
   }

   const handleCity = (image: string) => {
      gsap.to(cityBackground.current, {
         duration: 0,
         background: `url(${image}) center center / cover`
      })
      gsap.to(cityBackground.current, {
         duration: .4,
         opacity: 1,
         ease: 'power3.inOut'
      })
      gsap.from(cityBackground.current, {
         duration: .4,
         skewY: 2,
         transformOrigin: 'right top'
      })
   }

   const handleCityReturn = () => {
      gsap.to(cityBackground.current, {
         duration: .4,
         opacity: 0
      })
   } 

   const handleTextHover = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      gsap.to(event.target, {
         duration: .3,
         y: 3,
         skewX: 4,
         ease: 'power3.inOut'
      })
   }

   const handleTextHoverExit = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      gsap.to(event.target, {
         duration: .3,
         y: -3,
         skewX: 0,
         ease: 'power3.inOut'
      })
   }

   useEffect(() => {
      if(menuState.clicked || (menuState.clicked && !menuState.initial)){
         if(menu.current){
            gsap.to(menu.current, {
               duration: 0,
               css: {
                  display: 'block'
               }
            })

            gsap.to([revealMenu.current, revealMenuBackground.current], {
               duration: 0,
               opacity: 1,
               height: '100%'
            })

            staggerReveal(revealMenuBackground.current, revealMenu.current)
            fadeInUp(info.current)
            staggerText(line1.current, line2.current, line3.current)
         }
      } else if(!menuState.clicked){
         if(menu.current){
            gsap.to(menu.current, {
               duration: 1,
               css: {
                  display: 'none'
               }
            })

            staggerHide(revealMenu.current, revealMenuBackground.current)
         }
      }
   }, [menuState])

   return (
      <div ref={menu} className="hamburger-menu">
         <div ref={revealMenuBackground} className="menu-secondary-background-color">

         </div>
         <div ref={revealMenu} className="menu-layer">
            <div ref={cityBackground} className="menu-city-background">

            </div>
            <div className="container">
               <div className="wrapper">
                  <div className="menu-links">
                     <nav>
                        <ul>
                           <li>
                              <Link
                                 onMouseEnter={event => handleTextHover(event)}
                                 onMouseLeave={event => handleTextHoverExit(event)}
                                 ref={line1} to="/opportunities"
                              >
                                 Opportunities
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onMouseEnter={event => handleTextHover(event)}
                                 onMouseLeave={event => handleTextHoverExit(event)}
                                 ref={line2} to="/solutions"
                              >
                                 Solutions
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onMouseEnter={event => handleTextHover(event)}
                                 onMouseLeave={event => handleTextHoverExit(event)}
                                 ref={line3} to="/contact"
                              >
                                    Contact
                              </Link>
                           </li>
                        </ul>
                     </nav>
                     <div ref={info} className="info">
                        <h3>Our Promise</h3>
                        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
                     </div>
                     <div className="locations">
                        Locations: 
                        {cities.map(city => (
                           <span
                              key={city.name}
                              onMouseEnter={() => handleCity(city.image)}
                              onMouseOut={handleCityReturn}
                           >
                              {city.name}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}