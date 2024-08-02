/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**', // You can specify a specific path or use ** for all paths
      },
    ],
  },
};

export default nextConfig;
