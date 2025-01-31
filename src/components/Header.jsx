import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200">
      <div className="">
        <img className="w-[150px]  rounded-lg ml-8
        " src={logo} alt="logo" />
      </div>
      <ul className="flex items-center p-4 m-4 ">
        <li className="p-4 cursor-pointer font-medium">Home</li>
        <li className="p-4 cursor-pointer font-medium">About us</li>
        <li className="p-4 cursor-pointer font-medium">Projects</li>
        <li className="p-4 cursor-pointer font-medium">Contact</li>
      </ul>
    </div>
  );
};

export default Header;