import { expect } from '@playwright/test';
import { botones_Gestical } from '../botones_FORTUM';
import { formsGestical } from '../formularios_alta_soluciones';
import path from "path";

export class alta_forms_Gestical{
  /**
   * @param {import('@playwright/test').Page} page 
   */

  constructor(page) {
    this.page = page;
    this.botones_gestical = new botones_Gestical(page);
    this.formularios_Gestical = new formsGestical(page);
  }
  /**
   * @param {string} text 
   */

  async forms_Gestical() {
    //Inicio form1
    await expect(this.botones_gestical.tramitarSolucion).toBeVisible();
    await this.botones_gestical.tramitarSolucion.click();
    //Inicio de carga información formulario 1
    await expect(this.formularios_Gestical.formulario1).toBeVisible();
    await this.formularios_Gestical.selmedico.click();
    await this.formularios_Gestical.medico.click();
    await this.formularios_Gestical.fecha_registro.fill('2024-12-31');
    await this.formularios_Gestical.persona_fisica.click();
    await this.formularios_Gestical.selaseguradora.fill('atla')
    await this.formularios_Gestical.aseguradora.click();
    await this.formularios_Gestical.cartaArchivo.filter({ hasText: 'Subir carta de autorización /' }).setInputFiles(path.join(__dirname,'../../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
    await this.botones_gestical.botonSiguiente.click();
    //Inicio de carga información formulario 2
    await expect(this.formularios_Gestical.form2).toBeVisible();
    await this.formularios_Gestical.pVigente.check();
    await this.formularios_Gestical.nPoliza.fill("numero poliza");
    //await this.formularios_Gestical.nFolio.fill("numero folio");
    await this.formularios_Gestical.nombrePaciente.fill("Nombre del paciente");
    await this.formularios_Gestical.fechaIngreso.fill('2024-10-31');
    await this.formularios_Gestical.agregarDiagnostico.click();
    await this.formularios_Gestical.diagnostico.fill("Diagnostico uno");
    await this.formularios_Gestical.tratamiento.fill("Tratamiento uno");
    await this.botones_gestical.guardar.click();
    await this.botones_gestical.botonSiguiente.click()
    //Inicio de carga información formulario 3
    await expect(this.formularios_Gestical.form3.first()).toBeVisible();
    await this.formularios_Gestical.numConfirmacionEnvio.fill("Envio a la aseguradora");
    await this.formularios_Gestical.direccionEnvio.fill("Dirección del envio de la aseguradora");
    await this.botones_gestical.botonSiguiente.click();
    //Inicio de carga información formulario 4
    await expect(this.formularios_Gestical.form4).toBeVisible();
    await this.formularios_Gestical.resolucionAseguradora.check();
    await this.formularios_Gestical.numSiniestro.fill('00024019179');
    await this.formularios_Gestical.numAutorizacion.fill('S12-105-00024019179');
    await this.formularios_Gestical.fechaAutorizacion.fill('2024-12-05');
    //await this.formularios_Gestical.subirArchivo.filter({ hasText: 'Subir carta de autorización /'}).setInputFiles(path.join(__dirname,'../../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
    await this.botones_gestical.botonSiguiente.click();    
  }
}