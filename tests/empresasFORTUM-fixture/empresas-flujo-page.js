import { expect } from "@playwright/test";
import { Medicos } from "../medicosFORTUM-fixture/medicos-flujo-page";

export class Empresas {

    /**
     * @param {import('playwright/test').Page} page
     */

    constructor(page){
        this.page = page;
        this.botonesMedicos = new Medicos(page);
        this.empresaMenu = this.page.locator('a'); //Busca el apartado empresa
        this.selecEmpresas = this.page.getByRole('link', { name: 'Empresas', exact: true });
        this.altaEmpresa = this.page.getByRole('button', { name: 'Tramitar empresa' });
        this.regimenesFiscales = this.page.getByLabel('Regímenes fiscales');
    }
    /**
     * @param {string} text
     */
    async empresaVisible(){
        await this.empresaMenu.filter({ hasText: 'Empresas' }).first().click();
        await this.selecEmpresas.click();
        await this.altaEmpresa.click();
        await expect(this.botonesMedicos.septimoForm).toBeVisible();
    }
    async form1SAT(){
        
    }
}