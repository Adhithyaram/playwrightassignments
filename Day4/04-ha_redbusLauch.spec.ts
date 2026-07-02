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
 * 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
 *
 * @author Adhithya Ram
 *///import chromium library and "test" runner
import { chromium, test, webkit, firefox} from "@playwright/test";

test("launch redubs application",
async ()=>{ //create a function asynchronous anonymous function
    const browser1=await chromium.launch({headless:false, channel:"msedge"});//launch chromium and wait for launch to complete
    const context1=await browser1.newContext();//create a browser context and wait for the context to be available for use
    const page1=await context1.newPage();//create/open a page and wait for the tab to open completely
    await page1.goto("https://www.redbus.in/");

    let url1= page1.url();
    let title1=await page1.title();

    console.log(`Title for the page with url "${url1}" is "${title1}"`);

    await page1.waitForTimeout(3000);
});
