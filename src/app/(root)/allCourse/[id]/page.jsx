"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null); // initial state null
  const [error, setError] = useState(null); // optional error state

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch course data");
        return res.json();
      })
      .then((data) => {
        setSingleData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
      });
  }, [id]);

  if (!singleData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No course data found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-4 md:mx-auto mt-24 mb-12 p-6 bg-white shadow-lg rounded-2xl flex items-center justify-center min-h-[54vh]">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-shrink-0 rounded-xl overflow-hidden shadow-md w-full md:w-1/2">
          <Image
            src={singleData.image}
            alt={singleData.title}
            width={410}
            height={400}
            className="object-cover w-full h-full bg-purple-400"
          />
        </div>

        {/* Course Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-purple-700 mb-4">
            {singleData.title}
          </h1>
          <p className="text-gray-600 mb-6">{singleData.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Instructor:</span>{" "}
              {singleData.instructor}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {singleData.category}
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {singleData.duration}
            </p>
            <p>
              <span className="font-semibold">Level:</span> {singleData.level}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-green-600">${singleData.price}</span>
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(singleData.created_at).toLocaleDateString()}
            </p>
          </div>
          <button className="w-full py-2 flex items-center justify-center gradient-btn mt-4">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
