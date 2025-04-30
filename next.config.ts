import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "images.pexels.com",
        //port: "",
        //pathname: "/photos/**",
        hostname: "**",
      },
      {
        protocol: 'http',
        hostname: '***',
      }
    ],
  },

};

export default nextConfig;
