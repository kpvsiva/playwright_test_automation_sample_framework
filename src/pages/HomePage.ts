import {Page, expect} from "@playwright/test"

export default class HomePage{
    private readonly setUpTitleLocator= 'span[title="Setup"]';

    constructor(private Page:Page){}

    async expectSetUpTitleToBeVisible(){
        await expect(this.Page.locator(this.setUpTitleLocator)).toBeVisible({timeout:15000});
    }
}