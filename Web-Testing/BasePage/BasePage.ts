import { Locator, Page } from "@playwright/test";


export default class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async goTo(suffix: string): Promise<string> {
        const url = `http://www.uitestingplayground.com/${suffix}`;
        await this.page.goto(url);
        return await this.page.title()
    }

    async getPageURL(): Promise<string> {
        return await this.page.url()
    }
}