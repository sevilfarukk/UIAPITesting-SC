import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("progressbar")
})


test.describe("The aim of this test verify the ProgressBar", async () => {
    test("ProgressBar", async ({ progressBar }) => {
        await progressBar.clickStart()
        await progressBar.progressBarReach75()
    })
})