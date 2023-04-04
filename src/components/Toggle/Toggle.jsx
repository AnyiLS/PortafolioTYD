import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state.darkMode;
  
  const handleClick = () => {
    // debugger
    theme?.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick} style={{border: darkMode ? "3px solid #FCA61F" : "3px solid #3458a3", }}>
      <Moon color={darkMode ? "#FCA61F" : "#3458a3"} />
      <Sun color={darkMode ? " #FCA61F" : "#3458a3"} />
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px", background: "#FCA61F" } : { right: "2px", background: "#3458a3" }}
      ></div>
    </div>
  );
};

export default Toggle;
