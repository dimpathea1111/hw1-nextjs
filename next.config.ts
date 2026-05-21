import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "target.scene7.com",
      },
      {
        protocol: "https",
        hostname: "img01.ztat.net",
      },
    ],
  },
};

export default nextConfig;