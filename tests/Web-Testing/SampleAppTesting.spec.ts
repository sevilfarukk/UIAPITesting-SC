import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("sampleapp")
})

test.describe("The aim of this test verify the Login functionalities of the Sample APP", async () => {
    test("Successfull Login", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.fillPassword()
        await sampleApp.clickLoginButton()
        await sampleApp.assertSuccessfullLogin()
    })

    test("Successfull Log Out", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.fillPassword()
        await sampleApp.clickLoginButton()
        await sampleApp.clickLogoutButton()
        await sampleApp.assertSuccessfulLogout
    })

    test("UnSuccessfull Login", async ({ sampleApp }) => {
        await sampleApp.fillUsername()
        await sampleApp.clickLoginButton()
        await sampleApp.assertInvalidLogin()
    })

    test("Empty Fields", async ({ sampleApp }) => {
        await sampleApp.clickLoginButton()
        await sampleApp.assertInvalidLogin()
    })

})