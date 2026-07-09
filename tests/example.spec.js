import { test } from '@playwright/test';

test('launch a url', async({page})=>{
  await page.goto('https://www.instagram.com');
  await page.waitForTimeout(5000);
  await page.goto('https://www.google.com');
    await page.waitForTimeout(5000);
  await page.goto('https://www.facebook.com');
    await page.waitForTimeout(5000);
  await page.goto('https://www.whatsapp.com')
    await page.waitForTimeout(5000);

})

