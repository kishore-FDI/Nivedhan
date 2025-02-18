import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.jdmagicbox.com','assets.aceternity.com'],
  },
};

export default nextConfig;
