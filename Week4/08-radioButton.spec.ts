/**
* ---
* Author      : Adhithya Ram
* Program     : Radio Button Program
* Description : Create a Automation script to work with Radio Buttons
* Date        : 05-Jul-2026
* ---
*/

/**
 * Demonstrates playwright program to work with Radio Buttons in Leafground application.
 * @author Adhithya Ram
 */

import { test, expect } from "@playwright/test";

test("Work with Radio Buttons", async ({ page }) => {
    await page.goto("https://leafground.com/radio.xhtml");

    //get all texts of Browser Radio button
    const getBrowserRadioButtons=await page.locator(`//h5[contains(text(),"default select radio button")]/following-sibling::div/div/table/tbody/tr/td/div/div/input`).allInnerTexts();
    //get count of browser radio buttons
    const getBrowserRadioButtonCounts=getBrowserRadioButtons.length;

    //Assertion using Label String comparison
    for (let index = 1; index <= getBrowserRadioButtonCounts; index++) {
        //find selection status
        const browserSelectionStatus=await page.locator(`(//h5[contains(text(),"default select radio button")]/following-sibling::div/div/table/tbody/tr/td/div/div/input)[${index}]`).isChecked();
        //get the label of the radio button
        const browserName=await page.locator(`(//h5[contains(text(),"default select radio button")]/following-sibling::div/div/table/tbody/tr/td/label)[${index}]`).innerText();
        if (browserSelectionStatus) {
            if(browserName==="Safari"){
                console.log(`${browserName} is checked by default`);               
            }
        }
    }

    //Direct Assertion
    await expect(page.locator(`(//label[text()="Safari"])[2]/preceding-sibling::div/div/input`)).toBeChecked();

    //Select favorite browser
    await page.locator(`(//label[text()="Chrome"])[1]`).click();

    //Select City
    await page.locator(`(//h5[contains(text(),"UnSelectable")]/following-sibling::div/div/div/div/div/label)[2]`).click();

    //get all texts of Age group Radio button
    const getAgeGroupRadioButtons=await page.locator(`//h5[contains(text(),"Select the age group ")]/following-sibling::div/div/div/div/div/div/div/input`).allInnerTexts();
    //get count of age group radio buttons
    const getAgeGroupRadioButtonCounts=getAgeGroupRadioButtons.length;

    //Assertion using Label String comparison
    for (let index = 1; index <= getAgeGroupRadioButtonCounts; index++) {
        //find selection status
        const ageGroupSelectionStatus=await page.locator(`(//h5[contains(text(),"Select the age group ")]/following-sibling::div/div/div/div/div/div/div/input)[${index}]`).isChecked();
        //get the label of the radio button
        const ageGroup=await page.locator(`(//h5[contains(text(),"Select the age group ")]/following-sibling::div/div/div/div/div/label)[${index}]`).innerText();
        if (ageGroupSelectionStatus) {
            if(ageGroup==="21-40 Years"){
                console.log(`${ageGroup} is checked by default`);               
            }
        }
    }

    //Direct Assertion
    await expect(page.locator(`//label[text()="21-40 Years"]/preceding-sibling::div/div/input`)).toBeChecked();

    await page.waitForTimeout(3000);//demo purpose

})