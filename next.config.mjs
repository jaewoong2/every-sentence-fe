/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  assetPrefix: "/dev/",
}

export default nextConfig
