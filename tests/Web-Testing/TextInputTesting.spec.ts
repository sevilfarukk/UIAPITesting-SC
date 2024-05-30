import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("textinput")
})

test.describe("The aim of this test verify that button name is changing", async () => {
    test("Button name should be changed", async ({ textInput }) => {
        await textInput.fillInputField()
        await textInput.clickButton()
        await textInput.assertButtonName()
    })
})