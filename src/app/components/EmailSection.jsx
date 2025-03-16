"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (emailSubmitted) {
      const timer = setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [emailSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Email sent successfully!");
        setEmailSubmitted(true);
        formRef.current.reset();
      } else {
        throw new Error(resData.error || "Failed to send message.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 py-24 gap-4 relative">
      {/* Left Side */}
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Social Icons */}
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ManyaSh3" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={32} height={32} />
          </Link>
          <Link href="https://linkedin.com/in/manya-sharma2403" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={32} height={32} />
          </Link>
          <Link href="https://wa.me/9711422938" target="_blank">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div>
        <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="abc@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg py-2.5 px-5 w-full font-medium"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {emailSubmitted && (
            <motion.div
              className="mt-4 bg-green-500 w-60 text-white text-center text-sm font-semibold p-3 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              ✅ Email sent successfully!
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              className="mt-4 bg-red-500 w-60 text-white text-center text-sm font-semibold p-3 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {errorMessage}
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
