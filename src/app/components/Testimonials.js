"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Mumbai, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    text: "Our wedding at the Taj Mahal Palace was absolutely magical. The team handled everything perfectly, from the mehendi ceremony to the grand reception.",
  },
  {
    name: "Ananya & Vikram",
    location: "Delhi, NCR",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    text: "The attention to detail was incredible. They made our traditional ceremony feel modern while maintaining all the cultural elements we wanted.",
  },
  {
    name: "Neha & Arjun",
    location: "Bangalore, Karnataka",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    text: "From the decor to the catering, everything was perfect. Our guests still talk about how beautiful the venue looked and how delicious the food was.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[var(--secondary)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        <motion.div
          className="absolute top-10 left-10 text-[#ee4c59] opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ee4c59]/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">Happy Couples</BrushTitle>
          <motion.p
            className="text-lg text-[#6b7280] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hear from couples who made their dream wedding a reality with us
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white p-8 rounded-lg relative"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#ee4c59]/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#2d2b2c]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#ee4c59]">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-[#6b7280] italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
