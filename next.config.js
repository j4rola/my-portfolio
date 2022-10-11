/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://asset.cloudinary.com/dcqmxufnx/4be0cceab1db347e7991fe849665d0fe'],
  },
}

module.exports = nextConfig
