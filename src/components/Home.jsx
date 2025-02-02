import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import vimal from "../assets/Vimal_Kumar_R.png";
import resume from "../assets/Vimal_Kumar_R.pdf";

const Home = () => {
  return (
    <div className=" bg-gray-100 pt-32 overflow-hidden min-h-screen">
      <div className="  p-4">
        <ul className="flex items-center gap-18 justify-center">
          <li className="">
            <a href="https://github.com/MrVimalKumar">
              <FaGithub className="hover:scale-110 transition-all text-3xl md:text-4xl" />
            </a>
          </li>
          <li className="">
            <a href="https://www.linkedin.com/in/vimal-kumar-r">
              <FaLinkedin className="hover:scale-110 transition-all rounded-md text-3xl md:text-4xl" />
            </a>
          </li>
          <li className="">
            <a href="">
              <SiHackerrank className="hover:scale-110 transition-all rounded-md text-3xl md:text-4xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between relative bg-gray-100 border border-solid border-l-black rounded-lg h-[590px] md:h-[450px] p-4 mx-4 pt-8">
        <div className="z-20 mt-[245px] md:mt-[180px]">
          <pre className="text-[26px] md:text-4xl font-semibold" id="name">
            I am <span className="text-red-400">VimalKumar R</span>
          </pre>
          <br />
          <p className="text-[15px] md:text-[19px]">
            A passionate Frontend Developer dedicated to crafting user-friendly
            and visually appealing web applications.
            <br /> I thrive on bringing ideas to life through clean code and
            creative designs.
          </p>
          <br />
          <div className="flex items-center justify-center m-4">
            <a href={resume}>
              <button
                type="button"
                className="cursor-pointer text-gray-900
                 bg-white border border-gray-300 focus:outline-none
                  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
                  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2
                   dark:bg-gray-800 dark:text-white dark:border-gray-600
                    dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Resume
              </button>
            </a>
          </div>
        </div>

        <img
          src={vimal}
          className="max-w-[280px] min-h-[430px] md:min-w-[450px] md:min-h-[445px] 
        absolute -top-1 right-1 md:right-5 z-0"
        />
      </div>
    </div>
  );
};

export default Home;
