/**
* ---
* Author      : Adhithya Ram
* Program     : Dropdown Program
* Description : Create a Automation script to work with dropdowns
* Date        : 05-Jul-2026
* ---
*/

/**
 * Demonstrates playwright program to work with dropdowns in Leafground application.
 * @author Adhithya Ram
 */

import { test, expect } from "@playwright/test";

test("Work with dropdowns", async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml");
    //select favorite language
    const automationDropDown = await page.locator(`//select[@class="ui-selectonemenu"]/option`);
    const automationDropDownCount = await automationDropDown.count();
    // const automationDropDownValues=await page.locator(`//select[@class="ui-selectonemenu"]/option`).allInnerTexts();
    for (let index = 1; index <= automationDropDownCount; index++) {
        const value = await page.locator(`(//select[@class="ui-selectonemenu"]/option)[${index}]`).innerText();
        console.log(`Index ${index} = ${value}`);
    }
    await page.selectOption(`//select[@class="ui-selectonemenu"]`, { label: "Playwright" });

    await page.locator(`//label[text()="Select Country"]`).click();

    const countries = await page.locator(`//ul[@class="ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li`).allInnerTexts();

    //Select India
    await page.locator(`//li[text()="India"]`).click();

    await page.locator(`//label[text()="Select City"]`).click();

    //get count of list elements using ul element
    const countLiElements = await page.locator(`((//ul[@class="ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"])[2])/li`).count();
    //get count of list elements using parent of Select City
    // const countLiElements = await page.locator(`//li[contains(text(),"Select City")]/following-sibling::li`).count();
    console.log(countLiElements);
    //get list element values
    const liElements = await page.locator(`//li[contains(text(),"Select City")]/parent::ul/li`).allInnerTexts();
    console.log(liElements);

    let valid = 0;

    for (let index = 1; index < countLiElements; index++) {

        //get selected country as a label
        let selectedCountry = await page.locator(`(//label[@class="ui-selectonemenu-label ui-inputfield ui-corner-all"])[1]`).innerText();

        //get city from dropdown
        let availableCity = await page.locator(`(//li[contains(text(),"Select City")]/following-sibling::li)[${index}]`).innerText();
        if (selectedCountry === "India") {
            if (availableCity === "Chennai" || availableCity === "Bengaluru" || availableCity === "Delhi") {
                // console.log(`Loaded Values are valid`);
                valid += 1;
            }
        }
        if (selectedCountry === "Brazil") {
            if (availableCity === "Rio de Janeiro" || availableCity === "Sao Paulo" || availableCity === "Salvador") {
                // console.log(`Loaded Values are valid`);
                valid += 1;
            }
        }
        if (selectedCountry === "Germany") {
            if (availableCity === "Berlin" || availableCity === "Frankfurt" || availableCity === "Munich") {
                // console.log(`Loaded Values are valid`);
                valid += 1;
            }
        }
        if (selectedCountry === "USA") {
            if (availableCity === "New York" || availableCity === "San Fransisco" || availableCity === "Denver") {
                // console.log(`Loaded Values are valid`);
                valid += 1;
            }
        }
    }

    if (valid === countLiElements - 1) {
        console.log(`Loaded Values are valid`);
    }
    else {
        console.log(`Loaded Values are invalid`);
    }

    //click on the multiselect dropdown

    for (let i = 1; i <= 3; i++) {

        await page.locator(`//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]`).click();
        await page.locator(`//ul[@class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]/li[${i + 1}]`).click();
    }

    await page.locator(`//label[text()="Select Language"]`).click();

    //get count of languages
    const countLanguages = await page.locator(`((//ul[@class="ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"])[2])/li`).count();

    console.log(countLanguages);

    //print available languages
    for(let index=1;index<countLanguages;index++){
        let language=await page.locator(`(//li[contains(text(),"Select Language")]/following-sibling::li)[${index}]`).innerText();
        console.log(`Language in Index ${index} = ${language}`);
        
    }

    //print language in index 2
    await page.locator(`//li[text()="Select Language"]/following-sibling::li[2]`).click();

    await page.locator(`//label[text()="Select Values"]`).click();

    //Select 'Two' irrespective of the language chosen
    await page.locator(`//li[text()="Select Values"]/following-sibling::li[2]`).click();

    await page.waitForTimeout(2000);//demo purpose
    //close page
    await page.close();
})