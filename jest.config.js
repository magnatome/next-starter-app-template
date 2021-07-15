// Configuration for Jest testing

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/__tests__/mocks/',
    '\\/__tests__\\/[\\w-]+\\.[jt]sx?',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./__tests__/environment.js'],
  setupFilesAfterEnv: ['./__tests__/setup.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  coverageReporters: ['html', 'lcov', 'text', 'text-summary', 'clover'],
}
