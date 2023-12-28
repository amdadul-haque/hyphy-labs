"use client";

import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactUs = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          name: name,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log(result.message);
      } else {
        // Handle error (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <motion.div
      id="kontakt"
      className="bg-white text-black w-full min-h-[90vh] mx-auto flex items-center flex-col gap-20 py-12 lg:px-0 sm:px-12 px-6"
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: .5 }}
    >
      <h2 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl uppercase'>Contact Us</h2>
      <div className="text-black w-full max-w-[1000px]">
        <form onSubmit={handleButtonClick}>
          <div className="flex items-center gap-8 lg:flex-row flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-[16px] sm:text-[20px]   px-2 py-3 border border-black outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-2 py-3 text-[16px] sm:text-[20px]   border border-black  outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              id="message"
              cols="30"
              placeholder="Message"
              className="w-full mt-8 text-[16px] sm:text-[20px]   p-2 h-[220px] border border-black  outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-8">
            <button type='submit' disabled={isLoading} className="uppercase sm:py-4 px-4 py-2 sm:px-8 border border-gray-600 hover:bg-black hover:text-white font-bold transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
