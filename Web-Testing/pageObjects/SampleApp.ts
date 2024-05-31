import { Locator, Page, expect } from "@playwright/test";
import { accountCredientials } from "../../Utils/ENUM";
import { messages } from "../../Utils/ENUM";


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

    //Click Login Button
    async clickLoginButton() {
        await this.loginButton.click()
    }

    //Click Logout Button
    async clickLogoutButton() {
        await this.logoutButton.click()
    }

    //Fill the UserName
    async fillUsername() {
        await this.userNameField.type(accountCredientials.USERNAME)
    }

    //Fill the Password
    async fillPassword() {
        await this.passwordField.type(accountCredientials.PASSWORD)
    }

    //Assert invalid login message
    async assertInvalidLogin() {
        await expect(this.loginStatus).toContainText(messages.UNSUCCESFULL);
        await expect(this.loginStatus.getByText(messages.UNSUCCESFULL)).toBeVisible();
    }

    //Assert Succesfull Login
    async assertSuccessfullLogin() {
        await expect(this.loginStatus).toContainText(messages.SUCCESFULL + accountCredientials.USERNAME + "!");
    }

    //Assert Succesfull Logout
    async assertSuccessfulLogout() {
        await expect(this.loginStatus).toContainText(messages.LOGOUT);

    }
}