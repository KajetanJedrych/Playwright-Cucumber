import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test';

let browser: Browser;
let page: Page;


Given('User navigates to the application', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
});


Given('User enter the username as {string}', async function (username) {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(username);

});

Given('User enter the password as {string}', async function (password) {
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(password);
});

When('User click on the login button', async function () {
    await page.locator('[data-test="login-button"]').click();
});

Then('Login should be success', async function () {
    await expect(page.locator('xpath=//*[@id="header_container"]/div[2]/span')).toHaveText('Products');
    await browser.close();
});

When('Login should fail', async function () {
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await browser.close();
});