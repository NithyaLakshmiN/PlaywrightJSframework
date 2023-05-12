// @ts-check
import { test, expect } from '@playwright/test';

test('selectors demo', async ({ page }) => {
  await page.goto('https://dev-reader.tsdsdsdcdcloud.com/jupiter/index.html#/');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.pause()
  await page.getByLabel('Email').fill('notificasdadsadasdsadtion.testing@novasignal.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').fill('asdsadsad');
  await page.getByRole('button', { name: 'Sign In' }).click();
  //to verify the validation message appears on the login screen
  await expect (page.locator('div').filter({ hasText: /^Password$/ })).toHaveCount(1);
  await expect (page).toHaveTitle("NovaGuide ViewsDsdasdasd")
  await expect(page).toHaveScreenshot() //first time we woont have screen shot from next time we can have screen shot
  
});