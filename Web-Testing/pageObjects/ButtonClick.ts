import { Locator, Page, expect } from "@playwright/test";


export default class ButtonClick {
    readonly page: Page
    private button: Locator

    constructor(page: Page) {
        this.page = page
        this.button = page.getByRole('button', { name: 'Button That Ignores DOM Click Event' })
    }

    //Click the button, get the color before and after
    async clickTheButton() {
        const bgColor = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });
        console.log('Background color:', bgColor);
        await this.button.click()
        const button = await this.page.$('.btn-success');

        const bgColorAfter = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });
        console.log('Background color:', bgColorAfter);
    }


    //Assert that button color changed
    async compareTheButtonColor() {
        const button = await this.page.$('.btn-success');
        const bgColorAfter = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });
        console.log('Background color:', bgColorAfter);
    }

}