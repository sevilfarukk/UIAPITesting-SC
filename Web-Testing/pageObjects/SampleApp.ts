import { Locator, Page, expect } from "@playwright/test";

import { accountCredientials } from "../../Utils/ENUM";
import { messages } from "../../Utils/ENUM";
import { setTimeout } from "timers/promises";


export default class SampleApp {
    readonly page: Page
    private userNameField: Locator
    private passwordField: Locator
    private loginButton: Locator
    private logoutButton: Locator
    private loginStatus: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameField = page.getByPlaceholder('User Name')
        this.passwordField = page.getByPlaceholder('********')
        this.loginButton = page.getByRole('button', { name: 'Log In' })
        this.logoutButton = page.getByRole('button', { name: 'Log Out' })
        this.loginStatus = page.locator('#loginstatus')
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async clickLogoutButton() {
        await this.logoutButton.click()
    }

    async fillUsername() {
        await this.userNameField.type(accountCredientials.USERNAME)
        console.log(" " + accountCredientials.USERNAME)
    }

    async fillPassword() {
        await this.passwordField.type(accountCredientials.PASSWORD)
        console.log(" " + accountCredientials.PASSWORD)

    }

    async assertInvalidLogin() {
        await expect(this.loginStatus).toContainText(messages.UNSUCCESFULL);
        await expect(this.loginStatus.getByText(messages.UNSUCCESFULL)).toBeVisible();
    }

    async assertSuccessfullLogin() {
        await expect(this.loginStatus).toContainText(messages.SUCCESFULL + accountCredientials.USERNAME + "!");
    }

    async assertSuccessfulLogout() {
        await expect(this.loginStatus).toContainText(messages.LOGOUT);

    }
}