import React from 'react'
import item1 from '../images/item1.png'
import item2 from '../images/item2.png'
import item4 from '../images/item4.png'
import Nav from '../components/Nav'
import './Home.css'



function Drink() {
  return (
    <div>
    <Nav/>

    <box className='img2'>
    <a href="http://localhost:3000/Popup">
      <img src={item1} alt="itemproduct1" style={{width: '408px' ,height: '490px', marginTop: '80px',marginBottom: '150px'}} /></a>
    <a href="http://localhost:3000/Popup">
     <img src={item2} alt="itemproduct2" style={{width: '219px' ,height: '260px', marginTop: '80px',marginLeft: '50px',marginBottom: '380px'}} /></a>
    <a href="http://localhost:3000/Popup">
     <img src={item4} alt="itemproduct4" style={{width: '300px' ,height: '262px', marginTop: '80px',marginLeft: '-310px',marginBottom: '50px'}} /></a>
    </box>
    
    </div>
  )
}


export default Drink