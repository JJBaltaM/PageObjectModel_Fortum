const { test, expect} = require("./page");

 test("LogIn Gestical", async ({login_Gestical, form1, page}) =>{
     await login_Gestical.LogIn("admin","1q2w3E*");
     await form1.forms_Gestical();
     await page.pause();
 });