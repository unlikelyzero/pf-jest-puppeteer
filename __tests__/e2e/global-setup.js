// global-setup.js
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)
  // Your global setup
 // await page.goto('https://127.0.0.1:3001')
}