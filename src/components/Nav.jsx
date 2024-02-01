import React from 'react'
import logo from '../images/logo2.png'
import './Nav.css'


function Nav() {
  return (
    <div>
    <div className='img'>
        <img src={logo} alt="logo"/>
    </div>

    <a href="http://localhost:3000/home"><button> HOME </button></a>
    <a href="http://localhost:3000/drink"><button> DRINK </button></a>
    <a href="http://localhost:3000/login"><button> LOGIN </button></a>
    <a href="http://localhost:3000/register"><button> REGISTER </button></a>

    </div>
  )
}

export default Nav