import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/logo.png";
import { themeContext } from '../../../contexts/Context';

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const year = new Date().getFullYear();
    return (
      <footer
        className="footer bg-blue-800 p-4 dark:text-gray-100"
        style={
          darkMode
            ? { backgroundColor: "#090925" }
            : { backgroundColor: "#0066CC" }
        }
      >
        <div className="container mx-auto justify-items-center text-center">
          <div className="footer__wrapper  flex-col items-center">
            <div className="footer__logo">
              <div className="flex justify-center pt-5">
                <Link
                  rel="noopener noreferrer"
                  to="/"
                  aria-label="Back to homepage"
                  className=" px-1 lg:mr-1 pb-2"
                >
                  <img src={logo} alt="" style={{ height: "40px" }} />
                </Link>
                <h2 className="text-2xl">Task-Management-Tool</h2>
              </div>
              <p className="description py-3 ">Manage Your Daily Tasks</p>
            </div>
          </div>

          <p className="copyright">
            Copyright {year}, Made With ❤️ By Md. Faruk Khan. <br /> All rights
            reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;