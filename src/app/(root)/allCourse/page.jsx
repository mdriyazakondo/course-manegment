import CourseCard from "@/app/components/shared/Course/CourseCard";
import React from "react";

const AllCourse = async () => {
  const res = await fetch("http://localhost:5000/api/courses");
  const courses = await res.json();

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
