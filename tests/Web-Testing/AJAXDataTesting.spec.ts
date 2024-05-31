import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("ajax")
})

test.describe("The aim of this test verify the AJAX Request handling which means wait for the element to show up", async () => {
    test("should wait for the element to show up - AJAX Request", async ({ ajaxData }) => {
        await ajaxData.clickAJAXButton()
        await ajaxData.waitForAJAXRequestAndAssertTheText()
    })
})