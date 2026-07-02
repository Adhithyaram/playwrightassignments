/**
 * ---
 * Author      : Adhithya Ram
 * Program     : Launching various Browsers using Playwright
 * Description : Demonstrates launching of various browsers and opening a webpage
 * Date        : 28-Jun-2026
 * ---
 */

/**
 * Demonstrates launching of various browsers and opening a webpage.
 *1. Using async anonymous function to launch a webpage from a specific web browser 
 by explicitly lauching browser, setting context, opening page and launching URL with specified browser in the launch function call
 *2. Using async anonymous function to launch a webpage from a specific web browser 
 by using "page" property to launch the URL directly based on the browsers config provided in the playwright.config.ts
 *
 * @author Adhithya Ram
 *///import chromium library and "test" runner
import { chromium,test } from "@playwright/test";

test("launch salesforce application",
async ()=>{ //create a function asynchronous anonymous function
    const browser=await chromium.launch({headless:false, channel:"chrome"});//launch chromium and wait for launch to complete
    const context=await browser.newContext();//create a browser context and wait for the context to be available for use
    const page=await context.newPage();//create/open a page and wait for the tab to open completely
    await page.goto("https://login.salesforce.com/?locale=in");

    let url= page.url();
    let title=await page.title();

    console.log(`Title for the page with url "${url}" is "${title}"`);

    await page.waitForTimeout(3000);
    
});

test("launch salesforce application in all browsers",
async ({page})=>{ //create a function asynchronous anonymous function
    // const browser=await chromium.launch({headless:false, channel:"chrome"});//launch chromium and wait for launch to complete
    // const context=await browser.newContext();//create a browser context and wait for the context to be available for use
    // const page=await context.newPage();//create/open a page and wait for the tab to open completely
    await page.goto("http://leaftaps.com/opentaps/control/main");

    let url= page.url();
    let title=await page.title();

    console.log(`Title for the page with url "${url}" is "${title}"`);

    await page.waitForTimeout(3000);
    
});