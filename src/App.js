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
          } md:flex md:space-x-12 absolute md:static top-12 right-4 md:top-auto md:right-auto bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none w-40 md:w-auto z-50`}
        >
          <a href="#home" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #Home
          </a>
          <a href="#about-me" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
          #About-me
          </a>
          <a href="#works" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #Skills
          </a>
          <a href="#projects" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #Projects
          </a>
          <a href="#contacts" className="block md:inline text-2xl text-purple-400 hover:underline mb-2 md:mb-0">
            #Contacts
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="flex flex-col md:flex-row items-center justify-center p-7 md:p-12 mt-4 md:mt-14">
        {/* Text Content */}
        <div className="text-center md:text-left w-full md:w-7/12 pl-0 md:pl-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Sharon is a AIML Engineer </span>
            <br className="hidden md:block" /> 
            <span className="text-purple-400">and Software Developer</span>
          </h2>
          <p className="text-gray-400 mb-6 text-xl">
          AI-driven coder, adept at full-stack 
          <br className="hidden md:block" /> and competitive programming
          </p>
          <a href='#contacts' className="bg-transparent border-2 border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400 hover:text-white transition">
            Contact me!!
          </a>
        </div>

        {/* Image and Status Section - Modified for mobile visibility */}
        <div className="mt-6 md:mt-0 md:w-5/12 flex flex-col items-center relative md:-mr-20">
          <div className="w-full h-full max-h-[600px] relative">
            {/* Shoulder image */}
            <img
              src={shoulderImage}
              alt="Shoulder Icon"
              className="absolute top-[60px] sm:top-[140px] -left-[20px] sm:-left-[30px] w-52 md:w-72 h-40 md:h-52 object-contain z-0 block md:hidden"
            />
            {/* Mobile shoulder image (separate for better positioning) */}
            <img
              src={shoulderImage}
              alt="Shoulder Icon"
              className="absolute top-[140px] -left-[30px] w-72 h-52 object-contain z-0 hidden md:block"
            />
            {/* Hacker image */}
            <img
              src={hacker}
              alt="Sharon"
              className="w-full h-[320px] md:h-[420px] object-contain rounded-lg relative z-10 block"
            />

            {/* Status Box (Overlay on Hacker Image) */}
            <div className="border-2 border-purple-400 absolute bottom-0 md:bottom-auto md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-3/4 p-2 md:-ml-2 bg-gray-900 rounded-lg text-center z-20">
              <p className="text-white text-base md:text-xl"><span className="text-2xl md:text-3xl text-purple-400">⏣</span> Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about-me" className="p-7 mt-20 sm:mt-40 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[32px] md:text-[43px] mb-10">
            <span className="text-white hidden md:inline">------------------- </span>#about-me
            <span className="text-white hidden md:inline"> -------------------</span>
          </h3>
          <h2 className="text-gray-400 text-[30px] md:text-[45px] font-bold mb-4">Hello, I'm Sharon!</h2>
          <p className="text-gray-400 mb-6 text-sm md:text-2xl px-2 md:px-16 whitespace-pre-line">
  Sharon Adhitya S, AIML student at Chennai Institute of Technology(CGPA: 8.66/10),
  excels in AI, ML, and full-stack development. With internships at Infosys, Cisco,
  and KKR Robotics, Sharon has developed AI-driven medical image captioning models,
  network simulations, and e-commerce websites. Notable projects include a
  cold-email generator, water reservoir management system, and admin dashboard,
  boosting efficiency by up to 40%. A competitive programmer with Leetcode and
  Codechef accolades, Sharon is skilled in Python, JavaScript, React, and more.
</p>

          <a href="https://drive.google.com/file/d/176G6mKjw6OjH6sQJXlFNR7ZidCMTQLxe/view?usp=sharing" className="bg-transparent border-2 border-purple-400 text-purple-400 text-xl  mt-6 px-6 py-2 hover:bg-purple-400 hover:text-white transition">
            Read more →
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div id="works" className="p-7 mt-20 sm:mt-40 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[32px] md:text-[43px] mb-16 md:mb-28">
            <span className="text-white hidden md:inline">------------------- </span>#skills
            <span className="text-white hidden md:inline"> -------------------</span>
          </h3>
          <div className="px-0 sm:px-5 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Languages */}
              <div className="bg-gray-800 p-6 rounded-lg h-auto md:h-96">
                <h4 className="text-purple-400 text-[24px] md:text-[28px] mb-12 md:mb-20">Languages</h4>
                <p className="text-white text-xl">TypeScript C++</p>
                <p className="text-white text-xl">Python JavaScript</p>
                <p className="text-white text-xl">Go Bash HTML/CSS</p>
              </div>

              {/* Tools */}
              <div className="bg-gray-800 p-6 rounded-lg h-auto md:h-96">
                <h4 className="text-purple-400 text-[24px] md:text-[28px] mb-6 md:mb-10">Devops & Tools</h4>
                <p className="text-white text-xl">Neovim Linux</p>
                <p className="text-white text-xl">Docker Git/Github</p>
                <p className="text-white text-xl">AWS GCP</p>
              </div>

              {/* Databases */}
              <div className="bg-gray-800 p-6 rounded-lg h-auto md:h-96">
                <h4 className="text-purple-400 text-[24px] md:text-[28px] mb-12 md:mb-20">Databases</h4>
                <p className="text-white text-xl">SQLite PostgreSQL</p>
                <p className="text-white text-xl">Mongo Firebase</p>
                <p className="text-white text-xl">MYSQL Chromadb</p>
              </div>

              {/* Frameworks */}
              <div className="bg-gray-800 p-6 rounded-lg h-auto md:h-96">
                <h4 className="text-purple-400 text-[24px] md:text-[28px] mb-6 md:mb-10">Web Frameworks</h4>
                <p className="text-white text-xl">React/Nextjs Flask</p>
                <p className="text-white text-xl">Node/Expressjs Django</p>
                <p className="text-white text-xl">Tailwindcss</p>
                <p className="text-white text-xl">React-Native</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg h-auto md:h-96">
                <h4 className="text-purple-400 text-[24px] md:text-[28px] mb-12 md:mb-20">Security</h4>
                <p className="text-white text-xl">Hashcat Postman</p>
                <p className="text-white text-xl">Metasploit Wireshark</p>
                <p className="text-white text-xl">Rainbow-Crack Nmap</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="p-7 mt-32 md:mt-56 md:p-12">
        <div className="text-center">
          <h3 className="text-purple-400 text-[32px] md:text-[43px] mb-16 md:mb-32">
            <span className="text-white hidden md:inline">------------------- </span>#Projects
            <span className="text-white hidden md:inline"> -------------------</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Cold-email */}
            <div className="border-2 border-white p-10 sm:p-16 md:p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Cold-email-generator</h5>
              <p className="text-gray-400 text-xl mb-2">Automated outreach tool for communication</p>
              <p className="text-gray-400 text-lg mb-4">Langchain Python Streamlit</p>
              <div className="flex space-x-2">
                <a href="https://github.com/sharonadhitya/cold-email-generator" className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</a>
              </div>
            </div>

            {/* KKRr */}
            <div className="border-2 border-white p-10 sm:p-16 md:p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Karthikeyan Robotics Website</h5>
              <p className="text-gray-400 text-xl mb-2">Robotics Company Webpage</p>
              <p className="text-gray-400 text-lg mb-2">Next.js AWS Tailwindcss</p>
              <div className="flex space-x-2">
                <a href="https://kkr-robotics.vercel.app/" className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Live ↗</a>
                <a href="https://github.com/sharonadhitya/cold-email-generator" className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</a>
              </div>
            </div>

            {/* SIH */}
            <div className="border-2 border-white p-10 sm:p-16 md:p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">Water Reservoir Dashboard</h5>
              <p className="text-gray-400 text-xl mb-2">Reservoir management and prediction using ml</p>
              <p className="text-gray-400 text-lg mb-2">React Django LSTM GCP</p>
              <div className="flex space-x-2">
                <a href="https://github.com/Lokeshzz7/Water_Frontend_Andhra.git" className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</a>
              </div>
            </div>

            {/* DATA-DECK */}
            <div className="border-2 border-white p-10 sm:p-16 md:p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">PICASO-PHRASE</h5>
              <p className="text-gray-400 text-xl mb-2">Generates caption for medical images</p>
              <p className="text-gray-400 text-lg mb-2">LSTM NLPTLK ML</p>
              <div className="flex space-x-2">
                <a href='https://github.com/SpringBoard795/PicasoPhrase_Infosys_Internship_Nov2024/tree/Sharon_Adhitya' className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</a>
              </div>
            </div>

            {/* Chat-room */}
            <div className="border-2 border-white p-10 sm:p-16 md:p-20 rounded-lg">
              <h5 className="text-white text-2xl mb-2">CHAT-ROOM</h5>
              <p className="text-gray-400 text-xl mb-2">Message-encrypted webpage</p>
              <p className="text-gray-400 text-lg mb-2">Django SQL JavaScript</p>
              <div className="flex space-x-2">
                <a href='https://github.com/sharonadhitya/chat-rooms' className="bg-transparent border-2 border-purple-400 text-purple-400 px-2 py-1 text-xs hover:bg-purple-400 hover:text-white transition">Github ↗</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contacts" className="p-7 mt-32 md:mt-56 md:p-12">
        <div className="text-center mb-16 md:mb-32">
          <h3 className="text-purple-400 text-[32px] md:text-[43px] mb-10 md:mb-10">
            <span className="text-white hidden md:inline">------------------- </span>#Contact
            <span className="text-white hidden md:inline"> -------------------</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start">
          {/* Contact Text (Left Side) */}
          <div className="w-full md:w-1/2 p-4 md:pr-10 mb-8 md:mt-32">
            <p className="text-gray-400 text-xl md:text-2xl text-center">
              I'm interested in freelancing and company recruitment oppurtunities. However , if you any query or order request , feel free to contact me as I given my Contact-from and Mail-ID
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
      <hr className="w-full border-t-2 mt-10 md:mt-40 border-gray-300" />

      {/* Footer */}
      <footer className="bg-gray-900 p-4 text-center mt-2  md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Name and Email */}
          <div className="mb-3 md:mb-0">
            <p className="text-gray-400">
              <span className="text-purple-400">⏣</span> Sharon{' '}
              <a href="mailto:sasimanju1975@gmail.com" className="text-gray-400 hover:text-purple-400 block md:inline">
                sasimanju1975@gmail.com
              </a>
            </p>
          </div>

          {/* Right Side: Media */}
          <div className="flex flex-col md:flex-row items-center">
            <span className="text-gray-400 text-xl mb-4 md:mb-0 md:-ml-40 hidden">Media </span>
            <div className="flex space-x-4">
              <a href="https://github.com/sharonadhitya" className="text-gray-400 ml-2 hover:text-purple-400">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </a>
              <a href="https://www.linkedin.com/in/sharon-adhitya-34855a25a" className="text-gray-400 hover:text-purple-400">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />
              </a>
              <a href="https://discordapp.com/users/sharonadhitya_45921" className="text-gray-400 hover:text-purple-400">
                <FontAwesomeIcon icon={faDiscord} size="2x" color="#7289DA" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-10 md:mt-10">© Copyright 2025, Made by Sharon</p>
      </footer>
    </div>
  );
}

export default App;