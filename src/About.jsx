import Image from './assets/Fuad.jpg';
import Button from './Components/Button.jsx';
import { useEffect, useState } from 'react';

function About() {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        setTimeout(() => setShowText(true), 300);
    }, []);

    return (
        <div className="flex flex-row gap-20 items-center justify-center min-h-screen bg-gradient-to-br from-white via-violet-50 to-violet-100 p-8">
            <div className="flex flex-col items-center">
                <Button text="Download CV" />
            </div>
            <div className={`max-w-xl transition-all duration-700 ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h1 className="text-4xl font-extrabold mb-4 text-violet-700 tracking-tight animate-fade-in">HELLO</h1>
                <p className="text-gray-700 text-lg leading-relaxed animate-fade-in delay-200">
                    My name is <span className="font-bold text-violet-500">Fuad Mohammed</span>, and I am a Computer Science Graduate and developer.<br />
                    I have a passion for creating beautiful and functional websites that provide an excellent user experience.<br />
                    I have experience with <span className="font-semibold text-blue-500">HTML</span>, <span className="font-semibold text-yellow-500">CSS</span>, <span className="font-semibold text-yellow-600">JavaScript</span>, and <span className="font-semibold text-cyan-600">React</span>, and I am always eager to learn new technologies and improve my skills.<br />
                    In my free time, I enjoy reading tech blogs, experimenting with new coding techniques, and contributing to open-source projects.<br />
                    If you're interested in working with me or just want to say hello, feel free to reach out!
                </p>
            </div>
        </div>
    );
}

export default About;