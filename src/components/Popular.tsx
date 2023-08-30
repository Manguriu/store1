import React from "react";
import { products } from "@/constants";
import PopularProductCard from "../components/OTHER/PopularProductCard";

function Popular() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-cyan-400"> Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-500 mt-3">
          top notch staff Popular prodyucts bubh usbduhuh auhuh buhus
          jhuabshuhai
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Popular;
