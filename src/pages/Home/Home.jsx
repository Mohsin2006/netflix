import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCarts from '../../components/TitleCarts/TitleCarts'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-image' alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Descovering his ties to the ancient order, a young 
            man living in modern Istanbul embarks on a quest to
            save the city from the immortal enemy
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            
          </div>
          <TitleCarts/>

        </div>
      </div>
      <div className="more-cards">
        <TitleCarts title={"Blockbuster Movies"}/>
        <TitleCarts title={"Only on Netflix "}/>
        <TitleCarts title={"Upcoming"}/>
        <TitleCarts title={"Top Pics for you"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
