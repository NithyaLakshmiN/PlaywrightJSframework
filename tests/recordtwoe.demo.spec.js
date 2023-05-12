import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test graph button in patient details page', async ({ page }) => {
  await page.goto('https://dev-reader.tcdclsdsdsdoud.com/jupiter/index.html#/');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('notifsdsadasddion.testing@novasignal.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('wwqewqe');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Search Patients' }).click();
  await page.getByPlaceholder('Search patients').click();
  await page.getByPlaceholder('Search patients').fill('exam');
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('link', { name: 'Exam Monitoring Trendplot 906734' }).click();
  await page.getByRole('tab', { name: 'Graphs' }).click();
  await page.getByRole('button', { name: 'Create New Graph' }).click();
  await page.getByRole('button', { name: 'sdasdasdsad' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logoff' }).click();
});