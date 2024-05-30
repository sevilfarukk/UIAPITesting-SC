import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("ajax")
})

test.describe("The aim of this test verify the AJAX Request handling", async () => {
    test("AJAX Request", async ({ ajaxData }) => {
        await ajaxData.clickAJAXButton()
        await ajaxData.waitForAJAXRequest()
    })
})