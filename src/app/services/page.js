"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCalculator,
  FaBuilding,
  FaHandshake,
  FaPalette,
  FaUsers,
  FaClock,
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Budget Planning",
    icon: <FaCalculator className="text-4xl text-[#ee4c59]" />,
    description:
      "Expert financial planning to maximize your wedding budget while maintaining your dream vision.",
    budgetAdvantages: [
      "Customized budget allocation",
      "Vendor price negotiation",
      "Cost-saving recommendations",
      "Payment schedule planning",
    ],
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Venue Sourcing",
    icon: <FaBuilding className="text-4xl text-[#ee4c59]" />,
    description:
      "Access to exclusive venues and special rates through our extensive network of partners.",
    budgetAdvantages: [
      "Exclusive venue discounts",
      "Off-season special rates",
      "Package deals with venues",
      "Hidden gem locations",
    ],
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vendor Management",
    icon: <FaHandshake className="text-4xl text-[#ee4c59]" />,
    description:
      "Curated selection of trusted vendors with competitive pricing and quality assurance.",
    budgetAdvantages: [
      "Bulk booking discounts",
      "Vendor price matching",
      "Quality-cost optimization",
      "Long-term partner rates",
    ],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Decor & Design",
    icon: <FaPalette className="text-4xl text-[#ee4c59]" />,
    description:
      "Creative decor solutions that transform spaces while staying within budget.",
    budgetAdvantages: [
      "DIY-friendly options",
      "Rental vs. purchase guidance",
      "Seasonal decor savings",
      "Multi-purpose decor",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Guest Logistics",
    icon: <FaUsers className="text-4xl text-[#ee4c59]" />,
    description:
      "Efficient guest management and accommodation planning to optimize costs.",
    budgetAdvantages: [
      "Group booking discounts",
      "Transportation optimization",
      "Accommodation deals",
      "Guest count management",
    ],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Timeline Management",
    icon: <FaClock className="text-4xl text-[#ee4c59]" />,
    description:
      "Strategic planning to ensure smooth execution and prevent costly last-minute changes.",
    budgetAdvantages: [
      "Early booking discounts",
      "Seasonal timing savings",
      "Efficient resource allocation",
      "Contingency planning",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
];

const moneySavingTips = [
  {
    title: "Early Planning",
    description:
      "Book 12-18 months in advance for the best rates and availability",
    icon: <FaCheckCircle className="text-2xl text-[#ee4c59]" />,
  },
  {
    title: "Off-Season Savings",
    description: "Up to 30% savings by choosing off-peak wedding dates",
    icon: <FaCheckCircle className="text-2xl text-[#ee4c59]" />,
  },
  {
    title: "Package Deals",
    description:
      "Bundled services can save up to 25% compared to individual bookings",
    icon: <FaCheckCircle className="text-2xl text-[#ee4c59]" />,
  },
  {
    title: "Vendor Negotiation",
    description:
      "Our expert negotiators secure the best possible rates for you",
    icon: <FaCheckCircle className="text-2xl text-[#ee4c59]" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive wedding planning services designed to make your
              dream wedding a reality
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-[#2d2b2c]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#ee4c59] flex items-center gap-2">
                    <FaRupeeSign />
                    Budget Advantages
                  </h4>
                  <ul className="space-y-2">
                    {service.budgetAdvantages.map((advantage, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FaCheckCircle className="text-[#ee4c59]" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Save You Money Section */}
        <div className="mt-20 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-[#2d2b2c] text-center mb-8">
            How We Save You Money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moneySavingTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-[#2d2b2c] mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
