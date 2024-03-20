/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: `${process.env.NEXT_PUBLIC_API_BASEURL}/api/:path*/`,
      },
    ]
  },
  output: "standalone",
  reactStrictMode: true,
}

export default nextConfig
