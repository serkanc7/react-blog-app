import React from 'react';
import './Footer.scss';
import facebookSvg from '@/assets/svg/facebook.svg'
import instagramSvg from '@/assets/svg/instagram.svg'
import twitterSvg from '@/assets/svg/twitter.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social">
                    <a href="/" className="footer__media">
                        <img src={facebookSvg} alt="facebook" />
                    </a>
                    <a href="/" className="footer__media">
                        <img src={instagramSvg} alt="instagram" />
                    </a>
                    <a href="/" className="footer__media">
                        <img src={twitterSvg} alt="twitter" />
                    </a>
                </div>
                <nav className="footer__nav">
                    <a href="/" className="footer__link">Info</a>
                    <a href="/" className="footer__link">Support</a>
                    <a href="/" className="footer__link">Marketing</a>
                </nav>
                <nav className="footer__nav">
                    <a href="/" className="footer__link">Terms of Use</a>
                    <a href="/" className="footer__link">Privacy Policy</a>
                </nav>
                <small className="footer__copyright">&copy; Copyright 2021, Serkan Çelik</small>
            </div>
        </footer>
    )
}

export default Footer
