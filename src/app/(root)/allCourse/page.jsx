import CourseCard from "@/app/components/shared/Course/CourseCard";
import React from "react";

export const dynamic = "force-dynamic";

const AllCourse = async () => {
  let courses = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
      cache: "no-store",
    });
    courses = await res.json();
  } catch (err) {
    console.error("Failed to fetch courses:", err);
  }

  return (
    <div className="max-w-[1500px] mx-5 md:mx-6 2xl:mx-auto py-12 mt-16 md:mt-18">
      <h1 className="text-center font-bold text-4xl text-purple-500">
        Features Course
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
