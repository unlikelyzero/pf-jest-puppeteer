module.exports = {
    preset: 'jest-puppeteer',
    launch: {
      defaultViewport: {
        width: 1024,
        height: 768
      },
      devtools: true,
      dumpio: true,
      headless: false,
      ignoreHTTPSErrors: true,
      //slowMo: 250
    },
    browserContext: 'default'
  };