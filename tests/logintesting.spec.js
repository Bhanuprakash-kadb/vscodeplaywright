const{test, expect}=require('@playwright/test');

test('login_assignment1', async({browser})=>
{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   
    
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    
    await page.locator("[type='submit']").click();
});