import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import {userContext} from '../App';
import makeToast from '../Toaster';

const LoginPage = () => {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const value = React.useContext(userContext);
    var navigate = useNavigate();

    console.log("nome temporaneo == ", value.name);
    value.name = 'ok';
    console.log("nome temporaneo == ", value.name);

    const loginUser = (props) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post("http://localhost:8000/login", {
            email,
            password,
        }).then( response => {
            console.log(response.data);
            makeToast("success", response.data.message);
            if (response.status === 200) {
                window.setTimeout(() => {
                    //window.location.href = "http://localhost:3000/profile";
                    navigate('/profile');
                }, 3000)
            }
        }).catch(err => {
            makeToast("success", err.response.data.message)
        })
    }

    return (
        <div className="card">
            <div className="cardHeader">Login</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="insert your email"
                        ref={emailRef}
                    />
                    <label html="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="insert your Password"
                        ref={passwordRef}
                        />
                </div>
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;