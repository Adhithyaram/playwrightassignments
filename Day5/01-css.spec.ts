//Learn to interact with web elements

/*
Username Textbox==> [id="username"] <==>short form for id attribute #username
Password Textbox==> [id="password"] <==>short form for id attribute #password
Login Button==> [class="decorativeSubmit"] <==>short form for id attribute .decorativeSubmit
 */

import { test } from "@playwright/test"

test("learn to interact with web elements using css",
    async ({ page }) => { //page fixture that takes care of opening and closing of a browser. this includes below 3 steps
        // const browser=await chromium.launch({headless:false, channel:"chrome"});//launch chromium and wait for launch to complete
        // const context=await browser.newContext();//create a browser context and wait for the context to be available for use
        // const page=await context.newPage();//create/open a page and wait for the tab to open completely

        //open the salesfore application
        await page.goto("http://leaftaps.com/opentaps/control/main");

        //locatore method is used to identify a webelement
        //fill username
        // await page.locator(`[id="username"]`).fill("democsr");/option1
        // await page.locator(`#username`).fill("democsr");//option2
        await page.locator(`[class="inputLogin"]`).nth(0).fill("democsr");//option3

        //fill password
        // await page.locator(`[id="password"]`).fill("crmsfa");//option1
        // await page.locator(`#password`).fill("crmsfa");//option2

        await page.locator(`[class="inputLogin"]`).last().fill("crmsfa");//option3, can use first for first occurrence
        //click Login button
        // await page.locator(`[class="decorativeSubmit"]`).click();/option1
        await page.locator(`.decorativeSubmit`).click();

        //Just for Demo Purpose
        await page.waitForTimeout(3000);

        //click Logout button
        // await page.locator(`[class="decorativeSubmit"]`).click();/option1
        await page.locator(`.decorativeSubmit`).click();

        //Just for Demo Purpose
        await page.waitForTimeout(3000);

    });