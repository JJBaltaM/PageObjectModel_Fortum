const base = require("@playwright/test");
const { pasosAltaSolucion } = require("./soluciones_alta");
const { alta_forms_Gestical } = require("./forms1_7/form1_alta");

exports.test = base.test.extend({
    login_Gestical: async ({page}, use) =>{
        const login_Gestical = new pasosAltaSolucion(page);
        await login_Gestical.goto();
        await use(login_Gestical);
    },
    form1: async({page},use)=>{
        const form1 = new alta_forms_Gestical(page);
        await use(form1);
    }
    
});
exports.expect = base.expect;

/*exports.test = base.test.extend({
    login_fortumPage: async ({page}, use) =>{
        //Set up the login fortum
        const login_fortumPage = new TodoPage(page);
        await login_fortumPage.goto();
        await use(login_fortumPage);
    },
    alta_medico: async({page}, use)=>{
        const alta_medico = new Medicos(page);
        await use(alta_medico);
    },
    alta_empresa: async({page}, use) =>{
        const alta_empresa = new Empresas(page);
        await use(alta_empresa);
    }
});
exports.expect = base.expect;*/