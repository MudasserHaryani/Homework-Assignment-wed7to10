import React from 'react';
import Image from 'next/image'; // Using Next.js's Image component
import Link from 'next/link'; // Import Link for navigation
import Logo from '/public/images/logo.jpeg'; // Adjust the path to your logo image

const Navbar = () => {
  return (
    <>
      <header className="bg-[#415a77] shadow-2xl rounded-b-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-[#e0e1dd] mb-2 md:mb-0">
            {/* Image logo */}
            <Image
              src={Logo} // Use the imported image
              alt="Logo"
              className="w-8 h-8 p-0 bg-indigo-500 rounded-full" // Adjusted size
              width={32} // Specify smaller width for Next.js Image
              height={32} // Specify smaller height for Next.js Image
            />
            <span className="ml-2 text-2xl font-bold">Mudasser Haryani (GIAIC: 476210)</span> {/* Adjusted text size */}
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-4 text-white hover:text-black transition duration-200 text-sm"> {/* Adjusted margin and font size */}
              Home
            </Link>
            <Link href="/countdown" className="mr-4 text-white hover:text-black transition duration-200 text-sm">
              Countdown Timer
            </Link>
            <Link href="/weather" className="mr-4 text-white hover:text-black transition duration-200 text-sm">
              Weather App
            </Link>
            <Link href="/about" className="mr-4 text-white hover:text-black transition duration-200 text-sm">
              About
            </Link>
            <Link href="/contact" className="mr-4 text-white hover:text-black transition duration-200 text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Add padding here to prevent content from being hidden behind the fixed navbar */}
      <div className="pt-16" /> {/* Adjust padding as necessary */}
    </>
  );
};

export default Navbar;
