exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByPlaceholder('Usuario o correo electrónico')
        this.password_textbox = page.getByPlaceholder('Contraseña')
        this.login_button = page.getByRole('button', { name: 'Account:LogIn' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://nice-mushroom-0e545550f-qa.eastus2.5.azurestaticapps.net/account/login?returnUrl=%2Finfo-solutions%2Fadd-solutions')
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
}