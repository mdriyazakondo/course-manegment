// components/Footer.jsx
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white bg-gray-700 py-10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          {/* Logo & Description */}
          <div className="">
            <Link href="/" className="flex items-center ">
              <Image
                src="https://www.masterclassmanagement.com/Master_Class_Management_Logo_Small.png"
                alt="course manegment"
                width={32}
                height={32}
                className="w-10 h-6"
              />
              <span className="text-xl font-semibold text-blue-600 mt-2 ">
                {" "}
                LMS
              </span>
            </Link>
            <p className="max-w-sm text-gray-200  leading-relaxed mt-4">
              Empower students to learn anytime, anywhere with our interactive
              and comprehensive online courses. Track progress, manage lessons,
              and boost skills with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Courses</h2>
            <Link href="/" className="hover:text-gray-100 transition-colors">
              Home
            </Link>
            <Link
              href="/allCourse"
              className="hover:text-gray-100 transition-colors"
            >
              All Courses
            </Link>
            <Link
              href="/addCourse"
              className="hover:text-gray-100 transition-colors"
            >
              Add Course
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Company</h2>
            <Link
              href="/about"
              className="hover:text-gray-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="myPost"
              className="hover:text-gray-100 transition-colors"
            >
              My Post
            </Link>
            <a href="#" className="hover:text-gray-100 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-center text-white">
              Follow Us
            </h3>
            <div className="flex items-center justify-center gap-5 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={28} />
              </a>
              <a
                href="#"
                className="text-red-500 hover:text-red-400 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={28} />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-300 pt-4 text-center text-gray-200 text-sm">
          All rights reserved. &copy; 2025 Course Manegment.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
