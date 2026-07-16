import { test,expect } from "@playwright/test";

import path from "path";

test("Working with uploading files with input tag having type attribute",async ({page}) => {
    page.goto(`https://leafground.com/file.xhtml`);
    await page.locator(`//h5[text()="Advanced Upload - Only Pictures"]/following::span/input`).setInputFiles([path.join(__dirname,"../../Data/Dummy1.png"),path.join(__dirname,"../../Data/dummy2.png")]);
    await page.waitForTimeout(3000);
    
})

test("Working with uploading files without input tag",async ({page}) => {
    page.goto(`https://the-internet.herokuapp.com/upload`);
    const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"),page.locator(`//div[@class="dz-success-mark dz-clickable"]`).click()]);
    await fileUpload.setFiles([path.join(__dirname,"../../Data/dummy1.png"),path.join(__dirname,"../../Data/dummy2.png")]);
    await expect(page.locator(`(//div[@class="dz-filename"]/span)[1]`)).toHaveText("dummy1.png");
    await page.waitForTimeout(3000);
})