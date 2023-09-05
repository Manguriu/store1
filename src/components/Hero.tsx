/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Button from "./OTHER/Button";
import { statistics, shoes } from "@/constants";
import ShoeCard from "./OTHER/ShoeCard";
import bigshoe1 from "../../public/images/bigshoe1.png";
import { StaticImageData } from "next/image";
// import { bigShoe1 } from "../../public/images";
function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigshoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-1"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-palanquin text-cyan-600">
          Some new Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[62px] max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  ">
            The new arrival
          </span>{" "}
          <br />
          <span className="text-cyan-600 inline-block mt-3">NIke</span> Shoe
        </h1>
        <p className=" font-montserrat text-slate-400 text-lg mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover new things
        </p>
        <Button
          label="Shop now"
          iconURL=""
          backgroundColor=""
          borderColor=""
          fullwidth={false}
          textColor=""
        />
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
      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {
          <img
            src={`${bigShoeImg}`}
            alt=""
            width={600}
            height={500}
            className="object-contain z-10 relative"
          />
        }
        <div className=" flex sm:gap-6 absolute -bottom-[9%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(
                  shoe: React.SetStateAction<StaticImageData>
                ) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
