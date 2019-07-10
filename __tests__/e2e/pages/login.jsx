export default class LoginPage {

    constructor(page) {
        this.page = page;
    }

    await page.goto('https://127.0.0.1:3001')

    async getTitle() {
        return this.page.title();
    }
}
