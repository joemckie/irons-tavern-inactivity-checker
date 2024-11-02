import nextJest from 'next/jest';
import type { Config } from 'jest';
import { merge } from 'lodash';
import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coveragePathIgnorePatterns: [
    '<rootDir>/mocks',
    '<rootDir>/fixtures',
    '<rootDir>/test-utils',
  ],
  testEnvironment: 'jest-fixed-jsdom',
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironmentOptions: {
    customExportConditions: ['node'],
  },
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '@auth/upstash-redis-adapter':
      'node_modules/@auth/upstash-redis-adapter/index.js',
  },
} satisfies Config;

const buildConfig = async () => {
  const baseConfig = await createJestConfig(config)();

  return merge<unknown, Config, Config>({}, baseConfig, {
    transformIgnorePatterns: [
      ' /node_modules/(?!(next-auth|@auth/core/(.*)|oauth4webapi))',
    ],
  });
};

export default buildConfig;
