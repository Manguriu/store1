import React from "react";

function ReviewCard({
  imgURL,
  customerName,
  rating,
  feedback,
}: {
  imgURL: any;
  customerName: any;
  rating: any;
  feedback: any;
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 mx-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src="https://img.freepik.com/premium-vector/star-icon-golden-sign-vector-illustration-object_547150-368.jpg?w=826"
          width={24}
          height={24}
          className="object-conatin m-0"
        />
        <p className="text-xl font-montserrat text-cyan-300">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-extrabold">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
