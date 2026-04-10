import { chromium, firefox, test } from "@playwright/test";
import { channel } from "diagnostics_channel";
test(`Test to launch the browser`, async () => {
const browser = await firefox.launch(
    {headless: false }
    
);
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.redbus.in");
console.log(`The title of the page is ${ await page.title()}`);
await page.waitForTimeout(5000)

const browser2 = await chromium.launch(
    {headless: false ,
    channel: 'msedge'})

// Create the browser context
const context1 = await browser2.newContext();
// Create a new page
const page1 = await context1.newPage();
// Load the url
await page1.goto("https://www.flipkart.com");
// Get the title of the page
console.log(`The title of the page is ${ await page1.title()}`);
await page1.waitForTimeout(5000);
})