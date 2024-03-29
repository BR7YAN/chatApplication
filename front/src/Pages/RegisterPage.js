import React from 'react';
import axios from 'axios';
import makeToast from "../Toaster"

const RegisterPage = () => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const registerUser = (props) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post("http://localhost:8000/register", {
            name,
            email,
            password,
        }).then(response => {
            console.log(response.data);
            makeToast("success", response.data.message);
            if (response.status === 201) {
              window.setTimeout(() => {
                window.location.href = "http://localhost:3000/login";
              }, 3000)
            }
        }).catch(err => {
            makeToast("success", err.response.data.message);
        });
    }

    return (
        <div className="card">
          <div className="cardHeader">Registration</div>
          <div className="cardBody">
            <div className="inputGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                ref={nameRef}
              />
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@example.com"
              ref={emailRef}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              ref={passwordRef}
            />
          </div>
          <button onClick={registerUser}>Register</button>
        </div>
      );
    };
    
export default RegisterPage;