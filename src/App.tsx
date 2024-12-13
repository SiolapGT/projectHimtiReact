import React, { useEffect } from "react";
import AOS from "aos";
import { Menu, X } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-6">
            <img
              src="src/assets/himtiBiru.png"
              alt="Logo of HIMTI"
              className="h-10 w-auto"
            />
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-gray-800 hover:text-blue-500 font-bold transition-colors"
              >
                HOME
              </a>
              <a
                href="#events"
                className="text-gray-800 hover:text-blue-500 font-bold transition-colors"
              >
                EVENTS
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-500 font-bold transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-500 font-bold transition-colors"
              >
                CONTACT US
              </a>
            </nav>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <a
              href="#home"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
            >
              HOME
            </a>
            <a
              href="#events"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
            >
              EVENTS
            </a>
            <a
              href="#about"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
            >
              CONTACT US
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <main
        className="pt-24 container mx-auto text-center py-20 px-6"
        id="home"
      >
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            HIMTI STUDY TOUR
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </main>

      {/* City Image Section */}
      <section className="relative">
        <img
          src="src/assets/kota.png"
          alt="City view"
          className="w-full object-cover h-[600px] md:h-[700px]"
          data-aos="zoom-in"
        />
      </section>

      {/* Events Section */}
      <section className="bg-[#B3EEF5] py-20" id="events">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl md:text-6xl font-bold text-[#3A75D4] mb-16"
            data-aos="fade-right"
          >
            EVENTS
          </h2>

          {/* Domestic Tour */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
            data-aos="fade-up"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                Domestic Study Tour
              </h3>
              <p className="text-[#1a237e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="src/assets/Saly-16.png"
                alt="Domestic tour illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* International Tour */}
          <div
            className="flex flex-col-reverse md:flex-row items-center gap-8"
            data-aos="fade-up"
          >
            <div className="md:w-1/2">
              <img
                src="src/assets/Saly-22.png"
                alt="International tour illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                International Study Tour
              </h3>
              <p className="text-[#1a237e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#4DA9E5] py-20" id="about">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-white mb-12 text-center"
            data-aos="fade-down"
          >
            ABOUT US
          </h2>
          <div
            className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <img
              src="src/assets/logohimti.png"
              alt="HIMTI Logo"
              className="w-48 md:w-64"
            />
            <p className="text-white text-center md:text-left">
              Himpunanan Mahasiswa Teknik Informatika (HIMTI) Universitas Bina
              Nusantara adalah Organisasi Kemahasiswaan di Universitas Bina
              Nusantara yang berbentuk Himpunan Mahasiswa Jurusan (HMJ) untuk
              mahasiswa School of Computer Science (SOCS), BINUS UNIVERSITY.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-500 py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-white mb-12 text-center"
            data-aos="fade-down"
          >
            CONTACT US
          </h2>
          <form className="max-w-md mx-auto" data-aos="fade-up">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button className="w-full justify-self-center bg-white text-blue-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="src/assets/BINUSUniversityWhite1.png"
                alt="BINUS Logo"
                className="h-40 "
              />
              <img
                src="src/assets/logohimti.png"
                alt="HIMTI Logo"
                className="h-56 w-52"
              />
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/himti_binus"
                className="text-white flex items-center gap-2 hover:text-gray-200"
              >
                <img
                  src="src/assets/Group.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
                @himti_binus
              </a>
              <a
                href="https://www.youtube.com/@HimtiBinus"
                className="text-white flex items-center gap-2 hover:text-gray-200"
              >
                <img
                  src="src/assets/Group (1).png"
                  alt="YouTube"
                  className="w-5 h-5"
                />
                HIMTI BINUS
              </a>
              <a
                href="https://www.tiktok.com/@himtibinus"
                className="text-white flex items-center gap-2 hover:text-gray-200"
              >
                <img
                  src="src/assets/Group (2).png"
                  alt="TikTok"
                  className="w-5 h-5"
                />
                @himtibinus
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-white">
              &copy; Copyright 2024 HIMTI BINUS University.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
