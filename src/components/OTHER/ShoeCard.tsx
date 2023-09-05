/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: {
  imgURL: any;
  changeBigShoeImage: any;
  bigShoeImg: any;
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? " border-cyan-600"
          : "border-transparent"
      } coursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
