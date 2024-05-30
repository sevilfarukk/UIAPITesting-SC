import { Locator, Page, expect } from "@playwright/test";


export default class ButtonClick {
    readonly page: Page
    private button: Locator

    constructor(page: Page) {
        this.page = page
        this.button = page.getByRole('button', { name: 'Button That Ignores DOM Click Event' })
    }

    async clickTheButton() {
        // Get the background color of the button before the click
        const bgColor = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });
        console.log('Background color:', bgColor);
        await this.button.click()


        // Find the button using a selector
        const button = await this.page.$('.btn-success');

        // Get the background color of the button after click
        const bgColorAfter = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });

        console.log('Background color:', bgColorAfter);
    }



    async compareTheButtonColor() {
        // Find the button using a selector
        const button = await this.page.$('.btn-success');
        // Get the background color of the button after click
        const bgColorAfter = await this.button.evaluate(element => {
            const computedStyle = getComputedStyle(element);
            return computedStyle.backgroundColor;
        });
        console.log('Background color:', bgColorAfter);
    }

}