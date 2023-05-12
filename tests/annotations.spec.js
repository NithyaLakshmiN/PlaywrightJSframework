import { test, expect, chromium } from '@playwright/test';

test.skip('skip this test', async ({ page }) => {
    // This test will be skipped
  });
 
 
 //05:20 will mark test as failure
 //will show error if the test does not fail
 test('not yet ready', async ({ page }) => {
    test.fail();
  });
 
 //06:39 test will be aborted
 test.fixme('test to be fixed', async ({ page }) => {
  });
 
 //07:36 marks the test as slow and triples the test timeout
 test('slow test', async ({ page }) => {
    test.slow();
  });
 
 //08:21 runs specific tests
 test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project
  });
 
 //10:28 Tags
 //You can tag your tests with tags like
 //@smoke
 //@sanity
 //@fast  @slow 
 //and only run the tests that have the certain tag
 
 