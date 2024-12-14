const {test, expect}=require('@playwright/test');

test('shopping end to end', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[placeholder='email@example.com']").fill("bhanu16j@gmail.com");
    await page.locator("[placeholder*='enter']").fill("Karthik@ds1");
    //await page.pause();
    await page.waitForSelector('#login', { state: 'visible' });
    await page.locator("#login").click();
    await page.waitForURL("https://rahulshettyacademy.com/client/dashboard/dash");
    await page.locator("[fdprocessedid='i77bw']").click();
   const productname= await page.locator('//*[@id="products"]/div[1]/div[2]/div[1]/div/div/h5').textContent();
    await page.locator("[fdprocessedid='874ikf']").click();
    await page.locator("[fdprocessedid='zm9hee']").click();
    const cartnamecheck=await page.locator("//h3[text()='ZARA COAT 3']").textContent();
    expect(productname).toBe(cartnamecheck);
    


});