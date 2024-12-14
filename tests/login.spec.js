const{test, expect}=require('@playwright/test');

test('login testing', async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("[type='password']").fill("learning");
await page.locator("//span[text()='Admin']").click();
await page.locator("[name='signin']").click();
//console.log(await page.locator("[style*='block']").textContent());
//await expect(page.locator("[style*='block']")).toContainText("Incorrect");
//console.log(await page.locator(".card-title").nth(0).textContent());
//console.log(await page.locator(".card-title").first().textContent());
//console.log(await page.locator(".card-title").last().textContent());
const names=await page.locator(".card-title").allTextContents();

await expect(names.length).toBeGreaterThan(0);
console.log(names)
});