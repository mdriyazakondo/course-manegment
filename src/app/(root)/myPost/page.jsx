"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import UpdateCourse from "@/app/components/UpdateCourse/UpdateCourse";
import ProtectRoute from "@/app/components/ProtectRoute/ProtectRoute";

const MyPost = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/myPost?email=${user.primaryEmailAddress.emailAddress}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [user]);

  if (!user) {
    openSignIn();
    return <ProtectRoute />;
  }

  // Delete post
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setData((prevData) => prevData.filter((course) => course._id !== id));
        alert("Post deleted successfully!");
      }
    });
  };

  // Open modal to edit
  const handleEdit = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-24 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 mb-6 min-h-[56vh]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
        My All Posts
      </h2>

      <div className="overflow-x-auto w-full shadow-md rounded-lg">
        <table className="min-w-full text-sm md:text-base border border-gray-200">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-center">Image</th>
              <th className="px-4 py-3 text-center">Course Title</th>
              <th className="px-4 py-3 text-center">Instructor</th>
              <th className="px-4 py-3 text-center">Category</th>
              <th className="px-4 py-3 text-center">Price</th>
              <th className="px-4 py-3 text-center">Publish Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white text-gray-800">
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  No posts found.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 text-center">
                    <Image
                      className="rounded-full w-12 h-12 object-cover mx-auto"
                      src={item.image}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                  </td>
                  <td className="px-4 py-2 text-center font-medium">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 text-center">{item.instructor}</td>
                  <td className="px-4 py-2 text-center">{item.category}</td>
                  <td className="px-4 py-2 text-center">${item.price}</td>
                  <td className="px-4 py-2 text-center">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Course</h2>
            <UpdateCourse
              course={editItem}
              onCancel={() => setIsModalOpen(false)}
              onSave={(updatedCourse) => {
                setData((prev) =>
                  prev.map((item) =>
                    item._id === updatedCourse._id ? updatedCourse : item
                  )
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPost;
