import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setMessage("Email sent successfully!");
    setEmail(""); // Clear input field after sending
    setTimeout(() => setMessage(""), 2000); // Hide message after 2 seconds
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white p-10 rounded-lg"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="relative">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && (
              <button
                onClick={handleSend}
                className="absolute right-2 bottom-2 top-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            )}
          </div>
          {message && (
            <p className="text-green-400 text-center text-lg">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
