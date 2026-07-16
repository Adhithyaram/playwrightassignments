/**
* ---
* Author      : Adhithya Ram
* Program     : Frames and Alerts Program
* Description : Create a Automation script to work with Frames and Alerts
* Date        : 11-Jul-2026
* ---
*/

/**
 * Demonstrates playwright program to work with frames in Leafground application.
 * @author Adhithya Ram
 */

import { test, expect } from "@playwright/test";

test("Working with Frames", async ({ page }) => {
    page.goto(`https://leafground.com/frame.xhtml`);
    const simpleFrameContext = page.frameLocator(`//iframe[@src="default.xhtml"]`);
    await simpleFrameContext.locator(`//button[contains(text(),"Click Me")]`).click();
    await expect(simpleFrameContext.locator(`//button[@id="Click"]`)).toHaveText("Hurray! You Clicked Me.");
    await page.waitForTimeout(1000); // demo purposse

    const outerFrameContext = page.frameLocator(`//iframe[@src="page.xhtml"]`);
    const innerFrameContext = outerFrameContext.frameLocator(`//iframe[@src="framebutton.xhtml"]`);
    await innerFrameContext.locator(`//button[contains(text(),"Click Me")]`).click();
    await expect(innerFrameContext.locator(`//button[@id="Click"]`)).toHaveText("Hurray! You Clicked Me.");
    await page.waitForTimeout(3000); // demo purposse
})

/**
 * Demonstrates playwright program to work with alerts in W3S application.
 * @author Adhithya Ram
 */
test.only("Working with Alerts", async ({ page }) => {
    page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
    
    page.on("dialog",async(alert)=>{ 

        //get alert type
        console.log(alert.type())

        //get alert message
        console.log(alert.message());

        //press ok on the alert
        alert.accept();

        }) 
// click on Try It button inside the Frame
    await page.frameLocator(`//iframe[@id="iframeResult"]`).locator('//button[text()="Try it"]').click(); 
    await page.waitForTimeout(1000); // demo purpose
    
// Assert the displayed Text after button click
    await expect(page.frameLocator(`//iframe[@id="iframeResult"]`).locator(`//p[@id="demo"]`)).toHaveText("You pressed OK!");
    await page.waitForTimeout(1000); // demo purpose
})