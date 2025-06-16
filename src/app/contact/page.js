"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero/Header Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's start planning your dream wedding together
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-[#2d2b2c] mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="Premium (15L+)">Premium (15L+)</option>
                  <option value="Luxury (10L-15L)">Luxury (10L-15L)</option>
                  <option value="Standard (5L-10L)">Standard (5L-10L)</option>
                  <option value="Budget (Under 5L)">Budget (Under 5L)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Guest Count
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ee4c59] text-white py-3 rounded-lg font-semibold hover:bg-[#d63d4a] transition-colors"
              >
                Start Planning Now
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Direct Contact Info */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-[#2d2b2c] mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-[#ee4c59] text-xl" />
                  <div>
                    <p className="text-sm text-[#2d2b2c]">Phone</p>
                    <p className="font-medium text-[#2d2b2c]">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#ee4c59] text-xl" />
                  <div>
                    <p className="text-sm text-[#2d2b2c]">Email</p>
                    <p className="font-medium text-[#2d2b2c]">
                      info@weddingplanner.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[#ee4c59] text-xl" />
                  <div>
                    <p className="text-sm text-[#2d2b2c]">Office</p>
                    <p className="font-medium text-[#2d2b2c]">
                      123 Wedding Street, Mumbai, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#2d2b2c] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#faf3f0] flex items-center justify-center text-[#ee4c59] hover:bg-[#ee4c59] hover:text-white transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#faf3f0] flex items-center justify-center text-[#ee4c59] hover:bg-[#ee4c59] hover:text-white transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#faf3f0] flex items-center justify-center text-[#ee4c59] hover:bg-[#ee4c59] hover:text-white transition-colors"
                  >
                    <FaPinterestP />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#faf3f0] flex items-center justify-center text-[#ee4c59] hover:bg-[#ee4c59] hover:text-white transition-colors"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.002714822614!2d72.8282149!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-18 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}
