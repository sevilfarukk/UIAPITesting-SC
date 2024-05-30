import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("overlapped")
})

test.describe("The aim of this test verify the handling with the overlapped Elements", async () => {
    test("Scrolling into the view and making assertion", async ({ overlappedElement }) => {
        await overlappedElement.filltheID()
        await overlappedElement.scrollIntoView()
        await overlappedElement.fillName()
        await overlappedElement.assertText()
    })
})