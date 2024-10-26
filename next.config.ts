import { NextConfig } from 'next';

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'oldschool.runescape.wiki',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  ...(process.env.NODE_ENV === 'test'
    ? {
        logging: false,
        compiler: {
          removeConsole: true,
        },
      }
    : {}),
} satisfies NextConfig;