/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["www.sloshout.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
