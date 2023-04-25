/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://asset.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
