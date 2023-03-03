import React from 'react';

const RegisterPage = () => {
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
                        placeholder="John Doe" />
                    <label html="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@example.com" />
                    <label html="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password" />
                </div>
                <button>Register</button>
            </div>
        </div>
    );
}

export default RegisterPage;