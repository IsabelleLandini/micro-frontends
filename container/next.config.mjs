import { NextFederationPlugin } from "@module-federation/nextjs-mf";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        
        remotes: {
          cardapio: "cardapio@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          pedido: "pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js",
        },
      })
    );

    return config;
  },
};

export default nextConfig;
