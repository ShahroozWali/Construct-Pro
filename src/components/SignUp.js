import React from 'react'
import './login.css'

function SignUp() {

    return (
        <div className="loginForm">
            <div className="login-page">
                <div className="form">
                    <form className="register-form-2">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="/login">Log In</a></p>
                    </form>
                </div>
                </div>
        </div>
    )
}

export default SignUp

