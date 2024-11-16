import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  cacheMaxMemorySize: 0,
  cleanDistDir: true,
  crossOrigin: "anonymous",
  excludeDefaultMomentLocales: true,
};

export default nextConfig;
