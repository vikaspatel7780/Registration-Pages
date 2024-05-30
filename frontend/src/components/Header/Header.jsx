import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    alert("logout.....");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        {auth ? (
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <div className=" font-bold  text-2xl">Vikas Patel</div>
            </Link>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-900"
                                        }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-900"
                                        }`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-900"
                                        }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-gray-900"
                                        }`
                    }
                  >
                    Leetcode
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:order-2">
              <Link
                to="/signup"
                onClick={logout}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
             >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-end lg:order-2 ml-auto">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
