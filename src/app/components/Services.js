"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";

const services = [
  {
    name: "Mehendi Ceremony",
    image:
      "https://images.unsplash.com/photo-1730003873829-09b4b16444c1?auto=format&fit=crop&w=800&q=80",
    description:
      "Traditional henna ceremony with live music and cultural performances.",
    price: "From ₹1,50,000",
  },
  {
    name: "Wedding Photography",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    description:
      "Professional photography capturing every precious moment of your special day.",
    price: "From ₹2,00,000",
  },
  {
    name: "Wedding Catering",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    description:
      "Exquisite Indian cuisine with both traditional and fusion options.",
    price: "From ₹1,000 per plate",
  },
  {
    name: "Wedding Decor",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description:
      "Stunning floral arrangements and traditional Indian wedding decorations.",
    price: "From ₹3,00,000",
  },
];

const Services = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">Our Services</BrushTitle>
          <motion.p
            className="text-lg text-[#6b7280] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our comprehensive range of wedding services tailored to
            make your special day perfect
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay Gradient - Always visible but darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.name}
                </motion.h3>
                <p className="text-sm mb-2 text-white/90">
                  {service.description}
                </p>
                <motion.div
                  className="text-[#ee4c59] font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.price}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
