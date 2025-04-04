import { expect } from '@playwright/test';
import { Medicos } from '../medicosFORTUM-fixture/medicos-flujo-page';

export class formsGestical {
  /**
   * @param {import('@playwright/test').Page} page 
   */

  constructor(page) {
    this.page = page;
    //Item para subir archivos
    //this.subirArchivo = this.page.locator('label');
    //this.subirArchivo = this.page.getByRole('textbox', { name: 'Subir carta de autorización /' });
    //Formulario número 1
    this.formulario1 = this.page.getByText('Información General');
    this.selmedico = this.page.getByPlaceholder(' ', { exact: true }).first();
    this.medico = page.getByRole('button', { name: 'Alfonso Alba Villalobos' });
    this.fecha_registro = this.page.getByLabel('Fecha registro');
    this.persona_fisica = this.page.locator('#medicoAseguradora').nth(1);
    this.selaseguradora = this.page.getByPlaceholder(' ', { exact: true }).nth(1);
    this.aseguradora = this.page.getByRole('button', { name: 'SEGUROS ATLAS' });
    this.cartaArchivo = this.page.getByRole('tabpanel').locator('label');

    //Formulario número 2
    this.form2 = this.page.getByText('2Padecimientos y tratamientos');
    this.pVigente = this.page.getByLabel('¿Poliza vigente?');
    this.nPoliza = this.page.getByPlaceholder('Número póliza');
    this.nombrePaciente = this.page.getByPlaceholder('Nombre del Paciente');
    this.hospitalServicio = this.page.getByPlaceholder('Número folio');
    this.fechaIngreso = this.page.getByRole('tabpanel').getByPlaceholder('Fecha Ingreso');
    this.agregarDiagnostico = this.page.getByRole('button', { name: ' Agregar' });
    this.diagnostico = this.page.getByPlaceholder('diagnostico');
    this.tratamiento = this.page.getByPlaceholder('tratamiento');
    //Formulario número 3
    this.form3 = this.page.getByText('Envío a la aseguradora');
    this.numConfirmacionEnvio = this.page.getByLabel('Número confirmación envío');
    this.direccionEnvio = this.page.getByLabel('Dirección de envío');
    //Formulario número 4
    this.form4= this.page.getByText('Autorización /Rechazo', { exact: true });
    this.resolucionAseguradora = this.page.getByLabel('Autorizado');
    this.numSiniestro = this.page.getByLabel('Número de siniestro');
    this.numAutorizacion = this.page.getByLabel('Número de autorización');
    this.fechaAutorizacion = this.page.getByPlaceholder('Fecha autorización');
  }
}