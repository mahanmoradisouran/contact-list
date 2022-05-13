import { Link } from "react-router-dom";
import img from "../img/img.png";

const HomePage = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col ">
      <img src={img} alt="contact-pic" className="sm:w-80 sm:h-80 w-60 h-60" />
      <h2 className="text-3xl text-slate-700 dark:text-slate-200 font-bold">
        Do you forget your contacts?
      </h2>
      <p className="text-slate-600 my-2 dark:text-slate-300 max-w-md">
        You can now save your contacts to contacts-app-ka_boom993 without any
        problems! Your information will be completely confidential and no one
        will have access to it
      </p>
      <Link
        to="/contacts"
        className="group flex items-center justify-evenly relative overflow-hidden p-2 my-2 w-36 dark:bg-sky-600 bg-sky-400 text-white rounded-md after:w-full after:absolute after:h-full after:bg-white after:opacity-30 after:rounded-full after:translate-x-full after:transition-transform hover:after:translate-x-0 hover:after:rounded-md after:ease-in after:duration-[250ms]"
      >
        Get started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-[360deg]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default HomePage;
