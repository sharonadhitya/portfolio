import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import hacker from "./Images/Image.png";
import shoulderImage from "./Images/Logo.png";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_s1u44rt', // Replace with your EmailJS service ID
      'template_70dyw9g', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        message: formData.message
      },
      'A_9M2XUn7GEEhju43' // Replace with your EmailJS user ID
    )
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', title: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 relative">
        <div className="flex items-center space-x-2">
          <span className="text-purple-400 text-2xl">⏣</span>
          <h1 className="text-xl">Sharon</h1>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-12 absolute md:static top-12 right-4 md:top-auto md:right-auto bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none w-40 md:w-auto`}
        >
          <a href="#home" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #home
          </a>
          <a href="#works" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #works
          </a>
          <a href="#about-me" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #about-me
          </a>
          <a href="#contacts" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #contacts
          </a>
          <select className="bg-transparent border-none text-2xl text-purple-400 mt-2 md:mt-0">
            <option value="EN" className="bg-gray-900">
              EN
            </option>
            {/* Add more language options if needed */}
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-7 md:p-12 mt-4 md:mt-14">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-7/12 md:pl-14 -ml-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Sharon is a AIML Engineer </span>
            <br />
            <span className="text-purple-400">and Software Developer</span>
          </h2>
          <p className="text-gray-400 mb-6 text-xl">
            He crafts responsive websites where technologies <br />meet creativity
          </p>
          <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400 hover:text-white transition">
            Contact me!!
          </button>
        </div>

        {/* Image and Status Section */}
        <div className="mt-6 md:mt-0 md:w-5/12 flex flex-col items-center relative -mr-20">
          <div className="w-full h-full max-h-[600px] relative">
            {/* Shoulder image (hidden on mobile) */}
            <img
              src={shoulderImage}
              alt="Shoulder Icon"
              className="absolute top-[140px] -left-[30px] w-72 h-52 object-contain z-0 hidden md:block"
            />
            {/* Hacker image (hidden on mobile) */}
            <img
              src={hacker}
              alt="Sharon"
              className="w-full h-[420px] object-contain rounded-lg relative z-10 hidden md:block"
            />

            {/* Status Box (Overlay on Hacker Image) */}
            <div className="border-2 border-purple-400 absolute left-1/2 transform -translate-x-1/2 w-3/4 p-2 -ml-2 bg-gray-900 rounded-lg text-center z-20 hidden md:block">
              <p className="text-white text-xl"><span className="text-3xl text-purple-400">⏣</span> Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="p-7 mt-40 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[43px] -ml-16 mb-10">
            <span className="text-white">------------------- </span>#about-me<span className="text-white"> -------------------</span>
          </h3>
          <h2 className="text-gray-400 text-[45px] md:text-[30px] font-bold mb-4 -ml-14">Hello, I’m Sharon!</h2>
          <p className="text-gray-400 mb-6 text-2xl">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. <br />I can develop responsive websites from scratch and raise them into
            modern user-friendly <br /> web experiences.Transforming my creativity and knowledge into websites has been my passion for over a year.<br /> I have been helping various clients to establish their presence online. I always strive <br /> to learn about the newest technologies and frameworks.web experiences.Transforming my creativity <br /> and knowledge into websites has been my <br /> sdhb passion for over a year.
          </p>
          <button className="bg-transparent border-2 border-purple-400 text-purple-400 text-xl mr-14 mt-6 px-6 py-2 hover:bg-purple-400 hover:text-white transition">
            Read more →
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="p-7 mt-40 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[43px] -ml-16 mb-28">
            <span className="text-white">------------------- </span>#skills<span className="text-white"> -------------------</span>
          </h3>
          <div className="px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Languages */}
              <div className="bg-gray-800 p-6 rounded-lg w-72 h-96">
                <h4 className="text-purple-400 text-[28px] mb-20">Languages</h4>
                <p className="text-white text-xl">TypeScript C++</p>
                <p className="text-white text-xl">Python JavaScript</p>
                <p className="text-white text-xl">Go Bash HTML/CSS</p>
              </div>

              {/* Tools */}
              <div className="bg-gray-800 p-6 rounded-lg w-72">
                <h4 className="text-purple-400 text-[28px] mb-10">Devops & Tools</h4>
                <p className="text-white text-xl">Neovim Linux</p>
                <p className="text-white text-xl">Docker Git/Github</p>
                <p className="text-white text-xl">AWS GCP</p>
              </div>

              {/* Databases */}
              <div className="bg-gray-800 p-6 rounded-lg w-72">
                <h4 className="text-purple-400 text-[28px] mb-20">Databases</h4>
                <p className="text-white text-xl">SQLite PostgreSQL</p>
                <p className="text-white text-xl">Mongo Firebase</p>
                <p className="text-white text-xl">MYSQL Chromadb</p>
              </div>

              {/* Frameworks */}
              <div className="bg-gray-800 p-6 rounded-lg w-72">
                <h4 className="text-purple-400 text-[28px] mb-10">Web Frameworks</h4>
                <p className="text-white text-xl">React/Nextjs Flask</p>
                <p className="text-white text-xl">Node/Expressjs Django</p>
                <p className="text-white text-xl">Tailwindcss</p>
                <p className="text-white text-xl">React-Native</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg w-72">
                <h4 className="text-purple-400 text-[28px] mb-20">Security</h4>
                <p className="text-white text-xl">Hashcat Postman</p>
                <p className="text-white text-xl">Metasploit Wireshark</p>
                <p className="text-white text-xl">Rainbow-Crack Nmap</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-7 mt-56 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[43px] -ml-16 mb-32">
            <span className="text-white">------------------- </span>#Projects<span className="text-white"> -------------------</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CherrtNodes */}
            <div className="border-2 border-white p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">CherrtNodes</h5>
              <p className="text-gray-400 text-xl mb-2">Minecraft servers hosting</p>
              <p className="text-gray-400 text-lg mb-2">HTML, SCSS Python Flask</p>
              <div className="flex space-x-2">
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Live ↗</button>
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Cached ↗</button>
              </div>
            </div>

            {/* Kahoot Answers Viewer */}
            <div className="border-2 border-white p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Kahoot Answers Viewer</h5>
              <p className="text-gray-400 text-xl mb-2">Get answers to your kahoot quiz</p>
              <p className="text-gray-400 text-lg mb-2">CSS Express Node.js</p>
              <div className="flex space-x-2">
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Live ↗</button>
              </div>
            </div>

            {/* ProtectX */}
            <div className="border-2 border-white p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">ProtectX</h5>
              <p className="text-gray-400 text-xl mb-2">Discord anti-crash bot</p>
              <p className="text-gray-400 text-lg mb-2">React Express Discord.js Node.js</p>
              <div className="flex space-x-2">
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Cached ↗</button>
              </div>
            </div>

            {/* Kotik Bot */}
            <div className="border-2 border-white p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Kotik Bot</h5>
              <p className="text-gray-400 text-xl mb-2">Multi-functional discord bot</p>
              <p className="text-gray-400 text-lg mb-2">HTML CSS JS</p>
              <div className="flex space-x-2">
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Live ↗</button>
              </div>
            </div>

            {/* Elias Portfolio */}
            <div className="border-2 border-white p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Elias Portfolio</h5>
              <p className="text-gray-400 text-xl mb-2">You're using it rn</p>
              <p className="text-gray-400 text-lg mb-2">Vue TS Less</p>
              <div className="flex space-x-2">
                <button className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-7 mt-56 md:p-12">
        <div className="text-center mb-32">
          <h3 className="text-purple-400 text-[43px] -ml-16">
            <span className="text-white">------------------- </span>#Contact<span className="text-white"> -------------------</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Contact Text (Left Side) */}
          <div className="w-full md:w-1/2 p-4 pr-10 mt-32">
            <p className="text-gray-400 text-2xl">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="bg-gray-800 border-2 border-white rounded-lg p-6">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white p-2 focus:outline-none focus:border-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white p-2 focus:outline-none focus:border-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white p-2 focus:outline-none focus:border-purple-400"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full bg-transparent border-b-2 border-gray-400 text-white p-2 focus:outline-none focus:border-purple-400 h-24 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
              >
                Send
              </button>
              {status && <p className="text-green-400 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-2 mt-40 border-gray-300" />

      {/* Footer */}
      <footer className="bg-gray-900 p-4 text-center mt-10 md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Name and Email */}
          <div className="mb-2 md:mb-0">
            <p className="text-gray-400">
              <span className="text-purple-400">⏣</span> Sharon{' '}
              <a href="mailto:sasimanju1975@gmail.com" className="text-gray-400 hover:text-purple-400">
                sasimanju1975@gmail.com
              </a>
            </p>
            <p className="text-gray-400">Web designer and front-end developer</p>
          </div>

          {/* Right Side: Media */}
          <div className="flex space-x-2">
            <span className="text-gray-400 text-xl -ml-40">Media</span>
            <a href="https://github.com/sharonadhitya" className="text-gray-400 hover:text-purple-400">
              <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/sharon-adhitya-34855a25a" className="text-gray-400 hover:text-purple-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />
            </a>
            <a href="#ekn" className="text-gray-400 hover:text-purple-400">
              <FontAwesomeIcon icon={faDiscord} size="2x" color="#7289DA" />
            </a>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-20">© Copyright 2025, Made by Sharon</p>
      </footer>
    </div>
  );
}

export default App;