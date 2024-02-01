import React from 'react'
import './Popup.css'
function Popup() {
  return (
    <div className="container-popup">
        <div className="popup-form">
        <label > กรุณาระบุจำนวนเครื่องเดิม </label> <br/><br/>
        <div className="Input"> 
        <input type={'number'}></input> <br/>
        </div>
        <a href="http://localhost:3000/home" > 
        <button>Confirm Order</button>
        </a>
        </div>
    </div>
  )
}

export default Popup