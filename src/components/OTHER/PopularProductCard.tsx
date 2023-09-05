/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function PopularProductCard({
  name,
  price,
  imgURL,
}: {
  name: any;
  price: any;
  imgURL: any;
}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src="https://img.freepik.com/premium-vector/star-icon-golden-sign-vector-illustration-object_547150-368.jpg?w=826"
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-extralight text-xl leading-normal text-cyan-300">
          (4.0)
        </p>
      </div>
      <h3 className="mt-3 text-1xl font-palanquin leading-normal font-semibold">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold leading-normal text-cyan-400 text-2xl">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
