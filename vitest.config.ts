
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',            // DOM-Umgebung für Web-Tests
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/__tests__/**/*.ts'], 
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      collectCoverageFrom: [
        'src/**/*.{ts,tsx,js,jsx}',
        '!src/**/*.d.ts',
        '!src/**/__tests__/**',
        '!src/**/*.(test|spec).{ts,tsx,js,jsx}',
      ],
      reporter: ['text', 'json-summary', 'lcov', 'html'],
      reportsDirectory: 'coverage',
    },
  },
});
