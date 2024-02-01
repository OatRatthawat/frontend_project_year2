import React from 'react'
import Nav from '../components/Nav'
import banner from '../images/banner2.jpg'
import itemlo from '../images/item.png'
import './Home.css'

function Home() {
  return  (
    <div>
      <Nav/>
    <box className='img2'>
        <img src={banner} alt="banner" style={{width: '1000px' , marginTop: '60px'}} />
        <img src={itemlo} alt="itemlo" style={{width: '1000px' , marginTop: '30px', marginBottom: '50px'}} />
    </box>

    </div>

  )
}

export default Home;