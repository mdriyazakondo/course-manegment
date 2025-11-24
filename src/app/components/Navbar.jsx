"use client";
import { MdOutlineAddBusiness } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const { user } = useUser();
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    ...(user
      ? [
          { name: "Add Course", path: "/addCourse" },
          { name: "My Post", path: "/myPost" },
        ]
      : []),
    { name: "All Course", path: "/allCourse" },
  ];

  return (
    <div className="flex items-center justify-between px-5 md:px-6 2xl:px-50 py-4 shadow-md bg-white fixed top-0 right-0 left-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center ">
        <Image
          src="https://www.masterclassmanagement.com/Master_Class_Management_Logo_Small.png"
          alt="course manegment"
          width={32}
          height={32}
          className="w-full h-full"
        />
        <span className="text-xl font-semibold text-blue-600 mt-2 "> LMS</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        {links.map((link, i) => (
          <li
            key={i}
            className={`cursor-pointer hover:text-blue-600 ${
              pathName === link.path ? "gradient-btn" : ""
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Buttons */}
      <SignedOut>
        <div className="hidden md:flex items-center gap-4">
          <SignInButton mode="modal">
            <button className="gradient-btn">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="gradient-btn">Register</button>
          </SignUpButton>
        </div>
      </SignedOut>

      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Add Course"
            labelIcon={<MdOutlineAddBusiness />}
            href="/addCourse"
          />
        </UserButton.MenuItems>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Manage Product"
            labelIcon={<AiOutlineProduct />}
            href="/manage-product"
          />
        </UserButton.MenuItems>
      </UserButton>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-14 right-0 w-full bg-white shadow-md py-4 md:hidden">
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
                  onClick={() => setOpen(false)}
                  className="block w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <SignedOut>
            <div className="mt-4 flex flex-col items-center gap-3 mx-4">
              <SignInButton mode="modal">
                <button className="w-full gradient-btn">Login</button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="w-full gradient-btn">Register</button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="mt-4 flex flex-col items-center gap-3 mx-4">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      )}
    </div>
  );
};

export default Navbar;
