import React, { useState, useEffect } from 'react';
import Image from './assets/Fuad.jpg';
import TextPressure from './Components/TextPressur';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub , faLinkedin ,faTelegram } from '@fortawesome/free-brands-svg-icons';
import Button from './Components/Realbutton';

function Hero() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => setShow(true), 200);
    }, []);

    return (
        <div className="relative flex flex-row gap-14 items-center justify-center min-h-screen bg-gradient-to-br from-white via-violet-50 to-violet-100 dark:from-gray-900 dark:via-violet-900 dark:to-gray-800 p-8 overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute left-10 top-10 w-32 h-32 bg-violet-200 rounded-full opacity-30 blur-2xl animate-pulse" />
            <div className="absolute right-10 bottom-10 w-24 h-24 bg-violet-400 rounded-full opacity-20 blur-2xl animate-pulse" />

            {/* Info Section */}
            <div className={`flex flex-col items-center justify-center z-10 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
                <TextPressure text="Hi, I’m Fuad Mohammed " textColor={isDarkMode ? 'text-violet-400' : 'text-violet-700'} />
                <p className="text-center text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium animate-fade-in">
                    A passionate developer with a knack for creating elegant solutions to complex problems.
                </p>
                {/* Social icons */}
                <div className="flex gap-4 mb-10">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faGithub} size="2x" className="text-violet-600 dark:text-violet-300" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                       <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-violet-600 dark:text-violet-300" /> 
                    </a>
                    <a href='mailto:fuadmohammed368@gmail.com' target='_blank' className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-violet-600 dark:text-violet-300" />
                    </a>
                    <a href='https://t.me/devTalkStaff' target='_blank' className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faTelegram} size="2x" className="text-violet-600 dark:text-violet-300" />
                    </a>
                </div>
                {/* Call to action button */}
                <Button text="Contact Me" link="/contact" />
            </div>

            {/* Profile Image with effect */}
            <div className="z-10">
                <img
                    src={Image}
                    alt="Fuad Mohammed"
                    className="w-62 h-62 rounded-full border-4 border-violet-300 shadow-2xl object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
        </div>
    );
}

export default Hero;