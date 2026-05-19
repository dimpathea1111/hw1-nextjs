// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img01.ztat.net",
//         pathname: "/**",
//       },
//     ],
//   },

//   allowedDevOrigins: [
//     "http://192.168.1.209:3000",
//   ],
// };

// module.exports = nextConfig;


import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:'avatars.githubusercontent.com'
      },
       {
        protocol: "https",
        hostname:'img01.ztat.net'
      },
       {
        protocol: "https",
        hostname:'static.vecteezy.com'
      },
       {
        protocol: "https",
        hostname:'png.pngtree.com'
      },
       {
        protocol: "https",
        hostname:'png.pngtree.com'
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);