// eslint-disable-next-line no-unused-vars
import { motion ,useInView } from 'framer-motion';
import Button from './Components/Button.jsx';
import CV from '../FUADCV.pdf';
import { useRef } from 'react';
function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-row gap-20 items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900  p-8 font-sans"
            style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}
        >
            <div className="flex flex-col items-center">
                <Button text="Download CV" link={CV} />
            </div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-xl bg-gray-800  bg-opacity-80 rounded-xl shadow-lg p-8"
            >
                <h1 className="text-4xl font-extrabold mb-4 text-violet-700 tracking-tight animate-fade-in" style={{ fontFamily: "'Montserrat', 'Inter', 'Segoe UI', Arial, sans-serif" }}>
                    HELLO
                </h1>
                <p className="text-white font-medium text-lg leading-relaxed animate-fade-in delay-300" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}>
                    My name is <span className="font-bold text-violet-500">Fuad Mohammed</span>, and I am a Computer Science Graduate and developer.<br />
                    I have a passion for creating beautiful and functional websites that provide an excellent user experience.<br />
                    I have experience with <span className="font-semibold text-blue-500">HTML</span>, <span className="font-semibold text-yellow-500">CSS</span>, <span className="font-semibold text-yellow-600">JavaScript</span>, and <span className="font-semibold text-cyan-600">React</span>, and I am always eager to learn new technologies and improve my skills.<br />
                    In my free time, I enjoy reading tech blogs, experimenting with new coding techniques, and contributing to open-source projects.<br />
                    If you're interested in working with me or just want to say hello, feel free to reach out!
                </p>
            </motion.div>
        </motion.div>
    );
}

export default About;