import { NavLink } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/", exact: true },
  { name: "Contacts", path: "/contacts" },
];

const Header = ({ darkMode, changeTheme }) => {
  // this state is for open / close navigation in mobile or tablet
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="relative block h-20 z-50">
      <header className="fixed top-0 inset-x-0 w-full h-20 bg-white dark:bg-slate-900 border-b-2 border-slate-100 dark:border-slate-800">
        <nav className="container relative flex items-center h-full">
          {/* Normall navigation => */}

          <button
            className="block sm:hidden text-slate-700 dark:text-slate-400"
            onClick={() => setIsOpenNav(!isOpenNav)}
          >
            {isOpenNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <ul
            className={`sm:flex mx-auto sm:flex-row sm:translate-y-0 text-slate-700 font-semibold -translate-y-[200%] transition-all duration-300 flex-col w-full sm:bg-transparent dark:sm:bg-transparent bg-white dark:bg-slate-900 absolute sm:left-auto left-0 px-10 sm:px-0 ${
              isOpenNav && "translate-y-24"
            }`}
          >
            {navItems.map((item, index) => (
              <li onClick={() => setIsOpenNav(false)} className="mb-4 sm:mb-0" key={item.path}>
                <NavLink
                  className="hover:text-sky-500 dark:hover:text-sky-500 mr-5 text-slate-700 dark:text-slate-300 sm:text-base text-lg"
                  activeClassName="text-sky-500 dark:text-sky-500"
                  to={item.path}
                  title={item.name}
                  exact={item.exact || false}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="absolute right-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mx-4 transition-all duration-500 ${
                !darkMode
                  ? "text-sky-500 rotate-[360deg] scale-110"
                  : "text-slate-600"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>

            <Switch
              checked={darkMode === true}
              onChange={changeTheme}
              className={`group bg-sky-400 focus:outline-none relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only hover:scale-150">Use dark mode</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-hover:scale-150`}
              />
            </Switch>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mx-4 transition-all duration-500 
             ${
               darkMode
                 ? "text-sky-500 rotate-[360deg] scale-110"
                 : "text-slate-600"
             }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
