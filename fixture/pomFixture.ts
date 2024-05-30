import { test as baseTest } from '@playwright/test'
import BasePage from '../Web-Testing/BasePage/BasePage'
import SampleApp from '../Web-Testing/pageObjects/SampleApp'
import OverlappedElement from '../Web-Testing/pageObjects/OverlappedElement'
import AJAXData from '../Web-Testing/pageObjects/AJAXData'
import ButtonClick from '../Web-Testing/pageObjects/ButtonClick'
import ProgressBar from '../Web-Testing/pageObjects/ProgressBar'
import PetStoreAPITesting from '../API-Testing/PetStoreAPITesting'
import TextInput from '../Web-Testing/pageObjects/TextInput'

type pages = {
    basePage: BasePage
    sampleApp: SampleApp
    overlappedElement: OverlappedElement
    ajaxData: AJAXData
    buttonClick: ButtonClick
    progressBar: ProgressBar
    textInput: TextInput
    petStore: PetStoreAPITesting
}

const testPages = baseTest.extend<pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page))
    },

    sampleApp: async ({ page }, use) => {
        await use(new SampleApp(page))
    },

    overlappedElement: async ({ page }, use) => {
        await use(new OverlappedElement(page))
    },

    ajaxData: async ({ page }, use) => {
        await use(new AJAXData(page))
    },

    buttonClick: async ({ page }, use) => {
        await use(new ButtonClick(page))
    },

    progressBar: async ({ page }, use) => {
        await use(new ProgressBar(page))
    },

    textInput: async ({ page }, use) => {
        await use(new TextInput(page))
    },

    petStore: async ({ page }, use) => {
        await use(new PetStoreAPITesting())
    },
})

export const test = testPages
export const expect = testPages.expect