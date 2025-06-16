"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import Link from "next/link";

// Separate the venue card into its own component for better code splitting
function VenueCard({ venue }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/venues/${venue.id}`}>
        <div className="relative h-64">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={venue.id === 1}
            loading={venue.id === 1 ? "eager" : "lazy"}
          />
          <div className="absolute top-4 right-4 bg-[#ee4c59] text-white px-4 py-2 rounded-full text-sm font-medium">
            {venue.price}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{venue.location}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{venue.name}</h3>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-gray-600">{venue.rating}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{venue.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {venue.features.map((feature, index) => (
              <span
                key={index}
                className="bg-[#faf3f0] text-[#ee4c59] px-3 py-1 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>{venue.capacity}</span>
            </div>
            <button className="bg-[#ee4c59] text-white px-6 py-2 rounded-full hover:bg-[#ee4c59]/90 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Loading component for Suspense
function VenuesLoading() {
  return (
    <div className="min-h-screen bg-[#faf3f0] animate-pulse">
      <div className="h-[60vh] bg-gray-200" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 bg-gray-200" />
              <div className="p-6">
                <div className="h-8 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-24 bg-gray-200 rounded-full" />
                  <div className="h-6 w-24 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Venues data
const venues = [
  {
    id: 1,
    name: "The Leela Palace",
    location: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    description:
      "A stunning lakeside palace with panoramic views of Lake Pichola",
    price: "Starting from ₹15,00,000",
    capacity: "Up to 500 guests",
    rating: "4.9",
    features: ["Lakeside Venue", "Palace Architecture", "Luxury Accommodation"],
  },
  {
    id: 2,
    name: "Taj Exotica Resort & Spa",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description:
      "Beachfront luxury with Portuguese architecture and lush gardens",
    price: "Starting from ₹12,00,000",
    capacity: "Up to 400 guests",
    rating: "4.8",
    features: ["Beach Access", "Spa Services", "Garden Venues"],
  },
  {
    id: 3,
    name: "Wildflower Hall",
    location: "Shimla",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    description: "Mountain retreat with breathtaking views of the Himalayas",
    price: "Starting from ₹10,00,000",
    capacity: "Up to 200 guests",
    rating: "4.7",
    features: ["Mountain Views", "Indoor Venues", "Adventure Activities"],
  },
  {
    id: 4,
    name: "The Oberoi Amarvilas",
    location: "Agra",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury resort with direct views of the Taj Mahal",
    price: "Starting from ₹18,00,000",
    capacity: "Up to 300 guests",
    rating: "4.9",
    features: ["Taj Mahal View", "Mughal Gardens", "Fine Dining"],
  },
  {
    id: 5,
    name: "Kumarakom Lake Resort",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    description: "Backwater paradise with traditional Kerala architecture",
    price: "Starting from ₹8,00,000",
    capacity: "Up to 250 guests",
    rating: "4.6",
    features: ["Backwater Views", "Ayurveda Spa", "Traditional Architecture"],
  },
  {
    id: 6,
    name: "The Tamara Coorg",
    location: "Coorg",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    description: "Coffee plantation resort with panoramic valley views",
    price: "Starting from ₹9,00,000",
    capacity: "Up to 150 guests",
    rating: "4.7",
    features: ["Coffee Estate", "Valley Views", "Organic Farm"],
  },
];

export default function VenuesPage() {
  // State for filters
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    priceRange: "",
    capacity: "",
    venueTypes: [],
  });

  // Filter venues based on current filters
  const filteredVenues = venues.filter((venue) => {
    // Search filter
    if (
      filters.search &&
      !venue.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Location filter
    if (
      filters.location &&
      venue.location.toLowerCase() !== filters.location.toLowerCase()
    ) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      const venuePrice = parseInt(venue.price.replace(/[^0-9]/g, ""));
      if (max) {
        if (venuePrice < min * 100000 || venuePrice > max * 100000)
          return false;
      } else {
        if (venuePrice < min * 100000) return false;
      }
    }

    // Capacity filter
    if (filters.capacity) {
      const [min, max] = filters.capacity.split("-").map(Number);
      const venueCapacity = parseInt(venue.capacity.replace(/[^0-9]/g, ""));
      if (max) {
        if (venueCapacity < min || venueCapacity > max) return false;
      } else {
        if (venueCapacity < min) return false;
      }
    }

    // Venue type filter
    if (filters.venueTypes.length > 0) {
      const venueType = venue.features[0].toLowerCase();
      if (
        !filters.venueTypes.some((type) =>
          venueType.includes(type.toLowerCase())
        )
      ) {
        return false;
      }
    }

    return true;
  });

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Handle venue type checkbox changes
  const handleVenueTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      venueTypes: prev.venueTypes.includes(type)
        ? prev.venueTypes.filter((t) => t !== type)
        : [...prev.venueTypes, type],
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      search: "",
      location: "",
      priceRange: "",
      capacity: "",
      venueTypes: [],
    });
  };

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Venues"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Dream Wedding Venues
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover India's most enchanting venues for your special day
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-[#2d2b2c] mb-6">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d2b2c] mb-2">
                  Search Venues
                </label>
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59] text-[#2d2b2c] placeholder-gray-500"
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                />
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d2b2c] mb-2">
                  Location
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59] text-[#2d2b2c]"
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                >
                  <option value="">All Locations</option>
                  <option value="udaipur">Udaipur</option>
                  <option value="goa">Goa</option>
                  <option value="shimla">Shimla</option>
                  <option value="agra">Agra</option>
                  <option value="kerala">Kerala</option>
                  <option value="coorg">Coorg</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d2b2c] mb-2">
                  Price Range
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59] text-[#2d2b2c]"
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                >
                  <option value="">All Prices</option>
                  <option value="0-5">Under 5 Lakhs</option>
                  <option value="5-10">5-10 Lakhs</option>
                  <option value="10-15">10-15 Lakhs</option>
                  <option value="15+">15+ Lakhs</option>
                </select>
              </div>

              {/* Capacity Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d2b2c] mb-2">
                  Capacity
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4c59] text-[#2d2b2c]"
                  value={filters.capacity}
                  onChange={(e) =>
                    handleFilterChange("capacity", e.target.value)
                  }
                >
                  <option value="">Any Capacity</option>
                  <option value="0-100">Up to 100 guests</option>
                  <option value="100-300">100-300 guests</option>
                  <option value="300-500">300-500 guests</option>
                  <option value="500+">500+ guests</option>
                </select>
              </div>

              {/* Venue Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d2b2c] mb-2">
                  Venue Type
                </label>
                <div className="space-y-2">
                  {[
                    "Palace",
                    "Beach Resort",
                    "Mountain Resort",
                    "Garden",
                    "Hotel",
                  ].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#ee4c59] focus:ring-[#ee4c59]"
                        checked={filters.venueTypes.includes(type)}
                        onChange={() => handleVenueTypeChange(type)}
                      />
                      <span className="ml-2 text-[#2d2b2c]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button className="w-full btn-secondary" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          </div>

          {/* Venues Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#2d2b2c]">
                Featured Venues ({filteredVenues.length})
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <Suspense fallback={<VenuesLoading />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVenues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
