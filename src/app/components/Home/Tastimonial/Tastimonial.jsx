import Image from "next/image";
import React from "react";

const Testimonial = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/data/tastimonial.json`,
    {
      cache: "no-store",
    }
  );
  const testimonials = await res.json();

  return (
    <div className="max-w-[1500px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center"
        >
          <Image
            src={testimonial.author.image}
            alt={testimonial.author.name}
            width={48}
            height={48}
            className="w-16 h-16  rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 mb-2">{`"${testimonial.content}"`}</p>
            <div className="flex items-center mb-1">
              <span className="font-semibold mr-2">
                {testimonial.author.name}
              </span>
              <span className="text-yellow-500">
                {"⭐".repeat(testimonial.rating)}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{testimonial.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
