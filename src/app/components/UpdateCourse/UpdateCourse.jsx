"use client";

import React, { useState, useEffect } from "react";

const UpdateCourse = ({ course, onCancel, onSave }) => {
  const [formData, setFormData] = useState(course || {});

  useEffect(() => {
    setFormData(course);
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${course._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Failed to update");

      onSave(formData); // parent state update
      onCancel(); // close modal
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="space-y-4">
      <input
        name="title"
        value={formData?.title || ""}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-3 border rounded"
      />
      <input
        name="category"
        value={formData?.category || ""}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-3 border rounded"
      />
      <input
        name="instructor"
        value={formData?.instructor || ""}
        onChange={handleChange}
        placeholder="Instructor"
        className="w-full p-3 border rounded"
      />
      <input
        name="duration"
        value={formData?.duration || ""}
        onChange={handleChange}
        placeholder="Duration"
        className="w-full p-3 border rounded"
      />
      <input
        name="level"
        value={formData?.level || ""}
        onChange={handleChange}
        placeholder="Level"
        className="w-full p-3 border rounded"
      />
      <input
        name="price"
        type="number"
        value={formData?.price || ""}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-3 border rounded"
      />
      <input
        name="image"
        value={formData?.image || ""}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-3 border rounded"
      />
      <textarea
        name="description"
        value={formData?.description || ""}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-3 border rounded"
        rows={3}
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-300 p-3 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-500 p-3 rounded text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateCourse;
