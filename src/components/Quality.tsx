import React from "react";
import Button from "./OTHER/Button";
import shoe34 from "../../public/shoe34.png";
import { fork } from "child_process";

function Quality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl  font-bold lg:max-w-lg">
          we offer the best
          <span className="text-cyan-600 inline-block mt-3">
            &nbsp;services
          </span>{" "}
          and <br />
          <span className="text-cyan-600 inline-block mt-3">Shoes</span>{" "}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover new things Also, make sure that the paths to your components
          and images are accurate based on your project structure. Also, make
          sure that the paths to your components and images are accurate based
          on your project structure. Also, make sure that the paths to your
          components and images are accurate based on your project structure.
        </p>
        <br />
        <p className="mt-6 lg:max-w-lg info-text">
          Also, make sure that the paths to your components and images are
          accurate based on your project structure.
        </p>
        <div className="mt-10">
          <Button
            label="Explore Details"
            iconURL=""
            backgroundColor=""
            borderColor=""
            fullwidth={false}
            textColor=""
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/images/shoe8.svg"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Quality;
