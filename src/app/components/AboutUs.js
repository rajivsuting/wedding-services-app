"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & Lead Planner",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    description:
      "10+ years of experience in creating dream weddings within budget",
  },
  {
    name: "Rahul Mehta",
    role: "Vendor Relations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description: "Expert in negotiating the best deals with local vendors",
  },
  {
    name: "Ananya Patel",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    description: "Specializes in creating stunning decor on a budget",
  },
];

const differentiators = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Budget Masters",
    description:
      "Deep understanding of cost-saving strategies and value optimization",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Local Connections",
    description: "Exclusive access to vetted, affordable vendors across India",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Transparency",
    description:
      "No hidden fees, clear pricing models, and honest communication",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Stress-Free Process",
    description: "We manage the complexities, you enjoy the journey",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">
            Making Destination Wedding Dreams Attainable
          </BrushTitle>
          <motion.p
            className="text-lg text-[var(--gray)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We saw countless couples dreaming of destination weddings but shying
            away due to perceived costs. Our mission is to demystify the process
            and prove that an unforgettable, unique celebration is possible, no
            matter your budget.
          </motion.p>
        </motion.div>

        {/* Why Trust Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-light)]"
            >
              <div className="text-[var(--primary)] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--dark)]">
                {item.title}
              </h3>
              <p className="text-[var(--gray)]">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Team */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-[var(--dark)]">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[var(--gray-light)]"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-[var(--dark)]">
                    {member.name}
                  </h3>
                  <p className="text-[var(--primary)] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-[var(--gray)]">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-[var(--primary)]/5 rounded-2xl p-8 md:p-12 text-center border border-[var(--primary)]/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--dark)]">
            Our Philosophy
          </h2>
          <p className="text-lg text-[var(--gray)] max-w-3xl mx-auto">
            We believe in transparent pricing, ingenious solutions, and never
            compromising on the magic. We're not just planners; we're budget
            strategists, creative problem-solvers, and your dedicated allies in
            achieving your vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
