import { test } from "../../fixture/pomFixture"

test.beforeEach(async ({ basePage }) => {
    await basePage.goTo("progressbar")
})


test.describe("The aim of this test verify the clicking the stop button when ProgressBar reach to 75%", async () => {
    test("should click Stop button when ProgressBar reach the 75%", async ({ progressBar }) => {
        await progressBar.clickStart()
        await progressBar.progressBarReach75()
    })
})