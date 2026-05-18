/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img01.ztat.net",
        pathname: "/**",
      },
    ],
  },

  allowedDevOrigins: [
    "http://192.168.1.209:3000",
  ],
};

module.exports = nextConfig;