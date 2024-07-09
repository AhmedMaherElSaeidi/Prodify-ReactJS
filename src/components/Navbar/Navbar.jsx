import "./Navbar.sass";
import React from "react";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const Navbar = ({
  header,
  firstButtonProps,
  firstButtonAction,
  secondButtonProps,
  secondButtonAction,
}) => {
  return (
    <nav>
      <div className="nav-header">
        <h3 className="m-0">{header}</h3>
      </div>
      <div>
        {firstButtonProps.name && (
          <button
            id={firstButtonProps.id}
            type={firstButtonProps.type}
            className={`button m-1 ${firstButtonProps.class}`}
            onClick={firstButtonAction}
          >
            {firstButtonProps.name}
          </button>
        )}
        {secondButtonProps.name && (
          <button
            id={secondButtonProps.id}
            type={secondButtonProps.type}
            className={`button m-1 button-danger ${secondButtonProps.class}`}
            onClick={secondButtonAction}
          >
            {secondButtonProps.name}
          </button>
        )}
      </div>
      <span>
        <ThemeBtn />
      </span>
    </nav>
  );
};

export default Navbar;
