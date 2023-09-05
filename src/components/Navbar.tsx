/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import { navLinks } from "../constants/index";

import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0034/8759/6579/files/Black_large_logo.png?height=628&pad_color=fff&v=1614328540&width=1200"
            alt=""
            width={130}
            height={10}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" max-lg:block hidden z-10">
          <button
            className="flex flex-col justify-center items-center"
            onClick={handleClick}
          >
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="hidden  text-center justify-end py-5 max-lg:block translate-x-1/3 -translate-y-1/2">
          <ul className=" justify-center items-center gap-16 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg rounded text-slate-gray block py-2 pl-3 pr-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
