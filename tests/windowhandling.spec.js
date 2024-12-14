const {test, expect}=require('@playwright/test');
const { TestContext } = require('node:test');

test('windowshandling', async({browser})=>
{
    const context =await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const newlink= await page.locator('//a[contains(text(), "Free Access")]');

   const [newpage] =await Promise.all([
 context.waitForEvent('page'),
 newlink.click()
   ])
//await page.pause();
//npxawait newpage.pause();
const text=await newpage.locator(".red").textContent();
console.log(text);
const a=text.split("@");
const b=a[1].split(" ")[0];
console.log(b);
//await page.pause();
await page.locator("#username").fill(b);
await page.locator("#password").fill("learning");

});


