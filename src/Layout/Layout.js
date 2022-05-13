import { useState, useEffect, createContext } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header/Header";

export const ContactsProvider = createContext();
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const savedContacts = JSON.parse(localStorage.getItem("contacts"))
    ? JSON.parse(localStorage.getItem("contacts"))
    : [];
  const [contacts, setContacts] = useState(savedContacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [setDarkMode, contacts]);

  const changeTheme = () => {
    if (darkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <ContactsProvider.Provider value={{ contacts, setContacts }}>
      <div className=" selection:bg-sky-400 selection:text-slate-100 w-full h-screen bg-white dark:bg-slate-900 transition-all duration-300">
        <div className="container h-full relative">
          <Toaster />
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            changeTheme={changeTheme}
          />
          {children}
        </div>
      </div>
    </ContactsProvider.Provider>
  );
};
export default Layout;
