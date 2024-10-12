import { test, expect } from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';


test("Simple login test", async({page}) =>{
    const loginPage = new LoginPage(page);
    await loginPage.navigatetoLoginPage();
    await loginPage.fillUserName('sivaqeautomation@gmail.com');
    await loginPage.fillPassword('testing123$');
    const homePage = await loginPage.clickOnLoginButton();
    await homePage.expectSetUpTitleToBeVisible();
});