import { Locator, Page, expect } from "@playwright/test";

export default class ProgressBar {
    readonly page: Page

    private startButton: Locator
    private stopButton: Locator

    constructor(page: Page) {
        this.page = page
        this.startButton = page.getByRole('button', { name: 'Start' })
        this.stopButton = page.getByRole('button', { name: 'Stop' })
    }

    //Clcik the Start Button
    async clickStart() {
        await this.startButton.click()
    }

    //Click stop button when ProgressBar reach to 75%
    async clickStop() {
        await this.stopButton.click()
    }

    //Check the Progressbar status
    async progressBarReach75() {
        const getProgressValue = async () => {
            const progressText = await this.page.$eval('#progressBar', el => el.textContent?.trim());
            const progressValue = progressText ? parseInt(progressText.replace('%', ''), 10) : 0;
            return progressValue;
        };

        // Monitor the progress until it reaches 75%
        let progressValue = await getProgressValue();
        while (progressValue < 75) {
            await this.page.waitForTimeout(100);
            progressValue = await getProgressValue();
            console.log(`Current progress: ${progressValue}%`);
        }

        // Click the stop button when progress reaches 75%
        await this.clickStop()
        console.log('Progress bar stopped at 75%');
    }

}
