const { test, expect} = require("./page");

// test("LogIn FORTUM roles tests", async ({login_fortumPage, page}) =>{
//     await page.pause();
//     await login_fortumPage.LogIn("admin","1q2w3E*");
// });

test("Formulario 1, Información general", async({login_fortumPage, page})=>{
    await page.pause();
    await login_fortumPage.LogIn("admin","1q2w3E*");
    await login_fortumPage.formulario1();
    await login_fortumPage.formulario2();

});