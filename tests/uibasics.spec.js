const {test, expect}=require('@playwright/test');

test('First playwright test', async ({browser})=>
{
const Context=await browser.newContext();
const page=await Context.newPage();
await page.goto("https://www.youtube.com/");
console.log(await page.title());
expect(page).toHaveTitle("YouTube");
//const title=await page.title();
//console.log(title);
});

test('second playwright test', async({page})=>
{
    await page.goto("https://www.bing.com/search?filters=ufn%3a%22Google%22+sid%3a%22f39b29ec-05ee-d6cb-3070-ddaa0fb00ee0%22&q=google&cvid=523d34f0b38d4cdb817cee75e9e3c569&gs_lcrp=EgRlZGdlKgYIAxAuGEAyCQgAEEUYOxj5BzIGCAEQLhhAMgYIAhBFGDkyBggDEC4YQDIGCAQQLhhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQg2MDg1ajBqOagCCLACAQ&FORM=ANAB01&PC=DCTS");
});