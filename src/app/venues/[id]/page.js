"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaMapMarkerAlt, FaUsers, FaStar, FaCheck } from "react-icons/fa";

// Venues data (same as in venues/page.js)
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
    longDescription:
      "Experience the epitome of luxury at The Leela Palace, Udaipur. This magnificent lakeside palace offers breathtaking views of Lake Pichola and the Aravalli Mountains. The venue combines traditional Rajasthani architecture with modern amenities, creating an unforgettable setting for your special day.",
    amenities: [
      "Luxury Accommodation",
      "Fine Dining Restaurants",
      "Spa & Wellness Center",
      "Swimming Pool",
      "Conference Facilities",
      "Valet Parking",
      "24/7 Room Service",
      "Wedding Planning Services",
    ],
    packages: [
      {
        name: "Royal Wedding Package",
        price: "₹15,00,000",
        includes: [
          "Venue for 3 days",
          "Accommodation for 50 guests",
          "Wedding ceremony setup",
          "Reception dinner",
          "Professional photography",
          "Wedding planner",
        ],
      },
      {
        name: "Grand Celebration Package",
        price: "₹20,00,000",
        includes: [
          "Venue for 5 days",
          "Accommodation for 100 guests",
          "Multiple ceremony venues",
          "Welcome dinner",
          "Wedding ceremony",
          "Reception dinner",
          "Professional photography & videography",
          "Wedding planner",
          "Entertainment",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  // ... other venues data
];

export default function VenueDetailsPage() {
  const params = useParams();
  const venue = venues.find((v) => v.id === parseInt(params.id));

  if (!venue) {
    return (
      <div className="min-h-screen bg-[#faf3f0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2d2b2c] mb-4">
            Venue Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The venue you're looking for doesn't exist.
          </p>
          <Link
            href="/venues"
            className="bg-[#ee4c59] text-white px-6 py-3 rounded-full hover:bg-[#ee4c59]/90 transition-colors"
          >
            Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {venue.name}
            </h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {venue.location}
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                {venue.capacity}
              </div>
              <div className="flex items-center">
                <FaStar className="mr-2 text-yellow-400" />
                {venue.rating}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#2d2b2c] mb-4">
                About the Venue
              </h2>
              <p className="text-gray-700 mb-6">{venue.longDescription}</p>

              <h3 className="text-xl font-bold text-[#2d2b2c] mb-4">
                Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {venue.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <FaCheck className="text-[#ee4c59] mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2d2b2c] mb-4">
                Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venue.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <FaCheck className="text-[#ee4c59] mr-2" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#2d2b2c] mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {venue.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${venue.name} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Packages & Contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-[#2d2b2c] mb-6">
                Wedding Packages
              </h2>
              <div className="space-y-6">
                {venue.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-[#2d2b2c] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#ee4c59] mb-4">
                      {pkg.price}
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <FaCheck className="text-[#ee4c59] mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-[#ee4c59] text-white px-6 py-3 rounded-full mt-4 hover:bg-[#ee4c59]/90 transition-colors">
                      Book This Package
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#2d2b2c] mb-4">
                  Contact Us
                </h3>
                <p className="text-gray-700 mb-4">
                  Interested in this venue? Get in touch with our wedding
                  planners for more information and availability.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#2d2b2c] text-white px-6 py-3 rounded-full text-center hover:bg-[#2d2b2c]/90 transition-colors"
                >
                  Contact Wedding Planner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
