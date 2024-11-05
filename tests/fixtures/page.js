const base = require("@playwright/test");
const { TodoPage } = require("./fortum-page");

exports.test = base.test.extend({
    login_fortumPage: async ({page}, use) =>{
        //Set up the login fortum
        const login_fortumPage = new TodoPage(page);
        await login_fortumPage.goto();
        await use(login_fortumPage)  
    },
});
exports.expect = base.expect;