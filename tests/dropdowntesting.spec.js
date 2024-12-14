const{test, expect}=require('@playwright/test');

test('dropdownstesting' , async({browser})=>
{
 const context =await browser.newContext();
 const page= await context.newPage();
 await page.goto("https://leafground.com/select.xhtml");

 //dropdown with the select class
 const drop1=await page.locator("#j_idt87 > div > div:nth-child(1) > div:nth-child(1) > div > div > select")
await drop1.selectOption("Playwright");
//await page.pause();

//dropdwns without the select class
await page.locator('//*[@id="j_idt87:country_label"]').click();
await page.locator('//*[@id="j_idt87:country_1"]').click();




});