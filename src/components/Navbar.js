import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-lg font-bold">mAI</span>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex space-x-6 text-sm font-medium">
        <a href="#home" className="text-gray-800">
          Home
        </a>
        <a href="#projects" className="text-gray-800">
          Projects
        </a>
        <a href="#search" className="text-gray-800">
          Search Candidate
        </a>
        <a href="#reports" className="text-gray-800">
          Reports
        </a>
        <a href="#messages" className="text-black underline">
          Messages
        </a>
      </div>

      {/* Right Section: Toggle, Notification Bell, and User Avatar */}
      <div className="flex items-center space-x-4">
        {/* Toggle Button */}
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
          />
          <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
          <div
            className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
          ></div>
        </div>

        {/* Notification Bell */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 7 7.388 7 9v5.159c0 .538-.214 1.055-.595 1.436L5 17h5m5 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
      </div>
    </nav>
  );
}

export default Navbar;
