import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "99895e73-b5de-4d50-ab6a-f89056b24f04");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error(data.message)
        }
    };


  return (
    <div className="bg-gray-100 ">
      <h1 className="py-5 pt-8 text-2xl sm:text-4xl font-bold mb-2 text-center text-black">
        Contact
      </h1>

      <div className=" flex flex-wrap items-center justify-center  border border-solid border-l-black rounded-lg p-4 mx-4">
        <div className=" w-xl m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-2xl ">
          <form
            className="max-w-2xl mx-5 md:mx-auto pt-8 text-black"
            onSubmit={onSubmit}
          >
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 text-left">
                Your Name
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2 placeholder:text-black text-sm"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="w-full md:w-1/2 text-left md:pl-4">
                Your Email
                <input
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2 placeholder:text-black text-sm"
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="my-6 text-left">
              Message
              <textarea
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none placeholder:text-black"
                name="message"
                placeholder="Message..."
              ></textarea>
            </div>
            <button
              // type="submit"
              className="cursor-pointer text-gray-900 bg-white border 
              border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
               focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2
                dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
                dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
