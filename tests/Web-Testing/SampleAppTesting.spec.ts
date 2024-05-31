import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("sampleapp")
})

test.describe("The aim of this test verify the Login functionalities of the Sample APP", async () => {
    test("should Login Successfully", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.fillPassword()
        await sampleApp.clickLoginButton()
        await sampleApp.assertSuccessfullLogin()
    })

    test("should Logout Successfully", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.fillPassword()
        await sampleApp.clickLoginButton()
        await sampleApp.clickLogoutButton()
        await sampleApp.assertSuccessfulLogout
    })

    test("shoulb be UnSuccessfull Login", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.clickLoginButton()
        await sampleApp.assertInvalidLogin()
    })

    test("should display warning message when the fields are Empty", async ({ sampleApp }) => {
        await sampleApp.clickLoginButton()
        await sampleApp.assertInvalidLogin()
    })

})