import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pining.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;