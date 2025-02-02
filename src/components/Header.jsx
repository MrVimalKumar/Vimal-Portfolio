import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(show){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
    return ()=>{
      document.body.style.overflow = "auto"
    }
  },[show])

  return (
    <div>
      {/* medium and large screen */}
      <div className="hidden md:flex items-center justify-between bg-gray-200 fixed w-full mb-60 z-50">
        <div className="">
          <img className="w-26 rounded-lg mx-8" src={logo} alt="logo" />
        </div>
        <ul className="flex items-center gap-7 mx-5">
          <li className="cursor-pointer font-medium">Home</li>
          <li className="cursor-pointer font-medium">About us</li>
          <li className="cursor-pointer font-medium">Projects</li>
          <li className="cursor-pointer font-medium">Contact</li>
        </ul>
      </div>

      {/* mobile or small screen */}

      <div className="">
        <div
          className={`md:hidden
          ${show ? "" : "flex justify-between"} bg-gray-200 fixed w-full 
          mb-60 overflow-hidden z-50`}
        >
          <div className="">
            <img className="w-26 rounded-lg mx-5" src={logo} alt="logo" />
          </div>
          <div className="">
            <IoMenu
              className="text-4xl absolute top-8 hover:scale-110 transition-all
          right-5 cursor-pointer"
              onClick={() => setShow(!show)}
            />

            {show && (
              <div className="flex flex-col gap-7 min-h-screen items-center justify-center">
                <p className="cursor-pointer font-medium">Home</p>
                <p className="cursor-pointer font-medium">About us</p>
                <p className="cursor-pointer font-medium">Projects</p>
                <p className="cursor-pointer font-medium">Contact</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
