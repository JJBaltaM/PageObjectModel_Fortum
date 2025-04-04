import { expect } from '@playwright/test';
export class botones_Gestical {
    /**
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.tramitarSolucion = this.page.getByRole('button', { name: 'Tramitar Solucion' });
        this.botonSiguiente = this.page.getByRole('button', { name: 'Siguiente' });
        this.botonAnterior = this.page.getByRole('button', { name: 'Anterior' });
        this.guardar = this.page.getByRole('button', { name: 'Guardar' });
        this.botonAgregar = this.page.getByRole('button', { name: '+ Agregar' });
        this.guardarMedico = this.page.getByRole('button', { name: 'Agregar' });
    }
}