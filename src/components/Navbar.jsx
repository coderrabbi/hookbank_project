import { React, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="navbar flex justify-between item-center py-6 w-full  ">
      <div className="logo_section">
        <a href="">
          <img src={logo} alt="hoobank" className="h-[32px]" />
        </a>
      </div>
      <div className="menu_links">
        <ul className={`${styles.flexStart} sm:flex hidden  `}>
          {navLinks.map((item, index) => {
            return (
              <li
                className={`text-white list-none font-poppins font-normal cursor-pointer flex-1text-[16px] ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-10`
                }`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle"
          className="w-[20px] object-contain h-[20px] cursor-pointer"
          onClick={() => {
            settoggle((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-5 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-1 justify-center items-center flex-col">
            {navLinks.map((item, index) => {
              return (
                <li
                  className={`text-white list-none font-poppins font-normal cursor-pointer flex-1text-[16px] ${
                    index === navLinks.length - 1 ? `mr-0` : `mb-4`
                  }`}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
