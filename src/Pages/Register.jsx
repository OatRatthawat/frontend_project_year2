import React, { useState } from "react";
import './LoginandRegister.css';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" OnSubmit={handleSubmit}>
            <label htmlFor="name"> username </label>
            <input value = {name} onChange={(e) => setName(e.target.value)}type="name" placeholder="username" />
            <label htmlFor="phone"> Phone number </label>
            <input value = {phone} onChange={(e) => setPhone(e.target.value)}type="phone" placeholder="0xx-xxx-xxxx" />
            <label htmlFor="email">email</label>
            <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" />
            <label htmlFor="password">password</label>
            <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
            <a href="http://localhost:3000/PopupRegister"><button type="submit"> Register </button></a>
        </form>
        <a href="http://localhost:3000/login" > Already have an account? Login here.</a>
        </div>
        )
    
    
}