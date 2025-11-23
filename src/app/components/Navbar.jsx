"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Add Course", path: "/addCourse" },
    { name: "All Course", path: "/allCourse" },
  ];

  return (
    <div className="flex items-center justify-between px-5 md:px-6 2xl:px-50 py-4 shadow-md bg-white fixed top-0 right-0 left-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">Course Management</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        {links.map((link, i) => (
          <li
            key={i}
            className={`cursor-pointer  hover:text-blue-600 ${
              pathName === link.path ? "gradient-btn" : ""
            }`}
          >
            <Link href={link.path}> {link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="gradient-btn">Login</button>
        <button className="gradient-btn">Register</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <X size={28} className="cursor-pointer" />
        ) : (
          <Menu size={28} className="cursor-pointer" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-14  right-0 w-full bg-white shadow-md py-4 md:hidden">
          <ul className="flex flex-col items-center gap-4 font-medium mx-4">
            {links.map((link, i) => (
              <li
                key={i}
                className={`cursor-pointer w-full text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 border border-blue-600 transition-all duration-500 rounded-md text-center ${
                  pathName === link.path ? "gradient-btn text-white" : ""
                }`}
              >
                <Link
                  href={link.path}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="block w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-center gap-3 mx-4">
            <button className="w-full gradient-btn">Login</button>
            <button className="w-full gradient-btn">Register</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
