const{test, expect}=require ('@playwright/test');

test('radiocheck assertions', async({browser})=>
{
    const context =await browser.newContext();
    const page=await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await page.pause();
    const radio1=await page.locator('//span[text()="Admin"]');
    await expect(radio1).toBeChecked();
    const radio2=await page.locator('//span[normalize-space(text())="User"]');
    //await radio2.click();
    const checked= await radio2.isChecked();
    await expect(checked).toBeFalsy();
    const checkbox=await page.locator('//span[normalize-space(text())="I Agree to the"]');
  //  await checkbox.click();
    const check=await checkbox.isChecked();
    await expect(check).toBeFalsy();






});