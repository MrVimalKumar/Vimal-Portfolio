const Footer = () => {
  return (
    <div className="pb-8 bg-gray-100">
      <h1 className="py-5  text-4xl font-extrabold text text-center">Footer</h1>
      <div className="border border-solid border-l-black rounded-lg p-4 mx-4 py-4 ">
        <div className="flex items-center justify-between flex-col md:flex-row mx-8">
          <div>
            <h1>Contact Details </h1>
            <h1>Address : Coimbatore, Tamilnadu, 641107</h1>
            <h1>Email ID : vimal21082003@gmail.com</h1>
            <h1>Phone no : +91 9360232422</h1>
          </div>
          <div>© Vimal Kumar R 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
