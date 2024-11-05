const { expect } = require("@playwright/test")

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByPlaceholder('Usuario o correo electrónico')
        //this.username_textbox = page.getByLabel('Usuario o correo electrónico')
        this.password_textbox = page.getByPlaceholder('Contraseña')
        this.login_button = page.getByRole('button', { name: 'LogIn' })
        this.home = page.getByRole('link', {name: 'Dashboard Soluciones'})
    }

    async gotoLoginPage(){
        await this.page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login')
        
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await expect(this.home).toBeVisible()
        await this.page.pause()
    }
    async soluc(solucion){
        console.log("error",solucion)
        //await this.soluciones.filter({hasText: solucion }).click()
    }
}