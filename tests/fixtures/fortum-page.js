import { expect } from '@playwright/test';

export class TodoPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */

  constructor(page) {
    this.page = page;
    this.inputUser = this.page.getByPlaceholder('Usuario o correo electrónico');
    this.inputPassword = this.page.getByPlaceholder('Contraseña');
    this.login_button = this.page.getByRole('button', { name: 'LogIn' });
    this.visibleMenu = this.page.locator('.lpx-icon').first();
    this.getHome = this.page.locator('a', { hasText: 'Dashboard Soluciones' });
    this.menu = this.page.locator('a').filter({ hasText: /^Soluciones$/ });
    this.solucion = this.page.getByRole('link', { name: 'Solución' });
    //Botones de navegación
    this.tramitarSolucion = this.page.getByRole('button', { name: 'Tramitar Solución' });
    this.botonSiguiente = this.page.getByRole('button', { name: 'Siguiente' });
    this.botonAnterior = this.page.getByRole('button', { name: 'Anterior' });

    //Inicio de los localizadores para el alta de soluciones
    //Formulario #1 información general
    this.form1 = this.page.getByText('Información General');
    this.tipoCliente = this.page.locator('#empresaAseguradora_0');
    this.Doctor = this.page.getByRole('tabpanel').locator('#floatingSelect');
    this.fechaRegistro = this.page.getByLabel('Fecha Registro');
    this.tipoMedico = this.page.locator('#medicoAseguradora');
    this.aseguradora = this.page.locator('#insuranceDto_id');
    this.procedimiento = this.page.locator('#procedureDto_id');

    //Formulario #2 Padecimientos y tratamientos
    this.form2 = this.page.getByText('Padecimientos y tratamientos');
    this.pVigente = this.page.getByLabel('¿Póliza vigente?');
    this.nPoliza = this.page.getByPlaceholder('Número póliza');
    this.nFolio = this.page.getByPlaceholder('Número folio');
    this.nombrePaciente = this.page.getByPlaceholder('Nombre del Paciente');
  }

  async goto() {
    await this.page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login');
  }

  /**
   * @param {string} text 
   */
  async LogIn(user, pass) {
    await this.inputUser.fill(user);
    await this.inputPassword.fill(pass);
    await this.login_button.click();
    await this.getHome.first().click();
    //await this.inputBox.press('Enter');
  }

  async formulario1() {
    await this.visibleMenu.click();
    await this.menu.click();
    await this.solucion.click();
    await this.tramitarSolucion.click();
    await expect(this.form1).toBeVisible();
    await this.tipoCliente.check();
    await this.Doctor.selectOption('66')
    await this.fechaRegistro.fill('2024-10-31');
    await this.tipoMedico.nth(2).check();
    await this.aseguradora.selectOption('7');
    await this.procedimiento.selectOption('4');
    await this.botonSiguiente.click()
  }

  async formulario2(){
    await expect(this.form2.first()).toBeVisible();
    await this.pVigente.check();
    await this.nPoliza.fill("numero poliza");
    await this.nFolio.fill("numero folio");
    await this.nombrePaciente.fill("Nombre del paciente");
  }
  // async remove(text: string) {
  //   const todo = this.todoItems.filter({ hasText: text });
  //   await todo.hover();
  //   await todo.getByLabel('Delete').click();
  // }

  // async removeAll() {
  //   while ((await this.todoItems.count()) > 0) {
  //     await this.todoItems.first().hover();
  //     await this.todoItems.getByLabel('Delete').first().click();
  //   }
  // }
}