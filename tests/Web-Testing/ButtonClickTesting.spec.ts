import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("click")
})

test.describe("The aim of this test verify that button color is changing after it is clicked", async () => {
    test("Colour should be changed", async ({ buttonClick }) => {
        await buttonClick.clickTheButton()
        await buttonClick.compareTheButtonColor()
    })
})