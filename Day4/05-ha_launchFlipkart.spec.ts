 /**
 * ---
 * Author      : Adhithya Ram
 * Program     : Launching various Browsers using Playwright
 * Description : Learn how to automate basic navigation to two different websites (Red Bus and Flipkart)
 * in two separate browser instances (Edge and Firefox) using Playwright.
 * Date        : 28-Jun-2026
 * ---
 */

/**
 * Demonstrates launching of various browsers and opening a webpage.
 * 1. Load Flipkart in a Firefox browser instance and verify the page title and URL.
 *
 * @author Adhithya Ram
 *///import chromium library and "test" runner
import { chromium, test, webkit, firefox} from "@playwright/test";

test("launch flipkart application",
async ()=>{ //create a function asynchronous anonymous function
        
    const browser2=await firefox.launch({headless:false, channel:"firefox"});//launch chromium and wait for launch to complete
    const context2=await browser2.newContext();//create a browser context and wait for the context to be available for use
    const page2=await context2.newPage();//create/open a page and wait for the tab to open completely
    await page2.goto("https://www.flipkart.com/");

    let url2= page2.url();
    let title2=await page2.title();

    console.log(`Title for the page with url "${url2}" is "${title2}"`);

    await page2.waitForTimeout(3000);
});
