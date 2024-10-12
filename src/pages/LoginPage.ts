import {Page, expect} from "@playwright/test"
import HomePage from "./HomePage";

export default class LoginPage{
    private readonly userNameSelector = 'input[id="username"]';
    private readonly passwordSelector = 'input[id="password"]';
    private readonly loginButtonSelector = 'input[id="Login"]';

    constructor(private Page:Page){}

    async navigatetoLoginPage(){
        await this.Page.goto('/');
    }

    async fillUserName(username:string){
        await this.Page.locator(this.userNameSelector).fill(username);
    }

    async fillPassword(password:string){
        await this.Page.locator(this.passwordSelector).fill(password);
    }

    async clickOnLoginButton(){
        await this.Page.locator(this.loginButtonSelector).click()
        .catch((error)=>{
            console.error('Error while clicking On Login Button: ${error}');
            throw error; 
        })
       const homePage = new HomePage(this.Page);
       return homePage;
    }
}