//import chromium library and "test" runner
import { chromium,test } from "@playwright/test";

test("launch a browser",
async ()=>{ //create a function asynchronous anonymous function
    const browser=await chromium.launch({headless:false, channel:"chrome"});//launch chromium and wait for launch to complete
    const context=await browser.newContext();//create a browser context and wait for the context to be available for use
    const page=await context.newPage();//create/open a page and wait for the tab to open completely
    await page.goto("http://leaftaps.com/opentaps/control/main");
});