export const Project = (props) => {
  const { name, description, image, github, drive, live } =
    props?.projectdta?.data;
  return (
    <div className="flex flex-col items-center justify-center hover:bg-gray-200 w-xl m-4 p-4 bg-gray-100  rounded-lg shadow-2xl ">
      <img
        className="w-[400px] h-[250px] p-2 rounded-2xl "
        src={image}
        alt=""
      />
      <h1 className="text-center mt-2">{name}</h1>
      <h2 className="text-justify m-2">{description}</h2>
      <ul className="flex flex-wrap  ">
        <li>
          <a href={github}>
          <button type="button" className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2 shadow-lg">
              Github Code
            </button>
          </a>
        </li>
        <li>
          <a href={drive}>
          <button type="button" className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2 shadpw-lg">
              View Demo video
            </button>
          </a>
        </li>
        <li>
          <a href={live}>
          <button type="button" className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2 shadow-lg">
              Live
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};
