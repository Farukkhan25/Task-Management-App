import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="footer bg-blue-800 p-4 dark:text-gray-100">
        <div className="container mx-auto justify-items-center text-center">
          <div className="footer__wrapper lg:flex-row sm:flex-col items-center">
            <div className="footer__logo">
              <div className="flex justify-center">
                <Link
                  rel="noopener noreferrer"
                  to="/"
                  aria-label="Back to homepage"
                  className=" px-1 lg:mr-1 pb-5"
                >
                  <img src={logo} alt="" style={{ height: "40px" }} />
                </Link>
                <h2 className="text-2xl">Task-Management-Tool</h2>
              </div>
              <p className="description pt-2">Manage Your Daily Tasks</p>
              
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