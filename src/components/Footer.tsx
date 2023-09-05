/* eslint-disable @next/next/no-img-element */
import { footerLinks, socialMedia } from "@/constants";
import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className=" max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/0034/8759/6579/files/Black_large_logo.png?height=628&pad_color=fff&v=1614328540&width=1200"
              width={100}
              height={26}
              alt=""
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-slate-400">
            {" "}
            Get the best Offers from us Get the best Offers from us
          </p>
          <div className="flex items-center mt-8 gap-3">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12  bg-white rounded-full"
                key={icon.id}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className=""
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20  mt-8 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-3">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-slate- font-montserrat text-base leading-normal hover:text-cyan-400 cursor-pointer"
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src="/icons/copyright-sign.svg"
            width={20}
            height={20}
            className="rounded-full m-0"
            alt=""
          />
          <p>All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
