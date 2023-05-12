import { test, expect } from '@playwright/test';


test('test trace', async ({ page,context }) => {
    await context.tracing.start({snapshots:true,screenshots:true});
    await page.goto('https://dev-reader.tcdcsdsadloud.com/jupiter/index.html#/');
    await page.getByRole('button', { name: 'Sign in with email' }).click();
    await page.getByLabel('Email').fill('sadasdsad.testing@novasignal.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Password').fill('asdsadsad');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.sidebar-menu-list > li:nth-child(3) > a').isVisible();
    await page.locator('.sidebar-menu-list > li:nth-child(3) > a').click();
    await page.getByPlaceholder('Search patients').click();
    await page.getByPlaceholder('Search patients').fill('exam');
    await page.getByRole('button', { name: 'search' }).click();
    await page.getByRole('link', { name: 'ssadsad' }).click();
    await page.getByRole('button', { name: 'NT' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.getByRole('button', { name: 'Logoff' }).click();
    await context.tracing.stop({path :'test2_trace.zip'})
    
  })