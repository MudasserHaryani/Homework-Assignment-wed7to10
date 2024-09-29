import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="body-font" style={{ backgroundColor: "#1b263b", color: "#e0e1dd" }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded shadow-2xl"
              alt="hero"
              src="/images/home.jpg" // Remove the "public" part from the path
              layout="responsive" // Optional: Helps maintain aspect ratio
              width={720} // Set width according to your image dimensions
              height={600} // Set height according to your image dimensions
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-2 font-extrabold" style={{ color: "#e0e1dd" }}>
  My Homework Assignment
  <br className="hidden lg:inline-block" />
  <span className="text-2xl font-medium" style={{ color: "#e0e1dd" }}>For class slot Wednesday 25-Sep-2024</span>
</h1>

            <p className="mb-8 leading-relaxed text-justify" style={{ color: "#e0e1dd" }}>
            For my homework assignment, I've developed an engaging web app featuring at least five pages. The app includes a functional navbar for easy navigation, ensuring a seamless user experience. I've put in extra effort to enhance its appeal by incorporating a countdown timer, a weather app, an informative about section, and a user-friendly contact section. This project not only showcases my skills in web development but also my commitment to creating an attractive and functional application.
            </p>
            <div className="flex justify-center">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
