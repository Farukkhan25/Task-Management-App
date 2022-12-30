import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeContext } from '../../contexts/Context';
import "./Toggle.css";

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const changeMode = () => {
      console.log("Theme Changed");
      theme.dispatch({ type: "toggle" });
    };
    return (
      <div className="toggle" onClick={changeMode}>
        <MdLightMode style={{ color: "orange", fontSize: "1rem" }} />
        <MdDarkMode
          style={{
            color: "orange",
            fontSize: "1rem",
            marginLeft: "2px",
          }}
        />
        <div className="t-btn" style={darkMode ? { right: 1 } : { left: 1 }} />
      </div>
    );
};

export default Toggle;