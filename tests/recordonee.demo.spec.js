import { test, expect } from '@playwright/test';

test('verify pateintlink in home page', async ({ page }) => {
  await page.goto('https://dev-reader.tcdsdsdsdcloud.com/jupiter/index.html#/');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByLabel('Email').fill('notificatsdsdsdion.testing@novasignal.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').fill('eddd');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.sidebar-menu-list > li:nth-child(3) > a').isVisible();
  await page.locator('.sidebar-menu-list > li:nth-child(3) > a').click();
  await page.getByPlaceholder('Search patients').click();
  await page.getByPlaceholder('Search patients').fill('exam');
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('link', { name: 'Exam Monitoring Trendplot 906734' }).click();
  await page.getByRole('button', { name: 'NT' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logoff' }).click();
});