"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MdOutlineAddBusiness } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const { user } = useUser();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    ...(user ? [{ name: "Add Course", path: "/addCourse" }] : []),
    { name: "All Course", path: "/allCourse" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-[1500px] mx-auto px-5 md:px-0 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.masterclassmanagement.com/Master_Class_Management_Logo_Small.png"
            alt="course management"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold text-blue-600 mt-2">LMS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {links.map((link, i) => (
            <li
              key={i}
              className={`cursor-pointer hover:text-blue-600 ${
                pathName === link.path ? "text-blue-600 font-bold" : ""
              }`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <SignedOut>
          <div className="hidden md:flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="px-4 py-2 gradient-btn  rounded-md  transition">
                Login
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 border   rounded-md gradient-btn  transition">
                Register
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        {/* Desktop UserButton */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                rootBox: "ml-3",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Add Course"
                labelIcon={<MdOutlineAddBusiness />}
                href="/addCourse"
              />
              <UserButton.Link
                label="Manage Product"
                labelIcon={<AiOutlineProduct />}
                href="/myPost"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-1 z-50" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-40">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 pt-14">
            <ul className="flex flex-col gap-4">
              {links.map((link, i) => (
                <li
                  key={i}
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathName === link.path
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-100"
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

            <SignedOut>
              <div className="flex flex-col gap-3">
                <SignInButton mode="modal">
                  <button className="w-full px-4 py-2 gradient-btn  rounded-md">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full px-4 py-2 border gradient-btn  rounded-md">
                    Register
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="mt-3">
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Link
                      label="Add Product"
                      labelIcon={<MdOutlineAddBusiness />}
                      href="/add-product"
                    />
                    <UserButton.Link
                      label="Manage Product"
                      labelIcon={<AiOutlineProduct />}
                      href="/manage-product"
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
