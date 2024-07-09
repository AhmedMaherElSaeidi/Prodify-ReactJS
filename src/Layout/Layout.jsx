import "./Layout.sass";
import { Outlet } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import Footer from "../components/Footer/Footer";

// Create the context
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const Layout = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const themeToggler = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <GlobalContext.Provider value={{ theme, themeToggler }}>
      <div id={theme} className="layout">
        <div className="layout-outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};

export default Layout;
