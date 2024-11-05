import { test, expect } from '@playwright/test';
import { LoginPage } from './../pages/login';

test('test', async ({ page }) => {
    await page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login');
    await page.getByPlaceholder('Usuario o correo electrónico').click();
    await page.getByPlaceholder('Usuario o correo electrónico').fill('admin');
    await page.getByPlaceholder('Usuario o correo electrónico').press('Tab');
    await page.getByPlaceholder('Contraseña').fill('1q2w3E*');
    await page.getByPlaceholder('Contraseña').press('Enter');
    await page.locator('.lpx-icon').first().click();
    await page.locator('a').filter({ hasText: /^Soluciones$/ }).click();
    await page.getByRole('link', { name: 'Solución' }).click();
    await page.locator('a').filter({ hasText: /^Médicos$/ }).click();
    await page.getByRole('link', { name: 'Listado de Médicos' }).click();
    await page.locator('a').filter({ hasText: 'Empresas' }).first().click();
    await page.getByRole('link', { name: 'Empresas' }).click();
    //const Login = new LoginPage(page)

    //await Login.gotoLoginPage()
    //await Login.login('admin', '1q2w3E*')

    //await Login.login('comercial', 'Comercial90*')
    //await page.locator('a').filter({ hasText: /^Soluciones$/ }).click();
    // await page.getByRole('link', { name: 'Solución' }).click();
    // await page.getByRole('button', { name: 'Tramitar Solución' }).click();
    // await page.locator('#empresaAseguradora_0').check();
    // await page.getByRole('tabpanel').locator('#floatingSelect').selectOption('66');
    // await page.getByLabel('Fecha Registro').fill('2024-10-18');
    // await page.getByLabel('Médico Safimedic').check();
    // await page.locator('#insuranceDto_id').selectOption('23');
    // await page.getByPlaceholder('Estado Red /Cuenta Clabe').click();
    // await page.getByPlaceholder('Estado Red /Cuenta Clabe').fill('En proceso de verificacion');
    // await page.locator('#procedureDto_id').selectOption('4');
    // await page.waitForTimeout(10000);
    // await page.getByRole('button', { name: 'Siguiente' }).click();


    await page.waitForTimeout(10000);


    //   await page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login?returnUrl=%2Finfo-solutions%2Fadd-solutions');
    //   await page.getByPlaceholder('Usuario o correo electrónico').click();
    //   await page.getByPlaceholder('Usuario o correo electrónico').fill('admin');
    //   await page.getByPlaceholder('Contraseña').click();
    //   await page.getByPlaceholder('Contraseña').fill('1q2w3E*');
    //   await page.getByRole('button', { name: 'Account:LogIn' }).click();

    //   await page.locator('a').filter({ hasText: /^Soluciones$/ }).click();
    //   await page.getByRole('link', { name: 'Solución' }).click();
    //   await page.getByRole('button', { name: 'Tramitar Solución' }).click();
    //   await page.locator('#empresaAseguradora_0').check();
    //   await page.getByRole('tabpanel').locator('#floatingSelect').selectOption('66');
    //   await page.getByLabel('Fecha Registro').fill('2024-10-18');
    //   await page.getByLabel('Médico Safimedic').check();
    //   await page.locator('#insuranceDto_id').selectOption('23');
    //   await page.getByPlaceholder('Estado Red /Cuenta Clabe').click();
    //   await page.getByPlaceholder('Estado Red /Cuenta Clabe').fill('En proceso de verificacion');
    //   await page.locator('#procedureDto_id').selectOption('4');
    //   await page.getByRole('button', { name: 'Siguiente' }).click();
});