import {test,expect} from "@playwright/test"
import Jsondata from "../TestData/Login.json"

import {ValidLoginPassword} from "../Utils/Login"
import { Login } from "../PageObject/Login"



test.describe("Test Amazon UI",()=>{
    test("Test Amazon UI",async({page})=>{
        await page.goto(Jsondata.URL);

        expect(ValidLoginPassword(Jsondata.username,Jsondata.password)).toBeTruthy();
        const login=new Login(page);
        await login.siginButton.click();

        await login.emailField.fill(Jsondata.username);
        await login.emailButton.click();

        expect(login.emailVerify).toHaveText(Jsondata.username);
        await login.PasswordField.fill(Jsondata.password);
        await login.PasswordButton.click();

        expect(page.locator('[class="a-icon a-icon-logo"]')).toBeHidden();

    })
})