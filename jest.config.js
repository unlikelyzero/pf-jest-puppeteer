module.exports = {
    preset: 'jest-puppeteer',
    globalSetup: "jest-environment-puppeteer/setup",
    globalTeardown: "jest-environment-puppeteer/teardown",
    testEnvironment: "jest-environment-puppeteer",
    //testURL: 'http://127.0.0.1:3001',
    testMatch: [
        '<rootDir>/__tests__/e2e/*.test.{js,jsx}'
    ]
    setupFilesAfterEnv: ["expect-puppeteer"]
  }
