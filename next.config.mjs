/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      forceSwcTransforms: true, // Force using SWC instead of Babel
    },
  }
  
  module.exports = nextConfig