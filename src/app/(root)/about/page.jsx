import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-[40vh] bg-gray-50 flex flex-col items-center py-16 px-4 mt-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Our Course Management System
      </h1>

      <p className="max-w-3xl text-center text-gray-600 mb-10">
        Our Course Management System is designed to provide seamless online
        learning experiences for students and educators. We aim to simplify
        course creation, enrollment, and tracking while maintaining a
        user-friendly interface.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA7cbN4xiW3431LZvBSLCpVka7A4L7eAGBQ&s" // Replace with your image
            alt="Course Management Illustration"
            width={500}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower students and educators by providing a reliable,
              accessible, and interactive platform for managing courses
              efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the leading solution in course management, offering
              innovative tools that foster learning and professional growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Easy course creation and management</li>
              <li>Interactive student and instructor dashboards</li>
              <li>Real-time progress tracking and analytics</li>
              <li>Secure and scalable platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
