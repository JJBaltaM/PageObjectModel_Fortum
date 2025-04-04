const base = require("@playwright/test");
export class elementosGestical {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        //LogIn
        this.inputUser = this.page.getByPlaceholder('Usuario o correo electrónico');
        this.inputPassword = this.page.getByPlaceholder('Contraseña');
        this.login_button = this.page.getByRole('button', { name: 'LogIn' });
        //Buscar boton de dar de alta una solución
        this.getHome = this.page.locator('a', { hasText: 'Dashboard Soluciones' });
        this.visibleMenu = this.page.locator('.lpx-icon').first();
        this.menu = this.page.locator('a').filter({ hasText: /^Soluciones$/ });
        this.solucion = this.page.getByRole('link', { name: 'Solución' });
    }
}