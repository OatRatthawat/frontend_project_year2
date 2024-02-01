import React, { useState } from "react";
import './LoginandRegister.css';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" OnSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" />
            <label htmlFor="password">password</label>
            <input value = {pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
            <a href="http://localhost:3000/PopupLogin">
                <button type="submit"> Log In </button></a>
        </form>
        <a href="http://localhost:3000/register" > Don't have an account? Register here.</a> 
        </div>
    )
}