import React, { useState } from "react";
import Button from "./OTHER/Button";
import { statistics, shoes } from "@/constants";
// import ShoeCard from "./OTHER/ShoeCard";

function Hero() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-1"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-palanquin text-cyan-600">
          Some new Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  ">
            The new arrivals
          </span>{" "}
          <br />
          <span className="text-cyan-600 inline-block mt-3">NIke</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-400 text-lg mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover new things
        </p>
        <Button label="Shop now" iconURL="/Aright.png" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-cyan-950">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40">
        <img
          src="/big-shoe1.png"
          alt=""
          width={600}
          height={500}
          className="object-contain z-10 relative"
        />
        {/* <div>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
