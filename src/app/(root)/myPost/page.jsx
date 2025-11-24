import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyPost = () => {
  return (
    <div className="mt-20">
      <div className="py-10 px-3 sm:px-6 lg:px-10 relative min-h-[56vh]">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-blue-500">
          My All Post
        </h2>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-gray-200 text-sm sm:text-base">
            <thead className="gradient-bg text-white">
              <tr>
                <th className="px-4 py-3 text-center">Crop Image</th>
                <th className="px-4 py-3 text-center">Crop Name</th>
                <th className="px-4 py-3 text-center">Owner Name</th>
                <th className="px-4 py-3 text-center">Location</th>
                <th className="px-4 py-3 text-center">Type</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">Quantity</th>
                <th className="px-4 py-3 text-center">Date</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  <Image
                    className="rounded-full w-10 h-10 object-cover"
                    src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
                    width={100}
                    height={100}
                    alt="Crop"
                  />
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  HTML
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  Md Amdad Islam
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  Dhaka
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  Web Developer
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  $10000
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  5
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  {new Date().toLocaleDateString()}
                </td>

                <td className="px-4 py-2 border-r border-gray-300 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer">
                      <FaEdit /> Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Removed the modal completely since you said: 
            "sob hard code a bosbe, kono dynamic thakbe na" */}
      </div>
    </div>
  );
};

export default MyPost;
