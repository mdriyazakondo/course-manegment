import React from "react";
import { Search, Book, Laptop, Layers, PenTool } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full h-[650px] gradient-bg relative flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-snug">
          Grow Your Skills <br /> Shape Your Future.
        </h2>

        <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Join thousands of learners gaining real-world knowledge from expert
          mentors.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center bg-white rounded-xl px-4 py-2 max-w-lg w-full shadow-lg">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for courses..."
              className="ml-3 w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <CategoryCard icon={<Book />} title="Education" />
          <CategoryCard icon={<Laptop />} title="Technology" />
          <CategoryCard icon={<Layers />} title="Design" />
          <CategoryCard icon={<PenTool />} title="Creativity" />
        </div>
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-6 py-4 flex flex-col justify-center items-center text-white shadow-lg hover:bg-white/30 transition">
      <div className="text-white mb-2">{icon}</div>
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
};

export default Banner;
