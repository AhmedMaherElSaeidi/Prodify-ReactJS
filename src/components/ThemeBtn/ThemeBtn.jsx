import "./ThemeBtn.sass";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../../Layout/Layout";

const ThemeBtn = () => {
  const { theme, themeToggler } = useGlobalContext();

  return (
    <div className="theme-btn" onClick={themeToggler}>
      {theme === "dark" ? (
        <i className="fa-sun">
          <FaSun />
        </i>
      ) : (
        <i className="fa-moon">
          <FaMoon />
        </i>
      )}
    </div>
  );
};

export default ThemeBtn;
