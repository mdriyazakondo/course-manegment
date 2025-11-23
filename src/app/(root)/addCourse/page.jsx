"use client";

const page = () => {
  const user = {
    email: "mdriyazakondo@gmail.com",
    name: "Md Riyaz Akondo",
  };

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
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
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
          defaultValue={user.name}
          name="name"
          placeholder="Owner Name"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          defaultValue={user?.email}
          name="email"
          placeholder="Owner Email"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 6 weeks)"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="level"
          placeholder="Level (Beginner, Intermediate, Advanced)"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full p-3 border rounded outline-none focus:border-purple-500 border-gray-400"
        />
        <textarea
          name="description"
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

export default page;
