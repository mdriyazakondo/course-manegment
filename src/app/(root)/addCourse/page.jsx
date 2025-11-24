"use client";

import ProtectRoute from "@/app/components/ProtectRoute/ProtectRoute";
import { useClerk, useUser } from "@clerk/nextjs";

const AddCourse = () => {
  const { user } = useUser();

  const { openSignIn } = useClerk();

  if (!user) {
    openSignIn();
    return <ProtectRoute />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const instructor = e.target.instructor.value;
    const duration = e.target.duration.value;
    const level = e.target.level.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    const newCourse = {
      name,
      email,
      title,
      category,
      instructor,
      duration,
      level,
      price,
      image,
      description,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourse),
        }
      );
      const data = await response.json();
      console.log("Course added:", data);
      e.target.reset();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center"> Add Course</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 space-y-4 shadow my-4"
      >
        <input
          type="text"
          defaultValue={user?.fullName}
          name="name"
          required
          placeholder="Owner Name"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          defaultValue={user?.primaryEmailAddress?.emailAddress}
          name="email"
          required
          placeholder="Owner Email"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 6 weeks)"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="level"
          placeholder="Level (Beginner, Intermediate, Advanced)"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          required
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <textarea
          name="description"
          required
          placeholder="Course Description"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400 resize-none"
          rows={3}
        />
        <button
          type="submit"
          className="w-full gradient-btn  p-3 rounded  transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
