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


    async filltheID(){
        await this.id.fill(overlappedValues.ID)
    }

    async fillName(){
        await this.name.fill(overlappedValues.NAME)
    }

    //Scroll the element
    async scrollIntoView(){
        await this.name.evaluate(el => el.scrollIntoView());
    }

    async assertText(){
        await expect(this.name).toHaveValue(overlappedValues.NAME);
    }
}