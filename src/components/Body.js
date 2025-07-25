import { useEffect, useRef, useState } from "react";
import ProfileImg from "../assets/Profile_photo.png";
import ResumePDF from "../assets/Aadarsh_Kumar_Tiwari_Resume.pdf";

function Body() {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const handleImageOnLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      handleImageOnLoad();
    }
  });
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-start justify-center items-center mt-10 backdrop-blur-sm rounded-xl z-20">
      <div className="flex flex-col w-2/3 justify-center lg:items-start items-center  p-12 rounded-xl">
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left text-black dark:text-white font-[poppins] font-extralight">
          Hello, I am
        </p>
        <p className="w-full text-3xl lg:text-5xl  xl:text-6xl text-center lg:text-left text-black dark:text-white font-[poppins] font-semibold">
          Aadarsh Kumar Tiwari
        </p>
        <br />
        <p className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left font-bold text-black dark:text-white font-[poppins] font-extralight italic">
          <div className="mb-3">Software Engineer at KPIT</div>
          <p className="font-[poppins] font-thin">Alumni of IIT(ISM) Dhanbad</p>
        </p>
        <br />
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 lg:text-lg xl:text-xl text-sm font-[poppins] mt-2 border rounded-md p-2 hover:bg-gray-800 hover:text-white">
          Resume
        </a>
      </div>
      <div
        className="flex rounded-full w-1/3 h-1/2 lg:justify-end justify-center 
      items-center p-5">
        <div
          className="flex rounded-full w-full md:w-3/4 items-center justify-center
        lg:w-3/4">
          {loading && <p>Loading...</p>}
          <img ref={ref} src={ProfileImg} alt="aadarshkt" className="w-3/4 h-3/4 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Body;
