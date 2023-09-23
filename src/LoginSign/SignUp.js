import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>

            <div class="icons chat"><i class="bi bi-chat-dots"></i></div>
            <div class="icons hobbies"><i class="bi bi-telephone"></i></div>
            <div class="icons art"><i class="bi bi-palette"></i></div>
            <div class="icons about"><i class="bi bi-person"></i></div>

            <div class="icon-container icon1"><i class="bi bi-heart-fill"></i></div>
            <div class="icon-container icon2"><i class="bi bi-keyboard"></i></div>
            <div class="icon-container icon3"><i class="bi bi-laptop"></i></div>
            <div class="icon-container icon4"><i class="bi bi-phone"></i></div>
            <div class="icon-container icon5"><i class="bi bi-phone"></i></div>

            <div class="icon-container icon6"><i class="bi bi-camera"></i></div>
            <div class="icon-container icon7"><i class="bi bi-music-note"></i></div>
            <div class="icon-container icon8"><i class="bi bi-globe"></i></div>
            <div class="icon-container icon9"><i class="bi bi-sun"></i></div>
            <div class="icon-container icon10"><i class="bi bi-emoji-smile"></i></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                <h1 style={{ textAlign: 'center' }}>ChatLou</h1>
                <div className="form-container">
                    <p className="title">Sign Up</p>
                    <form className="form">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Username">Username</label>
                            <input type="text" name="email" id="user" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input type="number" name="email" id="pn" placeholder="" />
                        </div> <div className="input-group">
                            <label htmlFor="avatar">Avatar</label>
                            <input type="file" name="avatar" id="avatar" accept="image/*" />
                        </div><br />
                        <button type="button" className="sign">Sign Up</button>
                    </form>
                    <p className="signup">Already have an account? <Link to="/" className="" style={{ cursor: 'pointer' }}>Log in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
