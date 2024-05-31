import { Locator, Page, expect } from "@playwright/test";
import { overlappedValues } from "../../Utils/ENUM";

export default class OverlappedElement {
    readonly page: Page
    private id: Locator
    private name: Locator

    constructor(page: Page) {
        this.page = page
        this.id = page.getByPlaceholder('Id')
        this.name = page.getByPlaceholder('Name')
    }

    //Fill the ID element
    async filltheID(){
        await this.id.fill(overlappedValues.ID)
    }

    //Fill the Name
    async fillName(){
        await this.name.fill(overlappedValues.NAME)
    }

    //Scroll the element
    async scrollIntoView(){
        await this.name.evaluate(el => el.scrollIntoView());
    }

    //Assert the Name text after filled
    async assertText(){
        await expect(this.name).toHaveValue(overlappedValues.NAME);
    }
}