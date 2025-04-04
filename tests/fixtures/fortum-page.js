import { expect } from '@playwright/test';
import { Medicos } from '../medicosFORTUM-fixture/medicos-flujo-page';

export class TodoPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */

  constructor(page) {
    this.page = page;
    this.medicosPage = new Medicos(page);
    //this.inputUser = this.page.getByPlaceholder('Usuario o correo electrónico');
    //this.inputPassword = this.page.getByPlaceholder('Contraseña');
    //this.login_button = this.page.getByRole('button', { name: 'LogIn' });
    //this.visibleMenu = this.page.locator('.lpx-icon').first();
    //this.getHome = this.page.locator('a', { hasText: 'Dashboard Soluciones' });
    //this.menu = this.page.locator('a').filter({ hasText: /^Soluciones$/ });
    //this.solucion = this.page.getByRole('link', { name: 'Solución' });
    //Botones de navegación
    // this.tramitarSolucion = this.page.getByRole('button', { name: 'Tramitar Solucion' });
    // this.botonSiguiente = this.page.getByRole('button', { name: 'Siguiente' });
    // this.botonAnterior = this.page.getByRole('button', { name: 'Anterior' });
    // this.guardar = this.page.getByRole('button', { name: 'Guardar' });
    // this.botonAgregar = this.page.getByRole('button', { name: '+ Agregar'});
    // this.guardarMedico = this.page.getByRole('button', { name: 'Agregar'});
    
    //Inicio de los localizadores para el alta de soluciones
    //Formulario #1 información general
    // this.form1 = this.page.getByText('Información General');
    // this.tipoCliente = this.page.locator('#empresaAseguradora_0');
    // this.Doctor = this.page.getByRole('tabpanel').locator('#floatingSelect');
    // this.fechaRegistro = this.page.getByLabel('Fecha Registro');
    // this.tipoMedico = this.page.locator('#medicoAseguradora');
    // this.aseguradora = this.page.locator('#insuranceDto_id');
    // this.procedimiento = this.page.locator('#procedureDto_id');

    //Formulario #2 Padecimientos y tratamientos
    // this.form2 = this.page.getByText('Padecimientos y tratamientos');
    // this.pVigente = this.page.getByLabel('¿Poliza vigente?');
    // this.nPoliza = this.page.getByPlaceholder('Número póliza');
    // this.nFolio = this.page.getByPlaceholder('Número folio');
    // this.nombrePaciente = this.page.getByPlaceholder('Nombre del Paciente');
    // this.fechaIngreso = this.page.getByRole('tabpanel').getByPlaceholder('Fecha Ingreso');
    // this.agregarDiagnostico = this.page.getByRole('button', { name: ' Agregar' });
    // this.diagnostico = this.page.getByPlaceholder('diagnostico');
    // this.tratamiento = this.page.getByPlaceholder('tratamiento');

    //Formulario #3 Envio a la aseguradora
    // this.numConfirmacionEnvio = this.page.getByLabel('Número confirmación envío');
    // this.direccionEnvio = this.page.getByLabel('Dirección de envío');

    //Formulario #4 Autorización /Rechazo
    this.form4= this.page.getByText('Autorización /Rechazo');
    this.resolucionAseguradora = this.page.getByLabel('Autorizado');
    this.numSiniestro = this.page.getByLabel('Número de siniestro');
    this.numAutorizacion = this.page.getByLabel('Número de autorización');
    this.fechaAutorizacion = this.page.getByPlaceholder('Fecha autorización');
  }

  async goto() {
    await this.page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login');
  }

  /**
   * @param {string} text 
   */
  // async LogIn(user, pass) {
  //   await this.inputUser.fill(user);
  //   await this.inputPassword.fill(pass);
  //   await this.login_button.click();
  //   await this.getHome.first().click();
  //   //await this.inputBox.press('Enter');
  // }

  // async formulario1() {
  //   await this.visibleMenu.click();
  //   await this.menu.click();
  //   await this.solucion.click();
  //   await expect(this.tramitarSolucion).toBeVisible();
  //   await this.tramitarSolucion.click();
  //   await expect(this.form1).toBeVisible();
  //   await this.tipoCliente.check();
  //   await this.Doctor.selectOption('103')
  //   await this.fechaRegistro.fill('2024-10-31');
  //   await this.tipoMedico.nth(2).check();
  //   await this.aseguradora.selectOption('7');
  //   await this.procedimiento.selectOption('4');
  //   await this.botonSiguiente.click()
  // }

  // async formulario2(){
  //   await expect(this.form2.first()).toBeVisible();
  //   await this.pVigente.check();
  //   await this.nPoliza.fill("numero poliza");
  //   await this.nFolio.fill("numero folio");
  //   await this.nombrePaciente.fill("Nombre del paciente");
  //   await this.fechaIngreso.fill('2024-10-31');
  //   await this.agregarDiagnostico.click();
  //   await this.diagnostico.fill("Diagnostico uno");
  //   await this.tratamiento.fill("Tratamiento uno");
  //   await this.guardar.click();
  //   await this.botonSiguiente.click();
  // }

  // async formulario3(){
  //   await this.numConfirmacionEnvio.fill("Envio a la aseguradora");
  //   await this.direccionEnvio.fill("Dirección del envio de la aseguradora");
  //   await this.botonSiguiente.click();
  // }
  async formulario4(){
    await expect(this.form4).toBeVisible();
    await this.resolucionAseguradora.check();
    await this.numSiniestro.fill('00024019179');
    await this.numAutorizacion.fill('S12-105-00024019179');
    await this.fechaAutorizacion.fill('2024-12-05');
    await this.medicosPage.subirArchivo.filter({ hasText: 'Subir carta de autorización /Rechazo'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
    await this.botonSiguiente.click();
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