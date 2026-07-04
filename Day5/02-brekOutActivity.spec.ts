//Learn to interact with web elements

/*
Username Textbox==> [id="username"] <==>short form for id attribute #username
Password Textbox==> [id="password"] <==>short form for id attribute #password
Login Button==> [class="decorativeSubmit"] <==>short form for id attribute .decorativeSubmit
 */

import { expect, test } from "@playwright/test"

test("learn to interact with web elements using css",
    async ({ page }) => {
        //open the salesfore application
        await page.goto("https://login.salesforce.com/?locale=in");

        //fill username
        await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");

        //fill password
        await page.locator(`#password`).fill("TestLeaf@2025");

        //Click Log In
        await page.locator(`#Login`).click();

        await page.waitForTimeout(3000);

        //Capture Text
        let textCheck=await page.locator(`.slds-card__header-title.slds-truncate`).nth(0).innerText();
        
        //perform success based on text check "Quarterly Performance"
        if(textCheck==="Quarterly Performance"){
            console.log(`${textCheck} is present on screen`);            
        }
        else{
            console.log(`${textCheck} is not present on screen`);
        }

    }
)