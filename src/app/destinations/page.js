"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

const categories = [
  "All",
  "Coastal",
  "Hills",
  "Heritage",
  "Lakeside",
  "Unique",
];

const destinations = [
  {
    id: "goa",
    name: "Goa",
    category: "Coastal",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop",
    description:
      "Sun-kissed beaches and Portuguese heritage make Goa perfect for dreamy beach weddings.",
    bestSeason: "October to March",
    startingPrice: "₹5,00,000",
    highlights: ["Beach Venues", "Luxury Resorts", "Water Sports", "Nightlife"],
  },
  {
    id: "udaipur",
    name: "Udaipur",
    category: "Lakeside",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
    description:
      "The City of Lakes offers stunning palace venues and romantic boat ceremonies.",
    bestSeason: "October to March",
    startingPrice: "₹8,00,000",
    highlights: [
      "Palace Venues",
      "Lake Views",
      "Heritage Hotels",
      "Cultural Experiences",
    ],
  },
  {
    id: "manali",
    name: "Manali",
    category: "Hills",
    image:
      "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop",
    description:
      "Snow-capped mountains and pine forests create a magical backdrop for your wedding.",
    bestSeason: "March to June, September to November",
    startingPrice: "₹6,00,000",
    highlights: [
      "Mountain Views",
      "Adventure Activities",
      "Luxury Resorts",
      "Local Culture",
    ],
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
    description:
      "The Blue City offers majestic forts and palaces for a royal wedding experience.",
    bestSeason: "October to March",
    startingPrice: "₹7,00,000",
    highlights: [
      "Fort Venues",
      "Heritage Hotels",
      "Cultural Events",
      "Local Cuisine",
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    category: "Unique",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2074&auto=format&fit=crop",
    description:
      "Backwaters and lush greenery create a unique setting for your special day.",
    bestSeason: "October to February",
    startingPrice: "₹6,50,000",
    highlights: [
      "Backwater Venues",
      "Ayurvedic Spas",
      "Houseboat Stays",
      "Local Traditions",
    ],
  },
];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter((dest) => dest.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Destinations"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Wedding Destinations
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover perfect venues across India for your dream wedding
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-[#ee4c59] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Link
              href={`/destinations/${destination.id}`}
              key={destination.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FaMapMarkerAlt />
                      <span>{destination.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>Best Season: {destination.bestSeason}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRupeeSign />
                      <span>From {destination.startingPrice}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-[#faf3f0] text-[#ee4c59] rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
