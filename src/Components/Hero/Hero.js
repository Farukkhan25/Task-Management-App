import React from 'react';
import { Link } from 'react-router-dom';
import hero_img from "../../assets/hero-img.png";

const Hero = ({ theme }) => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 ">
      <div className="container flex flex-col justify-center p-10 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Manage Your
            <span className="dark:text-violet-400"> Task </span>Easily
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Now it is so easy to manage your tasks.
            <br className="hidden md:inline lg:hidden text-center"/> Please login to add tasks in your list.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/myTask"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              My Tasks
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/addTask"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Add Task
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={hero_img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;