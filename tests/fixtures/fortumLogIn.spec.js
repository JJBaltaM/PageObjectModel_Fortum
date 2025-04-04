const { test, expect} = require("./page");

// test("LogIn FORTUM roles tests", async ({login_fortumPage, page}) =>{
//     await page.pause();
//     await login_fortumPage.LogIn("admin","1q2w3E*");
// });

test("Formulario 1, Información general", async({login_fortumPage, page})=>{
    //await page.pause();
    await login_fortumPage.LogIn("admin","1q2w3E*");
    await login_fortumPage.formulario1();
    await login_fortumPage.formulario2();
    await login_fortumPage.formulario3();
});

test("Alta medico", async({login_fortumPage,alta_medico,page})=>{
    
    await login_fortumPage.LogIn("admin","1q2w3E*");
    await alta_medico.medicosHabilitado();
    await alta_medico.form1DatosGenerales();
    await alta_medico.form2DatosPersonales();
    await alta_medico.form3DatosBancarios();
    await alta_medico.form4datosAcademicos();
    await alta_medico.form5consultoriosyDatosFiscales();
    await alta_medico.form6documentosyHospitales();
    await alta_medico.form7Sat();
    await page.pause();
});

test("Alta empresas", async({login_fortumPage,alta_empresa, page})=>{
    await page.pause();
    await login_fortumPage.LogIn("admin","1q2w3E*");
    await alta_empresa.empresaVisible();
});