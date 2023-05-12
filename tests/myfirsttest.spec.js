//include playwright module first
import { test, expect } from '@playwright/test' //since this const , this value would not change throughout and require is nodejs(node_module/lib) built in function
test("My First Test",async({page})=>{
  await page.goto('https://dev-readerss.tcdcloud.com/jupiter/index.html#/') //async keyword returns a promise
  await expect(page).toHaveTitle('NovaGuide View')


})