/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/api/:path*/",
        destination: `${
          process.env.NEXT_PUBLIC_API_BASEURL ?? "https://api.prlc.kr"
        }/api/:path*/`,
      },
    ]
  },
  images: { domains: ["images.prlc.kr"] },
  output: "standalone",
  reactStrictMode: true,
}

export default nextConfig
