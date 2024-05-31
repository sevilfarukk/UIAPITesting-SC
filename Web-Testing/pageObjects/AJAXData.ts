import { Locator, Page, expect } from "@playwright/test";


export default class AJAXData {
    readonly page: Page

    private button: Locator
    private text: Locator

    constructor(page: Page) {
        this.page = page
        this.button = page.getByRole('button', { name: 'Button Triggering AJAX Request' })
        this.text = page.getByText('Data loaded with AJAX get request.')
    }

    //Click the button
    async clickAJAXButton() {
        await this.button.click()
    }

    //Wait for AJAX request and make the assertion
    async waitForAJAXRequestAndAssertTheText() {
        //await this.page.waitForLoadState('networkidle');
        await this.text.waitFor()
    }


} 