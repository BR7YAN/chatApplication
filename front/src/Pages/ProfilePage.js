import React from 'react';
import axios from 'axios';
import "../Styles/profile.css"

const ProfilePage = () => {
    return (
    <div className="card_profile">
    <img className="circular_image" src="https://media-assets.wired.it/photos/615daa8d10023c62ea4761a0/master/pass/765b31b47db31884ab90e2caeba74673.jpg" alt="John" />
    <h1>John Doe</h1>
    <p className="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <a href="#"><i className="fa fa-dribbble"></i></a>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-linkedin"></i></a>
    <a href="#"><i className="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
    </div>
    );
};

export default ProfilePage;