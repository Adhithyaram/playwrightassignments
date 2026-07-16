import { test,expect } from "@playwright/test";

import path from "path";
import fs from "fs";

test("Working with downloading files",async ({page}) => {
    page.goto(`https://the-internet.herokuapp.com/download`);
    await page.waitForURL(`https://the-internet.herokuapp.com/download`);
    // const files=await page.locator(`//div[@class="example"]/a`).allInnerTexts();
    // console.log(files);    
    // const fileCount=files.length;
    // console.log(fileCount);    
    // for (let index = 1; index <= fileCount; index++) {
    for (let index = 1; index < 10; index++) {
        const fileCheck=await page.locator(`(//div[@class="example"]//a)[${index}]`).innerText();
        const [filePromise]=await Promise.all([page.waitForEvent(`download`),page.locator(`(//div[@class="example"]//a)[${index}]`).click()]);
        const fileName = filePromise.suggestedFilename();
        expect(fileName).toBe(fileCheck);
        console.log(fileName);        
        const savePath=path.join(__dirname,`../../Data/${fileName}`);
        console.log(savePath);        
        await filePromise.saveAs(savePath);
        expect(fs.existsSync(savePath)).toBeTruthy();        
    }
    await page.waitForTimeout(3000);
    
})

test("Working with uploading files without input tag",async ({page}) => {
    page.goto(`https://the-internet.herokuapp.com/upload`);
    const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"),page.locator(`//div[@class="dz-success-mark dz-clickable"]`).click()]);
    await fileUpload.setFiles([path.join(__dirname,"../../Data/dummy1.png"),path.join(__dirname,"../../Data/dummy2.png")]);
    await expect(page.locator(`(//div[@class="dz-filename"]/span)[1]`)).toHaveText("dummy1.png");
    await page.waitForTimeout(3000);
})