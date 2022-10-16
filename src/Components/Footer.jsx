import React from 'react';
import {TiSocialInstagramCircular} from 'react-icons/ti';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {TiSocialLinkedinCircular} from 'react-icons/ti';

function Footer() {
    const icon = {
        display: 'flex',
        fontSize: '35px',
        marginTop: '10px',
        color: 'white'
    }
    return (
    <>
        <div className="footer">
            <div className="footer-logo">
                <h2>WatchFlix</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quidem a neque in maiores. Officiis placeat quaerat deleniti labore explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, vitae. In veniam quibusdam quas, exercitationem ipsam beatae inventore veritatis fuga?</p>
            </div>     

            <div className="footerLinks">
                <nav className="navLink">
                    <h3>Quick Links</h3>
                    <ul>
                        <a href="/">Movies</a>
                        <a href="/">Series</a>
                        <a href="/">Featured movies</a>
                        <a href="/">New movies</a>
                        <a href="/">Way to watch </a>
                        <a href="/">My List</a>
                    </ul>
                </nav>
                
                <nav className="navLink">
                    <h3>Legal Stuff</h3>
                    <ul>
                        <a href="/">Declaimer</a>
                        <a href="/">Financing</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                    </ul>
                </nav>
                    
                <nav className="navLink">
                    <h3>Navigations</h3>
                    <ul>
                        <a href="/">About us</a>
                        <a href="/">Blog</a>
                        <a href="/">Contact</a>
                        <a href="/">FAQs</a>
                    </ul>
                </nav>
                <div className="form">
                    <p>Signup to get the best and new movie update.</p>
                    <input type="text"  placeholder='Enter your email' />
                    <div className="btn">
                        <button>Sign up</button>
                    </div>

                    <div style={icon}>
                        <TiSocialInstagramCircular />
                        <TiSocialFacebookCircular />
                        <TiSocialTwitterCircular />
                        <TiSocialLinkedinCircular />
                    </div>
                </div>
            </div>
                
            
        </div>
    </>
  )
}

export default Footer;