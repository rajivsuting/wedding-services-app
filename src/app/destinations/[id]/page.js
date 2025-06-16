"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCalendarAlt,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { destinations } from "@/app/data/data";

// Use the centralized destinations array
const destinationData = destinations.reduce((acc, destination) => {
  acc[destination.id] = destination;
  return acc;
}, {});

export default function DestinationPage({ params }) {
  const unwrappedParams = React.use(params);
  const destination = destinationData[unwrappedParams.id];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf3f0]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ee4c59] mb-4">
            Destination Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The destination you are looking for does not exist.
          </p>
          <Link href="/destinations">
            <button className="bg-[#ee4c59] text-white px-6 py-3 rounded-full hover:bg-[#ee4c59]/90 transition-colors">
              Back to Destinations
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src={destination.mainImage}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {destination.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${destination.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Budget Friendly Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">
            Budget Friendly
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {destination.budgetFriendly.map((item, index) => (
              <li key={index} className="text-[#6b7280]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Seasonality Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">
            Seasonality
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#171717]">
              Best Season: {destination.seasonality.best}
            </h3>
            <p className="text-[#6b7280] mb-4">
              {destination.seasonality.weather}
            </p>
            <h4 className="text-lg font-semibold mb-2 text-[#171717]">Tips:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {destination.seasonality.tips.map((tip, index) => (
                <li key={index} className="text-[#6b7280]">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Venues Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#171717]">
                    {venue.name}
                  </h3>
                  <p className="text-[#6b7280] mb-2">Type: {venue.type}</p>
                  <p className="text-[#6b7280] mb-2">
                    Capacity: {venue.capacity}
                  </p>
                  <p className="text-[#ee4c59] font-semibold">{venue.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#171717]">
                  {pkg.name}
                </h3>
                <p className="text-[#ee4c59] font-semibold mb-4">{pkg.price}</p>
                <h4 className="text-lg font-semibold mb-2 text-[#171717]">
                  Includes:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="text-[#6b7280]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#171717]">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#171717]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6b7280]">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-[#6b7280] mb-4">{testimonial.comment}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
