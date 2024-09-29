import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <section className="text-gray-300 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7128689696324!2d66.98453987358236!3d24.873654444732814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3158fd3640c63%3A0xfa2a89cdc5e376e0!2sD%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727611699047!5m2!1sen!2s"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Flat 101, Shah Terrace, Street 2, D-Road, Bihar Colony, Lyari, Karachi, Pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">mudasser.haryani71@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92-333-2682747</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6">
            <h2 className="text-gray-300 text-lg mb-1 font-medium title-font text-center">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400 text-center">
              I'm excited to hear from you! Please feel free to share your thoughts or questions, and I will get back to you soon.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto">
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Thank you for reaching out! I look forward to connecting with you and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
