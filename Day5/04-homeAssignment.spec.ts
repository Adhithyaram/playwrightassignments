 /**
 * ---
 * Author      : Adhithya Ram
 * Program     : Create a Lead
 * Description : Create a Lead in Leaftaps application
 * Date        : 04-Jul-2026
 * ---
 */

/**
 * Demonstrates playwright program to launch Leaftaps application and create a lead.
 * @author Adhithya Ram
 */

import { test } from "@playwright/test"

test("learn to interact with web elements using css",
    async ({ page }) => { //page fixture that takes care of opening and closing of a browser. 

        //open the salesfore application
        await page.goto("http://leaftaps.com/opentaps/control/main");

        //locatore method is used to identify a webelement
        //fill username
        await page.locator(`//input[contains(@id,"ername")]`).fill("Demosalesmanager");

        //fill password
        await page.locator(`//label[text()="Password"]`).fill("crmsfa");

        //click Login button
        await page.locator(`//input[@value="Login"]`).click();

        //Just for Demo Purpose
        await page.waitForTimeout(3000);

        //click CRM/SFA button
        await page.locator(`//*[@id="button"]/a/img`).click();

        //click Leads
        await page.locator(`//a[text()="Leads"]`).click();

        //click Create Lead
        await page.locator(`//a[text()="Create Lead"]`).click();

        /*
        * Fill Company Name, First Name, Last Name, Salutation, Title,
        * Annual Revenue, Department, Phone number
        */
        await page.locator(`//input[contains(@name,"companyName")]`).fill("Test Company");
        await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("FirstName");
        await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("LastName");
        await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill("Salutation");
        await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill("Mr");
        await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill("4,000,000");
        await page.locator(`(//input[@class="inputBox"])[10]`).fill("Information Technology");
        await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill("9876543210");

        //Click Create Lead button
        await page.locator(`//input[contains(@value,"Create Lead")]`).click();

        //Obtain page title
        let title=await page.title();

        console.log(`Title of the page is "${title}"`);

    });