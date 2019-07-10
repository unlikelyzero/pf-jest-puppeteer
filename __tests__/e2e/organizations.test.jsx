const devices = require('puppeteer/DeviceDescriptors')

describe('Organization Test', () => {

  beforeAll(async () => {
    //await page.emulate(devices['iPhone 6']) //example device emulation
    await page.goto('https://127.0.0.1:3001', {waitUntil: 'networkidle0'})
    await expect(page).toMatch('Ansible AWX')
    await expect(page).toFill('input[name="pf-login-username-id"]', 'admin')
    await expect(page).toFill('input[name="pf-login-password-id"]', 'password')
    await expect(page).toClick('button', { text: 'Log In' }) // selection logic
    await page.waitForNavigation({ waitUntil: 'networkidle0' }) // wait until all network traffic to complete for 500ms
  })

  it('can create an organization', async () => {
    await page.goto('https://127.0.0.1:3001/#/organizations', {waitUntil: 'networkidle0'})
    
    await expect(page).toMatchElement('a[aria-label=Add]')
    await expect(page).toClick('a[aria-label=Add]')
    await page.evaluate(() => {debugger;})
    
    await expect(page).toMatchElement('.pf-c-form')
    await expect(page).toFillForm('.pf-c-form', {
      'name': "jest-is-best",
      'description': "Creation test for orgs. Test ID:"
    }) //forms have their own method
    // or you can do the ol' fashioned way
    //await expect(page).toFill('input[id="org-name"', 'jest-is-best')
    //await expect(page).toFill('input[id="org-description"', 'Creation test for orgs. Test ID: ')

    await expect(page).toClick('button[aria-label=Save]')
    await page.screenshot({path: 'full.png', fullPage: true})
    await page.waitForNavigation({ waitUntil: 'networkidle2' })
    //const url = await page.evaluate(() => location.href)
    //await expect(url).toBe('https://127.0.0.1:3001/#/organizations/130/details')
    console.log(page.url())
    })

  it('newly created organization exists', async () => {
    await page.goto('https://127.0.0.1:3001/#/organizations', {waitUntil: 'networkidle0'})
    await expect(page).toMatch("jest-is-best")
  })

  test.todo('Search for an org!');

  afterAll(async () => {
    await page.screenshot({path: 'my-screenshot.png'});
    //await browser.close()
  })

})   