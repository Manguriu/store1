import React from "react";
import Button from "./OTHER/Button";

function Offers() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src="/images/offer.svg"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl  font-bold lg:max-w-lg">
          <span className="text-cyan-600 inline-block mt-3">Special</span>{" "}
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover new things Also, make sure that the paths to your components
          and images are accurate based on your project structure. Also, make
          sure that
        </p>
        <br />
        <p className="mt-6 lg:max-w-lg info-text">
          Also, make sure that the paths to your components and images are
          accurate based on your project structure.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            label="Shop now"
            iconURL="/Aright.png"
            backgroundColor=""
            textColor=""
            borderColor=""
            fullwidth={false}
          />
          <Button
            label="Learn More"
            iconURL=""
            backgroundColor="bg-white"
            borderColor="border-slate-400"
            textColor="text-black"
            fullwidth={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Offers;
