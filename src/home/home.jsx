import React from 'react'
import Slide from '../slide/slide'
import Scroll from '../scroll/scroll'
import Cards from '../cards/cardpage'
import Founder from '../founder/founder'
import Club from '../student club/club'
import Contact from '../forms/contact'
import Forms from '../forms/forms'
// import Footer from '../footer/footer'
import './home.css'
export default function home() {
  return (
    <>
      <div className='home'>
        <Slide></Slide>
        <Scroll></Scroll>
        <Cards></Cards>
        <Founder></Founder>
        <Club></Club>
        <Contact></Contact>
        <Forms></Forms>
        {/* <Footer></Footer> */}
      </div>
    </>
  )
}
