"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaHeart, FaStar } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf3f0]">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Creating Unforgettable Wedding Experiences Since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2d2b2c] mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2010, Wedding Services has been at the forefront of
            transforming wedding dreams into reality. What started as a small
            team of passionate wedding planners has grown into one of India's
            most trusted wedding service providers. We believe that every couple
            deserves a wedding that reflects their unique love story, and we're
            here to make that happen.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 text-center shadow-md"
          >
            <FaAward className="w-12 h-12 text-[#ee4c59] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#2d2b2c] mb-2">1000+</h3>
            <p className="text-gray-600">Weddings Planned</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-md"
          >
            <FaUsers className="w-12 h-12 text-[#ee4c59] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#2d2b2c] mb-2">50+</h3>
            <p className="text-gray-600">Expert Planners</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 text-center shadow-md"
          >
            <FaHeart className="w-12 h-12 text-[#ee4c59] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#2d2b2c] mb-2">98%</h3>
            <p className="text-gray-600">Happy Couples</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-8 text-center shadow-md"
          >
            <FaStar className="w-12 h-12 text-[#ee4c59] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#2d2b2c] mb-2">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#2d2b2c] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To create extraordinary wedding experiences that exceed
              expectations and create lasting memories. We strive to make the
              wedding planning process enjoyable and stress-free for every
              couple.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#2d2b2c] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the most trusted and innovative wedding service provider in
              India, known for our attention to detail, personalized service,
              and commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2d2b2c] text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
                bio: "With over 15 years of experience in the wedding industry, Priya leads our team with passion and expertise.",
              },
              {
                name: "Rahul Patel",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
                bio: "Rahul brings creativity and innovation to every wedding we plan, ensuring unique and memorable experiences.",
              },
              {
                name: "Ananya Singh",
                role: "Head of Operations",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
                bio: "Ananya ensures smooth execution of every wedding, managing our team and vendor relationships.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2d2b2c] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#ee4c59] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-16">
          <h2 className="text-3xl font-bold text-[#2d2b2c] text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Service",
                description:
                  "We tailor our services to match your unique vision and preferences.",
              },
              {
                title: "Expert Team",
                description:
                  "Our experienced planners ensure flawless execution of your wedding.",
              },
              {
                title: "Quality Vendors",
                description:
                  "We work with the best vendors to deliver exceptional quality.",
              },
              {
                title: "Stress-Free Planning",
                description:
                  "We handle all the details so you can enjoy your special day.",
              },
              {
                title: "Budget Management",
                description:
                  "We help you make the most of your wedding budget.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is always available to assist you throughout the process.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-[#2d2b2c] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2d2b2c] mb-6">
            Ready to Start Your Wedding Journey?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you create the wedding of your dreams. Contact us today
            for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#ee4c59] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#ee4c59]/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
