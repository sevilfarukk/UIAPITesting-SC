import { Locator, Page, expect } from "@playwright/test";


export default class TextInput {
    readonly page: Page
    private button: Locator
    private textField: Locator

    constructor(page: Page) {
        this.page = page
        this.button = page.getByRole('button', { name: 'Button That Should Change it\'' })
        this.textField = page.getByPlaceholder('MyButton')
    }

    //Fill the input field
    async fillInputField() {
        await this.textField.fill("Test")
    }

    //Click the button
    async clickButton() {
        await this.button.click()
    }

    //Assert the button name
    async assertButtonName() {
        await expect(this.page.locator('#updatingButton')).toContainText('Test');

    }

}