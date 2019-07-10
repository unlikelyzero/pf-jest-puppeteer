const RequestInterceptor = require('puppeteer-request-spy').RequestInterceptor;
const ResponseFaker      = require('puppeteer-request-spy').ResponseFaker;

describe('Organization Test', () => {
  let RequestInterceptor;
  let cssSpy;

  let responseFaker = new ResponseFaker('/#/login', {
    status: 300,
    contentType: 'application/json',
    body: JSON.stringify({successful: false, payload: []})
  })

  beforeAll(async () => {
    await page.goto('https://127.0.0.1:3001')
  })

  it('should display "Ansible Tower" text on page', async () => {
    await expect(page).toMatch('Ansible Tower')
  })

  it('login', async () => {
    await expect(page).toClick('button', { text: 'Log In' })
    const response = await page.goto('https://127.0.0.1:3001/')
    console.log(response.headers())
  })

  it('login2', async () => {
    //await expect(page).toClick('button', { text: 'Log In' })
    await page.on('response', (response) => {
        expect(response.status).toEqual(400)
    })
  })
  

})