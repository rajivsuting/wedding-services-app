"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LoadingState from "../components/LoadingState";

// Gallery categories
const categories = [
  "All",
  "Venues",
  "Decorations",
  "Catering",
  "Photography",
  "Entertainment",
];

// Destinations
const destinations = ["All", "Udaipur", "Goa", "Shimla", "Kerala", "Jaipur"];

// Budget tiers
const budgetTiers = [
  "All",
  "Premium (15L+)",
  "Luxury (10L-15L)",
  "Standard (5L-10L)",
  "Budget (Under 5L)",
];

// Package types
const packageTypes = [
  "All",
  "Full Wedding",
  "Venue Only",
  "Decoration",
  "Photography",
];

// Real wedding galleries
const realWeddings = [
  {
    id: 1,
    couple: "Priya & Rahul",
    location: "Udaipur",
    budget: "Premium (15L+)",
    package: "Full Wedding",
    story:
      "Our dream destination wedding at The Leela Palace was everything we imagined and more. The team made our 3-day celebration seamless and magical.",
    quote:
      "The attention to detail and personalized service made our wedding truly special. Worth every penny!",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        alt: "Priya & Rahul's Wedding Ceremony",
        category: "Venues",
        title: "The Leela Palace",
        description: "A stunning lakeside palace with panoramic views",
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        alt: "Wedding Reception Setup",
        category: "Decorations",
        title: "Reception Setup",
        description: "Elegant reception decoration with floral arrangements",
      },
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
        alt: "Couple's First Dance",
        category: "Entertainment",
        title: "First Dance",
        description: "Magical moments captured during the celebration",
      },
    ],
  },
  {
    id: 2,
    couple: "Ananya & Vikram",
    location: "Goa",
    budget: "Luxury (10L-15L)",
    package: "Full Wedding",
    story:
      "A beach wedding in Goa was always our dream. The sunset ceremony and beachside reception created the perfect romantic atmosphere.",
    quote:
      "The team's expertise in handling both traditional and modern elements made our wedding unique.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
        alt: "Beach Wedding Ceremony",
        category: "Venues",
        title: "Taj Exotica Resort",
        description: "Beachfront luxury with Portuguese architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
        alt: "Reception Decoration",
        category: "Decorations",
        title: "Beachside Reception",
        description: "Romantic beachside setup with elegant lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        alt: "Wedding Celebration",
        category: "Entertainment",
        title: "Beach Party",
        description: "Unforgettable celebration under the stars",
      },
    ],
  },
  {
    id: 3,
    couple: "Meera & Arjun",
    location: "Shimla",
    budget: "Standard (5L-10L)",
    package: "Venue Only",
    story:
      "Our mountain wedding in Shimla was intimate and beautiful. The snow-capped peaks provided a stunning backdrop for our ceremony.",
    quote:
      "The venue was perfect, and the team helped us stay within our budget while creating a magical experience.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
        alt: "Mountain Wedding Setup",
        category: "Venues",
        title: "Mountain Resort",
        description: "Scenic mountain venue with panoramic views",
      },
      {
        src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
        alt: "Wedding Ceremony",
        category: "Decorations",
        title: "Mountain Ceremony",
        description: "Intimate ceremony with natural beauty",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        alt: "Reception Celebration",
        category: "Entertainment",
        title: "Mountain Celebration",
        description: "Cozy celebration in the mountains",
      },
    ],
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedWedding, setSelectedWedding] = useState(null);

  // Get all images from all weddings
  const allImages = realWeddings.flatMap((wedding) =>
    wedding.images.map((image) => ({
      ...image,
      wedding: wedding,
    }))
  );

  // Filter images based on selected criteria
  const filteredImages = allImages.filter((image) => {
    if (selectedCategory !== "All" && image.category !== selectedCategory)
      return false;
    if (
      selectedDestination !== "All" &&
      image.wedding.location !== selectedDestination
    )
      return false;
    if (selectedBudget !== "All" && image.wedding.budget !== selectedBudget)
      return false;
    if (selectedPackage !== "All" && image.wedding.package !== selectedPackage)
      return false;
    return true;
  });

  // Handle image click
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setSelectedWedding(filteredImages[index].wedding);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero/Header Section */}
      <div className="relative h-[40vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our collection of stunning wedding venues, decorations,
              and services
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-[#ee4c59] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((destination) => (
              <button
                key={destination}
                onClick={() => setSelectedDestination(destination)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedDestination === destination
                    ? "bg-[#ee4c59] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {destination}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {budgetTiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedBudget(tier)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedBudget === tier
                    ? "bg-[#ee4c59] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {packageTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPackage(type)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedPackage === type
                    ? "bg-[#ee4c59] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.wedding.id}-${index}`}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                    <p className="text-sm text-white/80 mt-2">
                      {image.wedding.couple}'s Wedding
                    </p>
                    <p className="text-sm text-white/80">
                      {image.wedding.budget} • {image.wedding.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredImages.map((image) => ({
          src: image.src,
          alt: image.alt,
          title: `${image.wedding.couple}'s Wedding - ${image.title}`,
          description: (
            <div>
              <p>{image.description}</p>
              <p className="mt-2 text-sm text-gray-600">
                {image.wedding.story}
              </p>
              <p className="mt-2 italic text-sm text-gray-600">
                "{image.wedding.quote}"
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Budget: {image.wedding.budget} • Package:{" "}
                {image.wedding.package}
              </p>
            </div>
          ),
        }))}
        index={selectedImageIndex}
      />
    </div>
  );
}
