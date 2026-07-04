/*
Practising xpath
Absolute xpath
==============



Relative xpath
==============
1. Basic Relative xpath
a) Attribute Based --> //tagName[@attributeName="attributeValue"] ex: //input[@id="username"]
b) Text Based --> //tagName[text()="Visible Text"] ex: //label[text()="Username"]
c) Partial attribute name --> //tagName[contains(@attributeName,"Partial Attribute Value"] ex: //input[contains([@id,"word"])]
d) Partial text based --> //tagName[contains(text(),"Partial Visible Text")] ex: //label[contains(text(,"Usern"))]

2. Advanced Relative xpath(Axes xpath)
a) Parent->Child --> (relative xpath of parent)/tagName of child ex: //form[@id="login"]/p
b) Grand Parent->Grand Child --> (relative xpath of grand parent)//tagName of grand child ex: (//form[@id="login"]//input)[1]
c) Elder Siblings->Younger Siblings --> (relative xpath of elder sibling)/following-sibling::<tagName> ex://label[text()="Username"]/following-sibling::input
d) Elder Cousin->Younger Cousin --> (relative xpath of elder sibling)/following::<tagName> ex://label[text()="Username"]/following::input
e) Child->Parent --> //tagName[@attributeName="attributeValue"]/parent::tagName ex: //input[@id="username"]/parent::p
f) Grand Child->Grand Parent --> //tagName[@attributeName="attributeValue"]/ancestor::tagName ex: //input[@id="username"]/ancestor::form
g) Younger Sibling -> Elder Sibling --> (relative xpath of younger sibling)/preceding-sibling::<tagName> ex: //input[@id="password"]/preceding-sibling::label
h) Younger Cousin -> Elder Cousin --> (relative xpath of younger sibling)/preceding::<tagName> ex: //input[@id="password"]/preceding::label
*/

import { test } from "@playwright/test"

test("learn to interact with web elements using css",
    async ({ page }) => { //page fixture that takes care of opening and closing of a browser. 

        //open the salesfore application
        await page.goto("http://leaftaps.com/opentaps/control/main");

        //locatore method is used to identify a webelement
        //fill username
        await page.locator(`//input[contains(@id,"ername")]`).fill("democsr");

        //fill password
        await page.locator(`//label[text()="Password"]`).fill("crmsfa");

        //click Login button
        await page.locator(`//input[@value="Login"]`).click();

        //Just for Demo Purpose
        await page.waitForTimeout(3000);

        //click Logout button
        // await page.locator(`[class="decorativeSubmit"]`).click();/option1
        await page.locator(`//input[@class="decorativeSubmit"]`).click();

        //Just for Demo Purpose
        await page.waitForTimeout(3000);

    });