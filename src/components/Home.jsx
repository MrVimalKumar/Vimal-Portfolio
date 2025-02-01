import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import vimal from "../assets/Vimal_Kumar_R.png";
import resume from "../assets/Vimal_Kumar_R.pdf"


const Home = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="  p-4">
        <ul className="flex items-center justify-center">
          <li className="px-10">
            <a href="https://github.com/MrVimalKumar">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="px-10">
            <a href="https://www.linkedin.com/in/vimal-kumar-r">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="px-10">
            <a href="">
              <SiHackerrank size={30} />
            </a>
          </li>
        </ul>
      </div >
      <div className="flex place-items-end justify-between bg-gray-100 border border-solid border-l-black rounded-lg p-4 mx-4 pt-8">
        <div className="ml-12">
          <h1 className="text-4xl  ">
            I am <span className="text-red-400">VimalKumar R</span> <br />
            <br />
            A passionate Frontend Developer dedicated to crafting user-friendly
            and visually appealing web applications.
            <br /> I thrive on bringing ideas to life through clean code and
            creative designs.
          </h1>
          <br />
          <div className="flex items-center justify-center m-4">
            <a href={resume}>
            <button
              type="button"
              className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Resume
            </button>
            </a>
            
          </div>
        </div>

        <img
          src={vimal}
          className="w-[500px] h-[495px] p-4  mr-10 "
        />
      </div>
    </div>
  );
};

export default Home;
