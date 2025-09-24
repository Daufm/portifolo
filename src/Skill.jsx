import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase , FaMobileAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SkillCard = ({ skill, icon: Icon, level }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-6 bg-gray-800 bg-opacity-50 rounded-xl backdrop-filter backdrop-blur-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="text-4xl text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{skill}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0  bg-opacity-75 rounded-xl p-4 flex items-center justify-center"
        >
          <p className="text-white text-center">
            {level}% proficiency in {skill}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    { name: "React", icon: FaReact, level: 85 },
    { name: "Node.js", icon: FaNodeJs, level: 85 },
    { name: "Python", icon: FaPython, level: 75 },
    { name: "Databases", icon: FaDatabase, level: 75 },
    { name: "JavaScript", icon: SiJavascript, level: 88 },
    
  ]);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     const newSkills = Array.from(skills);
//     const [reorderedSkill] = newSkills.splice(result.source.index, 1);
//     newSkills.splice(result.destination.index, 0, reorderedSkill);
//     setSkills(newSkills);
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-12"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;