// import styles from './Navbar.module.css'
import { NavRoutes } from "../data/NavBarArrays";
import Button from "../components/Button";
import Logo from "../assets/img/calogo.png";
import { Link, useLocation } from "react-router";
import { VscThreeBars } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  function isActive(routes) {
    return location.pathname === routes;
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center">
        {/* Logo & Hamburger */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <img src={Logo} alt="Logo" className="w-[110px] lg:w-[100px]" />
          <div className="sm:hidden cursor-pointer" onClick={toggleBar}>
            {isOpen ? (
              <GrClose
                className="text-[#7ae92d] text-3xl transition-all duration-300"
                size={50}
              />
            ) : (
              <VscThreeBars
                className="text-[#7ae92d] text-3xl transition-all duration-300"
                size={50}
              />
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-10 items-center">
          {NavRoutes.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                className={`${
                  isActive(route.path) ? "text-[#FAAD29]" : "text-[#7ae92d]"
                } font-bold font-plus-jakarta-sans`}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <Button className="bg-secondary text-white text-xs py-3 px-5 hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold">
            Get in touch
          </Button>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="sm:hidden absolute  left-0 w-full bg-[#F3C037] flex flex-col gap-9 p-5 z-40 transition-all duration-300 h-screen top-28">
          {NavRoutes.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                className={`${
                  isActive(route.path)
                    ? "text-white text-2xl"
                    : "text-black text-2xl"
                } font-bold font-plus-jakarta-sans`}
                onClick={closeMenu}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <Button className="bg-secondary text-white w-full py-4 text-2xl hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold">
            Get in touch
          </Button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
