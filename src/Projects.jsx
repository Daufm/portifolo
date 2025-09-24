
import ProjectCard  from "./Components/Projectcards";
import Task from "./assets/Task.png";
import Nmap from "./assets/nmap.png";
import Weather from "./assets/Wether.png";
import Blog from "./assets/blog.png";
import Folder from "./assets/Folder.png";


function Projects(){

  const languages = {
        "TaskFlow": ["React", "Node.js", "Express", "MongoDB"],
        "Ai Powered Nmap": ["Python", "Nmap", "OpenAI API"],
        "Weather App": ["Java","JavaFX","OpenWeatherMap API"],
        "Blog Platform": ["React", "Node.js", "Express", "MongoDB"],
        "Folder Organizer": ["Python", "argparse", "OS"],
    };




const Projects =[
    {
        title: "TaskFlow",
        description: "A productivity app to manage tasks efficiently.",
        usedLanguages: languages["TaskFlow"],
        image: Task,
        link: "https://github.com/Daufm/Task-Flow"
    },
    {
        title: "Ai Powered Nmap",
        description: "Ai powered network mapping tool.",
        usedLanguages: languages["Ai Powered Nmap"],
        image: Nmap,
        link: "https://github.com/Daufm/AI-powered_Network_Scanner"
    },
    {
        title: "Weather App",
        description: "A weather forecasting app.",
        usedLanguages: languages["Weather App"],
        image: Weather,
        link: "https://github.com/Daufm/Wether-Featching-JavaFx"
    },
    {
        title: "Blog Platform",
        description: "A blogging platform to share your thoughts.",
        usedLanguages: languages["Blog Platform"],
        image: Blog,
        link: "https://github.com/Daufm/Blogging-Platform"
    },
    {
        title: "Folder Organizer",
        description: "An app to organize your files and folders.",
        usedLanguages: languages["Folder Organizer"],
        image: Folder,
        link: "https://github.com/Daufm/file_organizer_cli"
    }

]




    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-900 dark:to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-300 mb-12">My Projects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                {/* Project cards go here */}
                {Projects.map((project, index) => (
                    <ProjectCard key={index} props={project} />
                ))}
            </div>
        </div>
    )

}


export default Projects;