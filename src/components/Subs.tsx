import React from "react";
import Button from "./OTHER/Button";

function Subs() {
  return (
    <div
      className="max-container flex justify-between items-center max-lg:flex-col gap-10  "
      id="contact-us"
    >
      <h3 className="font-bold text-2xl capitalize leading-[68px] lg:max-w-md font-palanquin">
        {" "}
        Notify on New products
        <span className="text-cyan-400 text-3xl"> Launch</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-cyan-300 rounded-full">
        <input
          type="text"
          placeholder="collection@gmail.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Sign up"
            fullwidth
            iconURL="/mail.png"
            backgroundColor=""
            borderColor=""
            textColor=""
          />
        </div>
      </div>
    </div>
  );
}

export default Subs;
