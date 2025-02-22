/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
  // Add any other Next.js config options here
}

module.exports = nextConfig 