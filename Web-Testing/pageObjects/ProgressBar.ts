import { Locator, Page, expect } from "@playwright/test";


export default class ProgressBar {
    readonly page: Page

    private startButton: Locator
    private stopButton: Locator
    private progressBar: Locator

    constructor(page: Page) {
        this.page = page
        this.startButton = page.getByRole('button', { name: 'Start' })
        this.stopButton = page.getByRole('button', { name: 'Stop' })
        this.progressBar = page.locator('#progressBar')
    }

    async clickStart() {
        await this.startButton.click()
    }

    async clickStop() {
        await this.stopButton.click()
    }

    async progressBarReach75() {

    }

}
