import { test, expect } from '@playwright/test';
import { LoginPage } from './../pages/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('admin', '1q2w3E*')


//   await page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login?returnUrl=%2Finfo-solutions%2Fadd-solutions');
//   await page.getByPlaceholder('Usuario o correo electrónico').click();
//   await page.getByPlaceholder('Usuario o correo electrónico').fill('admin');
//   await page.getByPlaceholder('Contraseña').click();
//   await page.getByPlaceholder('Contraseña').fill('1q2w3E*');
//   await page.getByRole('button', { name: 'Account:LogIn' }).click();
});