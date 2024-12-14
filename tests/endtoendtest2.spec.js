const {test, expect}=require('@playwright/test');

test.only('sample end to end', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("[title='Radiant Tee']").first().scrollIntoViewIfNeeded();
    await page.locator("[title='Radiant Tee']").click();
    await page.locator("#product-addtocart-button").click();
    const erorsize=await page.locator('//div[@id="super_attribute[143]-error"]').textContent();
    const erorcolor=await page.locator('//div[@id="super_attribute[93]-error"]').textContent();
    await expect(erorsize.trim()).toBe("This is a required field.");
    await expect(erorcolor.trim()).toBe("This is a required field.");

    await page.locator("[option-label='XS']").click();
    await page.locator('[option-label="Blue"]').click();
    await page.locator("#product-addtocart-button").click();

    const cartsuccessmsg=await page.locator("//div[contains(normalize-space(text()), 'You added Radiant')]").textContent();
    await expect(cartsuccessmsg.trim()).toBe("You added Radiant Tee to your shopping cart.");
    await page.locator(".showcart").click();
    //await page.pause();
    await page.locator("#top-cart-btn-checkout").click();
    await page.getByRole('textbox', { name: 'Email Address'}).fill("sample@email.com");
    await page.getByRole('textbox',{name: 'First Name' }).fill("sample");
    await page.getByRole('textbox' ,{name:'Last Name' }).fill("sample2");

    await page.getByRole('textbox',{name: 'Company'}).fill("samplecompany");
    await page.getByRole('textbox', {name:'Street Address'}).fill("sampleaddress");
    await page.getByRole('textbox',{name:'City'}).fill("samplecity");
    await page.getByRole('textbox',{name:'Zip/Postal Code'}).fill("123456");
    
    await page.selectOption("#region_id", {label:'Alabama'});
    await page.selectOption('#NTA3WAM', 'AF');







});