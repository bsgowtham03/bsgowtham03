import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPython,
} from "react-icons/si";

import { BiCodeAlt } from 'react-icons/bi';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa'; // New icons for Experience and Education

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>
        {/* Experience and Education Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            Experience & Education
          </h2>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Experience Box */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#f3f4f6] rounded-lg shadow-md">
              <FaBuilding size={40} className="text-[#fe5617]" />
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-lg text-gray-700">2+ years</p>
              <p className="text-lg font-semibold text-gray-800">AI & ML Engineer</p>
            </div>

            {/* Education Box */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-[#f3f4f6] rounded-lg shadow-md">
              <FaGraduationCap size={40} className="text-[#fe5617]" />
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-lg text-gray-700">B.Tech Computer Science Engineering</p>
              <p className="text-lg font-semibold text-gray-800">Specialization in AI & ML</p>
            </div>
          </div>
        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I am a skilled Python and Java developer with experience in building efficient and scalable solutions for diverse applications. As a confident and decisive problem solver, I have a knack for finding innovative solutions to complex challenges. Thriving on opportunities to tackle problems, I consistently exceed expectations while delivering high-quality results.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <SiPython size={40} className="text-[#e34c26]" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BiCodeAlt size={40} className="text-black" />
              <span className="font-bold">Java</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNextdotjs size={40} className="text-black" />
              <span className="font-bold">Next.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
