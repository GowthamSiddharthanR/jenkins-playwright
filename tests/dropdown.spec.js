import {test} from '@playwright/test';

test('Locating the elements' ,async({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    // select by index
    await page.selectOption('#dropdown', '1');
    await page.waitForTimeout(5000);
     // select by visible text
    await page.locator('#elementsPerPageSelect').selectOption({label: '50'});
    await page.waitForTimeout(5000);
    // select by value
    await page.selectOption('#country', 'Aland Islands');
    await page.waitForTimeout(5000);

    // to select mutiple action in dropdown
    // example code
    // await page.selectOption('#country',['India','Srilanka','japan']) 


    await page.goto('https://vinothqaacademy.com/drop-down');
    await page.pause();// to pause the execution


})