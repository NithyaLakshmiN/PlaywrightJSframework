// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('slowmotion demo', async ({  }) => {

const browser = await chromium.launch({
slowMo:500,
headless:false

});
const context  = await browser.newContext({
recordVideo:
{
  dir : 'videos',
  size :{width:800 ,height:600}
}

});
const page =await context.newPage();
await page.goto('https://dev-reader.tcsdasdsaddcloud.com/jupiter/index.html#/');
await page.getByRole('button', { name: 'Sign in with email' }).click();
//await page.pause()
await page.getByLabel('Email').fill('sadsadsad.tesasdsadting@novasignal.com');
await page.getByRole('button', { name: 'Next' }).click();
await page.getByLabel('Password').fill('sadsadsd');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Sign In' }).click();
//await page.goto('https://dev-reader.tcdcloud.com/jupiter/indexsdasadsad.html#/organizations/11eaea0a-668b-88c2-9aa8-00155df22ce7/home');
await page.getByRole('button', { name: 'sadsadasd' }).click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
await page.getByRole('button', { name: 'Logoff' }).click();
await context.close()
  
});