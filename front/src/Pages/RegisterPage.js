import React from 'react';
import axios from 'axios';
import makeToast from "../Toaster"

const RegisterPage = () => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    axios.post("http://localhost:8000/user/register", {
        name,
        email,
        password,
    }).then(response => {
        console.log(response.data);
        makeToast("success", response.data.message);
    }).catch(err => {
        makeToast("success", err.response.data.message);
    });

    return (
        <div className="card">
            <div className="cardHeader">Registration</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label html="name">Name</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        ref={nameRef}/>
                    <label html="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@example.com"
                        ref={emailRef} />
                    <label html="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        ref={passwordRef} />
                </div>
                <button onClick={registerUser}>Register</button>
            </div>
        </div>
    );
}

export default RegisterPage;