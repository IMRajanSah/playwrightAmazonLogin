import {Page,Locator} from "@playwright/test"
export class Login{
    readonly siginButton:Locator
    readonly page:Page
    readonly emailField:Locator
    readonly emailButton:Locator
    readonly PasswordField:Locator
    readonly PasswordButton:Locator
    readonly emailVerify:Locator
    constructor(page:Page){
        this.page=page;
        this.emailField=page.locator('input[id="ap_email"]')
        this.siginButton=page.locator('a[data-nav-ref="nav_ya_signin"]');
        this.emailButton=page.locator('input[id="continue"]')
        this.PasswordField=page.locator('input[id="ap_password"]')
        this.PasswordButton=page.locator('input[id="signInSubmit"]')
        this.emailVerify=page.locator('span[dir="ltr"]')
    }
}