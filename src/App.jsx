import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-6xl font-extrabold text-indigo-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I am
          <span className="block text-7xl text-gray-900 mt-2">
            Karandeep Singh
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-2xl text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Software Engineer | 3+ Years Experience
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex space-x-6">
          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1gNHrgyKPE1xw-nxPES_l8y8KsdOKU0DY/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>

          {/* Send Message Scroll */}
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-gray-200 text-indigo-700 rounded-xl shadow-lg hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>
      </section>

      {/* Skills Section */}
<section className="py-20 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">Skills</h2>
  <div className="flex flex-wrap justify-center gap-4">
    {[
      "Java",
      "Spring Boot",
      "Go",
      "Haskell",
      "REST APIs",
      "GraphQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "React.js",
      "Node.js",
    ].map((skill) => (
      <button
        key={skill}
        className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition transform hover:scale-105"
      >
        {skill}
      </button>
    ))}
  </div>
</section>

      {/* Projects Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* E-Campus */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">E-Campus</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive platform for sharing and discussing articles
              within the campus community. Features include authentication,
              publishing, commenting, profile search, and post likes.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Skills: React.js · Node.js
            </p>
            <a
              href="https://github.com/Karandeep09/e-campus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              GitHub Repo
            </a>
          </div>

          {/* Dots and Boxes */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Dots and Boxes</h3>
            <p className="text-gray-700 mb-4">
              Online multiplayer game with room-based play. Built using p5.js,
              Node.js, and Socket.io.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Skills: p5.js · Node.js · Socket.io
            </p>
            <a
              href="https://www.linkedin.com/posts/karandeep09_online-multiplayer-games-activity-6823700370183749632-hRBa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="py-20 px-6 max-w-3xl mx-auto text-center"
>
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">Contact</h2>
  <p className="text-gray-700 mb-6 text-lg">
    Let’s connect!
  </p>
  <div className="flex justify-center space-x-8 text-3xl">
    <a
      href="https://www.linkedin.com/in/karandeep09/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-800"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/Karandeep09"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-800"
    >
      <FaGithub />
    </a>
    <a
      href="mailto:karandeepjabbal@gmail.com"
      className="text-indigo-600 hover:text-indigo-800"
    >
      <FaEnvelope />
    </a>
    <a
      href="https://leetcode.com/u/karandeep09/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-800"
    >
      <SiLeetcode />
    </a>
  </div>
</section>

    </div>
  );
}

export default App;
