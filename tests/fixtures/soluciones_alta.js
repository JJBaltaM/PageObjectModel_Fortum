import { elementosGestical } from './pagina_FORTUM';

export class pasosAltaSolucion {
  /**
   * @param {import('@playwright/test').Page} page 
   */

  constructor(page) {
    this.page = page;
    this.baselementos = new elementosGestical(page);
  }
  async goto() {
    await this.page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login');
  }
  /**
   * @param {string} text 
   */

async LogIn(user, pass) {
    //LogIn Gestical
    await this.baselementos.inputUser.fill (user);
    await this.baselementos.inputPassword.fill(pass);
    await this.baselementos.login_button.click();
    //Busqueda de boton "Tramitar solucion" 
    await this.baselementos.getHome.first().click();
    await this.baselementos.visibleMenu.click();
    await this.baselementos.menu.click();
    await this.baselementos.solucion.click();
    }
}