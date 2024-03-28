import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown Navbar-link">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-48 font-work"
          >
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/booksListed" activeclassname="active">
              Listed Books
            </NavLink>
            <NavLink to="/readPages" activeclassname="active">
              Pages to Read
            </NavLink>
            <NavLink to="/membership" activeclassname="active">
              Membership
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-4xl font-work font-bold pl-0">BooksPedia</a>
      </div>
      <div className="Navbar-link navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 font-work">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/booksListed" activeclassname="active">
            Listed Books
          </NavLink>
          <NavLink to="/readPages" activeclassname="active">
            Pages to Read
          </NavLink>
          <NavLink to="/membership" activeclassname="active">
            Membership
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4">
        <a className="btn bg-[#23BE0A] text-white  font-work lg:font-semibold btn-sm lg:btn-md">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white  font-work lg:font-semibold btn-sm lg:btn-md  ">Sign Up  </a>
      </div>
    </div>
  );
};

export default Header;
