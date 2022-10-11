/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://asset.cloudinary.com'],
  },
}

module.exports = nextConfig
