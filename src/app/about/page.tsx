import Navbar from "../components/navbar";
import Image from "next/image";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="body-font" style={{ backgroundColor: "#1b263b", color: "#e0e1dd" }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" style={{ color: "#e0e1dd" }}>
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-justify" style={{ color: "#e0e1dd" }}>
              Hello! My name is Mudasser Haryani, and I am currently a student in the Governor IT Initiative program (Roll No. 0476210). I attend classes on Wednesdays from 7 to 10 PM, where I have the privilege of learning from Sir Mubashir Ali.
              I recently completed my Quarter 1, achieving a 98% percentile. I'm excited to continue my journey in technology as I dive into Next.js under the guidance of Sir Mubashir. My passion for learning and exploring new technologies drives me to excel and take on new challenges.
              I look forward to applying my skills and knowledge in the real world, and I'm eager to see where this journey will take me!
            </p>
            <div className="flex w-full md:justify-start justify-center items-center space-x-4 mb-8">
              <a href="/images/CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  My CV
                </button>
              </a>
              {/* Icons Section */}
              <a href="https://www.youtube.com/@MudasserHaryani" target="_blank" rel="noopener noreferrer" className="mx-2">
                <AiFillYoutube className="text-red-600 hover:text-red-700 text-5xl shadow-lg hover:shadow-xl transition-shadow duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/mudasser-haryani-8907b22b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVACvzs4CSYeZ0esz%2FuW%2FVA%3D%3D" target="_blank" rel="noopener noreferrer" className="mx-2">
                <AiFillLinkedin className="text-blue-700 hover:text-blue-800 text-5xl shadow-lg hover:shadow-xl transition-shadow duration-200" />
              </a>
              <a href="https://github.com/MudasserHaryani" target="_blank" rel="noopener noreferrer" className="mx-2">
                <AiFillGithub className="text-white hover:text-gray-300 text-5xl shadow-lg hover:shadow-xl transition-shadow duration-200" />
              </a>
            </div>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              alt="hero"
              src="/images/pic.jpg" // Updated src
              width={400} // Use the appropriate width
              height={300} // Use the appropriate height
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
