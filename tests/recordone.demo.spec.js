import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=%27https%3A%2F%2Fdevddd-reader.tcdcloud.com%2Fjupiter%2Findex.html%23%2F&oq=%27https%3A%2F%2Fdev-reader.tcdcloud.com%2Fjupiter%2Findex.html%23%2F&aqs=chrome..69i57.981j0j2&sourceid=chrome&ie=UTF-8');
  await page.goto('https://dev-reader.tcdcloud.com/jupiter/index.html#/');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('user');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').fill('pwd');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://dev-reader.tcdcloud.com/jupiter/index.html#/organizationcsafdfdafsfsfs/11eaea0a-668b-88c2-9aa8-00155df22ce7/home');
  await page.getByRole('button', { name: 'Newrew' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logoff' }).click();
});