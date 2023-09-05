/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-4 border text-lg font-montserrat  leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-cyan-500  border-slate-500 text-white"
      }
      rounded-full ${fullwidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          alt=""
          src={iconURL}
          className=" ml-2 rounded-full w-5 h-5 bg-cyan-500"
        />
      )}
    </button>
  );
};
export default Button;
