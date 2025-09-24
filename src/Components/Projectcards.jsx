import GitButton from "./GitButton";

function ProjectCard({ props}) {

    const getLanguageColor = (lang) => {
        switch(lang) {
            case "React": return "bg-blue-500 text-white";
            case "Node.js": return "bg-green-500 text-white";
            case "Python": return "bg-yellow-500 text-white";
            case "Java": return "bg-red-500 text-white";
            case "JavaFX": return "bg-purple-500 text-white";
            case "Flask": return "bg-orange-500 text-white";
            case "OpenCV": return "bg-pink-500 text-white";
            case "OpenWeatherMap API": return "bg-teal-500 text-white";
            case "OpenAI API": return "bg-cyan-500 text-white";
            case "Nmap": return "bg-indigo-500 text-white";
            case "argparse": return "bg-gray-500 text-white";
            case "OS": return "bg-black text-white";
            case "Express": return "bg-gray-700 text-white";
            case "MongoDB": return "bg-green-700 text-white";
            default: return "bg-gray-300 text-black";
        }
    }


  return (
    
    <div className="bg-black dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4 hover:scale-105 transform transition-all duration-300">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-400 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-2 text-gray-400 dark:text-gray-400">
          {props.description}
        </p>
        {/* used languages */}
        <div className="mt-4">
            {props.usedLanguages.map((lang, index) => (
                <span key={index} className={`inline-block text-xs px-2 py-1 rounded-full mr-2 ${getLanguageColor(lang)}`}>
                    {lang}
                </span>
            ))}
        </div>
      </div>

       <GitButton text="View Project" link={props.link} />

    </div>
  );
}


export default ProjectCard;