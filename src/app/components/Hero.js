"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const budgetLabels = [
  "1 Lakh",
  "2 Lakhs",
  "3 Lakhs",
  "4 Lakhs",
  "5 Lakhs",
  "6 Lakhs",
  "7 Lakhs",
  "8 Lakhs",
  "9 Lakhs",
  "10 Lakhs+",
];

const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    guests: "",
    budget: 1, // index for budgetLabels
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "range" ? Number(value) : value,
    }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 xl:pt-32">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0  bg-gradient-to-r from-black/90 via-black/30 to-black/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ee4c59]/10 to-transparent blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col xl:flex-row justify-between gap-8 xl:gap-12">
        <div className="w-full xl:w-[55%] text-left">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl xl:text-5xl font-bold text-white mb-4 xl:mb-5 tracking-tight leading-tight"
          >
            Start Planning Your Dream Destination Wedding
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xl:text-xl text-white/90 mb-6 xl:mb-6 max-w-xl xl:max-w-2xl font-light"
          >
            We plan picture-perfect destination weddings that are
            budget-friendly, beautiful, and deeply personal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-3 xl:gap-6 items-start mb-6 xl:mb-16"
          >
            <Link href="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ee4c59] cursor-pointer text-white px-6 xl:px-8 py-2 xl:py-2 rounded-full text-xs xl:text-lg font-semibold hover:bg-[#d63d4a] transition-all shadow-lg hover:shadow-xl hover:shadow-[#ee4c59]/20"
              >
                Explore Destinations
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4 max-w-2xl xl:max-w-3xl"
          >
            <div className="bg-white/5 backdrop-blur-sm p-2 xl:p-4 rounded-lg xl:rounded-xl border border-white/10">
              <div className="flex items-center gap-2 xl:gap-3 mb-1 xl:mb-2">
                <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-[#ee4c59]/20 flex items-center justify-center">
                  <svg
                    className="w-2 h-2 xl:w-3 xl:h-3 text-[#ee4c59]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-[8px] xl:text-sm text-white font-semibold">
                  Affordable Packages
                </h3>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-2 xl:p-4 rounded-lg xl:rounded-xl border border-white/10">
              <div className="flex items-center gap-2 xl:gap-3 mb-1 xl:mb-2">
                <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-[#ee4c59]/20 flex items-center justify-center">
                  <svg
                    className="w-2 h-2 xl:w-3 xl:h-3 text-[#ee4c59]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-[8px] xl:text-sm text-white font-semibold">
                  Custom-Tailored Planning
                </h3>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-2 xl:p-4 rounded-lg xl:rounded-xl border border-white/10">
              <div className="flex items-center gap-2 xl:gap-3 mb-1 xl:mb-2">
                <div className="w-4 h-4 xl:w-6 xl:h-6 rounded-full bg-[#ee4c59]/20 flex items-center justify-center">
                  <svg
                    className="w-2 h-2 xl:w-3 xl:h-3 text-[#ee4c59]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-[8px] xl:text-sm text-white font-semibold">
                  Top Locations on a Budget
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full xl:w-[28%] bg-white/20 backdrop-blur-xl p-2 xl:p-6 rounded-lg xl:rounded-2xl shadow-2xl max-w-[320px] xl:max-w-[500px] mx-auto xl:mx-0 border border-white/30 relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-12 xl:w-24 h-12 xl:h-24 bg-[#ee4c59]/20 rounded-full blur-2xl z-0" />
          <h2 className="text-sm xl:text-xl font-bold text-white mb-2 xl:mb-4 relative z-10">
            Let's Plan Your Wedding
          </h2>
          <form onSubmit={handleSubmit} className="relative z-10">
            {step === 1 ? (
              <>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Select Prefered Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    placeholder="e.g. Goa, Udaipur, Kerala..."
                    required
                  />
                </div>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    required
                  />
                </div>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Expected Number of Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    placeholder="e.g. 100"
                    required
                  />
                </div>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Estimated Overall Budget
                  </label>
                  <div className="flex items-center gap-1 xl:gap-2">
                    <span className="text-[#ee4c59] font-semibold min-w-[50px] xl:min-w-[70px] text-[8px] xl:text-sm">
                      {budgetLabels[formData.budget]}
                    </span>
                    <input
                      type="range"
                      name="budget"
                      min={0}
                      max={budgetLabels.length - 1}
                      step={1}
                      value={formData.budget}
                      onChange={handleChange}
                      className="flex-1 accent-[#ee4c59] h-1 xl:h-1.5 bg-white/30 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#ee4c59] transition"
                    />
                  </div>
                  <div className="flex justify-between text-[6px] xl:text-xs text-white/70 mt-0.5 xl:mt-1 font-light">
                    <span>{budgetLabels[0]}</span>
                    <span>{budgetLabels[budgetLabels.length - 1]}</span>
                  </div>
                </div>
                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.04 }}
                  className="w-full bg-[#ee4c59] text-white py-1 xl:py-2 rounded-md xl:rounded-lg text-[8px] xl:text-sm font-semibold shadow-lg hover:bg-[#d63d4a] transition-colors mt-1 xl:mt-2"
                >
                  Next
                </motion.button>
              </>
            ) : (
              <>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    required
                  />
                </div>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    required
                  />
                </div>
                <div className="mb-2 xl:mb-4">
                  <label className="block text-white mb-0.5 xl:mb-1 text-[8px] xl:text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-1 xl:p-2 rounded-md xl:rounded-lg bg-white/30 text-white border border-white/40 focus:ring-2 focus:ring-[#ee4c59] focus:outline-none placeholder-white/60 transition font-light text-[8px] xl:text-sm"
                    required
                  />
                </div>
                <div className="flex gap-1 xl:gap-2">
                  <motion.button
                    type="button"
                    onClick={handleBack}
                    whileHover={{ scale: 1.04 }}
                    className="w-1/2 bg-gray-500 text-white py-1 xl:py-2 rounded-md xl:rounded-lg text-[8px] xl:text-sm font-semibold hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    className="w-1/2 bg-[#ee4c59] text-white py-1 xl:py-2 rounded-md xl:rounded-lg text-[8px] xl:text-sm font-semibold shadow-lg hover:bg-[#d63d4a] transition-colors"
                  >
                    Submit
                  </motion.button>
                </div>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
