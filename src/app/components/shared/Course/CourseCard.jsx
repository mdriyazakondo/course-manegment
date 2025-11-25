import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  const {
    title,
    category,
    instructor,
    duration,
    level,
    price,
    image,
    description,
    created_at,
  } = course;

  const getValidImageSrc = (src) => {
    if (!src) return "/default-course.png"; 
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (src.startsWith("/")) return src;
    return "/default-course.png";
  };

  return (
    <div className="max-w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-52 md:h-60">
        <Image
          src={getValidImageSrc(image)}
          alt={title}
          fill
          className="object-cover bg-purple-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <span className=" text-blue-600 font-semibold">{category}</span>

        <h3 className="text-lg md:text-xl font-bold text-gray-800">{title}</h3>

        <p className="text-gray-600 font-semibold">Instructor By: {instructor}</p>

        <p className="text-gray-700 font-medium  line-clamp-5">
          {description?.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center  text-gray-700 ">
          <span className="font-semibold text-gray-600">Duration: {duration}</span>
          <span className="font-semibold text-gray-600">Level: {level}</span>
        </div>

        <div className="flex justify-between items-center ">
          <span className="font-bold text-blue-600 text-lg">Price: ${price}</span>
          <span className="text-gray-400 text-xs">
            Date: {new Date(created_at).toLocaleDateString()}
          </span>
        </div>

        <Link href={`/allCourse/${course._id}`}>
          <button className="mt-4 w-full py-2 gradient-btn text-white  font-semibold  ">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
