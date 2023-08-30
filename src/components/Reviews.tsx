import { reviews } from "@/constants";
import React from "react";
import ReviewCard from "../components/OTHER/ReviewCard";

function Reviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanqiuin text-center text-4xl font-bold capitalize">
        {" "}
        what the <span className="text-cyan-400">customers</span> say
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Here are some reviews from our trusted customers{" "}
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
