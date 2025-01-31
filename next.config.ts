import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.map$/,
      type: "javascript/auto",
      use: "source-map-loader",
    });

    config.externals.push({
      "puppeteer-core": "commonjs puppeteer-core",
    });

    return config;
  },
};

export default nextConfig;
