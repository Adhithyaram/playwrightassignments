/**
* ---
* Author      : Adhithya Ram
* Program     : Checkbox Program
* Description : Create a Automation script to work with Checkboxes
* Date        : 05-Jul-2026
* ---
*/

/**
 * Demonstrates playwright program to work with checkboxes in Leafground application.
 * @author Adhithya Ram
 */

import { test, expect } from "@playwright/test";

test("Work with checkboxes", async ({ page }) => {
    await page.goto("https://leafground.com/checkbox.xhtml");
    //Check on check boxes
    await page.locator(`//span[contains(text(),"Basic")]`).click();
    await page.locator(`//span[contains(text(),"Ajax")]`).click();
    //perform assertion
    const displayedTextCheckbox=await page.locator(`//span[@class="ui-growl-title"]`).innerText();
    expect(displayedTextCheckbox).toContain("Checked");
    await page.locator(`//label[contains(text(),"Javascript")]`).click();
    await page.locator(`//h5[contains(text(),"Tri State Checkbox")]/following-sibling::div/div/div`).click();
    //select slider
    await page.locator(`//div[@class="ui-toggleswitch-slider"]`).click();
    //perform assertion
    const displayedTextToggleSwitch=await page.locator(`(//span[@class="ui-growl-title"])[1]`).innerText();
    expect(displayedTextToggleSwitch).toContain("Checked");
    
    //check if check box is disabled
    const disabledStatus= await page.locator(`//h5[contains(text(),"check box is disabled")]/following-sibling::div/div/div/div/input`).isDisabled();
    if(disabledStatus){
        console.log("Checkbox is disabled");        
    }
    else{
        console.log("Checkbox is enabled");
    }
    
    //click on the cities combo box
    await page.locator(`//ul[@class="ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all"]`).click();
    // await page.locator(`//ul[@class="ui-selectcheckboxmenu-items ui-selectcheckboxmenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]`).click();

    //get count of list elements
    const countLiElements= await page.locator(`//ul[@class="ui-selectcheckboxmenu-items ui-selectcheckboxmenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li`).count();
    console.log(countLiElements);
    //get list element values
    const liElements= await page.locator(`//ul[@class="ui-selectcheckboxmenu-items ui-selectcheckboxmenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li`).allInnerTexts();
    console.log(liElements);
    //iterate to select all list elements
    for (let index=1;index<=countLiElements;index++){
        let elementValue=liElements.at(index-1);
        await page.locator(`(//label[contains(text(),"${elementValue}")])[2]`).click();
        // await page.waitForTimeout(1000);//kept to check on selection
    }
    await page.waitForTimeout(2000);//demo purpose
    //close page
    await page.close();
})