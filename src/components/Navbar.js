import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({name}) => {

  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleOnclick = () => {
    setActive(!active);
  };

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:3001/logout');
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Zani-code
          </span>
          <div className="flex relative items-center md:order-2">
            <button
              onClick={handleOnclick}
              type="button"
              className="flex mr-3 text-sm bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <BsPersonCircle className="text-3xl" />
            </button>
            {active ? (
              <></>
            ) : (
              <div
                className="z-50 w-[200px] absolute bottom-[-210px] right-0 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {name}
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="user-menu-button">
                  <li className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Dashboard
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Settings
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Earnings
                  </li>
                  <li onClick={Logout} className="block px-4 py-2 cursor-pointer text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                  </li>
                </ul>
              </div>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Home
              </li>
              <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  About
              </li>
              <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Services
              </li>
              <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Pricing
              </li>
              <li className="block cursor-pointer px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
