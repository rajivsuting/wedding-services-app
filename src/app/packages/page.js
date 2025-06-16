"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Image from "next/image";

const packages = [
  {
    name: "Budget",
    price: "₹2,99,000",
    summary: "Essential wedding services for intimate celebrations.",
    inclusions: [
      "Venue Sourcing",
      "Basic Decor",
      "Vendor Coordination",
      "Budget Planning",
      "Timeline Management",
    ],
    exclusions: [
      "Premium Decor",
      "Luxury Accommodation",
      "Celebrity Entertainment",
      "Destination Logistics",
    ],
  },
  {
    name: "Standard",
    price: "₹5,99,000",
    summary: "Balanced package for mid-sized weddings with extra features.",
    inclusions: [
      "Venue Sourcing",
      "Enhanced Decor",
      "Vendor Management",
      "Guest Logistics",
      "Photography & Videography",
      "Budget Planning",
      "Timeline Management",
    ],
    exclusions: [
      "Luxury Accommodation",
      "Celebrity Entertainment",
      "Exclusive Venues",
    ],
  },
  {
    name: "Luxury",
    price: "₹10,99,000",
    summary: "Premium experience with luxury touches and more inclusions.",
    inclusions: [
      "Premium Venue Sourcing",
      "Designer Decor",
      "Full Vendor Management",
      "Guest Logistics & Hospitality",
      "Luxury Accommodation",
      "Entertainment",
      "Photography & Videography",
      "Budget Planning",
      "Timeline Management",
    ],
    exclusions: ["Celebrity Entertainment", "International Destinations"],
  },
  {
    name: "Premium",
    price: "₹15,99,000+",
    summary: "All-inclusive, bespoke weddings with every detail managed.",
    inclusions: [
      "Exclusive Venue Sourcing",
      "Signature Decor & Design",
      "Full Vendor & Guest Management",
      "Luxury Accommodation",
      "Celebrity Entertainment",
      "International Destinations",
      "Personal Wedding Planner",
      "All Services Included",
    ],
    exclusions: ["None (All-inclusive)"],
  },
];

const comparisonFeatures = [
  "Venue Sourcing",
  "Decor & Design",
  "Vendor Management",
  "Guest Logistics",
  "Accommodation",
  "Entertainment",
  "Photography & Videography",
  "Personal Wedding Planner",
  "International Destinations",
];

const featureAvailability = {
  Budget: [true, true, true, false, false, false, false, false, false],
  Standard: [true, true, true, true, false, false, true, false, false],
  Luxury: [true, true, true, true, true, true, true, false, false],
  Premium: [true, true, true, true, true, true, true, true, true],
};

export default function PackagesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Packages"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Packages & Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transparent, tiered packages to fit every dream and every budget
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          See exactly what's included and compare at a glance. Choose the
          perfect package for your special day.
        </p>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <h2 className="text-2xl font-bold text-[#ee4c59] mb-2">
                {pkg.name}
              </h2>
              <div className="text-3xl font-bold text-[#2d2b2c] mb-2">
                {pkg.price}
              </div>
              <p className="text-gray-600 mb-4">{pkg.summary}</p>
              <button
                className="btn-secondary mt-auto flex items-center justify-center gap-2"
                onClick={() => handleAccordion(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`details-${idx}`}
              >
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                View Details
              </button>
              {/* Accordion Details */}
              {openIndex === idx && (
                <div
                  id={`details-${idx}`}
                  className="mt-6 animate-fadeIn border-t pt-4"
                >
                  <div className="mb-4">
                    <h3 className="font-semibold text-[#2d2b2c] mb-2">
                      Inclusions
                    </h3>
                    <ul className="space-y-1">
                      {pkg.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-[#ee4c59]" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d2b2c] mb-2">
                      Exclusions
                    </h3>
                    <ul className="space-y-1">
                      {pkg.exclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <FaTimesCircle className="text-gray-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-md p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold text-[#2d2b2c] mb-6 text-center">
            Compare Packages
          </h2>
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 border-b"></th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.name}
                    className="text-center py-2 px-4 border-b text-[#ee4c59]"
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, i) => (
                <tr key={feature} className="border-b last:border-b-0">
                  <td className="py-2 px-4 font-medium text-[#2d2b2c]">
                    {feature}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="text-center py-2 px-4">
                      {featureAvailability[pkg.name][i] ? (
                        <FaCheckCircle className="inline text-[#ee4c59]" />
                      ) : (
                        <FaTimesCircle className="inline text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
