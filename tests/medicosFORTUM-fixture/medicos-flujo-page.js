import { expect } from "@playwright/test";
import { TodoPage } from "../fixtures/fortum-page";
import path from "path";

export class Medicos {
    /**
     * @param {import('playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.botones = new TodoPage(page);
        this.menu = this.page.locator('a');
        this.selecMedicos = this.page.getByRole('name', { name: 'Listado de Médicos' });
        this.altaMedico = this.page.getByRole('name', { name: 'Tramitar médico' });
        
        //Flujo de alta formularios
        this.primerForm = this.page.getByText('Datos generales');
        this.segundoForm = this.page.getByText('Datos personales');
        this.tercerForm = this.page.getByText('Datos bancarios');
        this.cuartoForm = this.page.getByText('Datos académicos');
        this.quintoForm = this.page.getByText('Consultorios y domicilio');
        this.sextoForm = this.page.getByText('Documentos y hospitales');
        this.septimoForm = this.page.getByText('SAT', { exact: true });


        //Formulario #1 Datos Generales
        this.fechaConversion = this.page.getByPlaceholder('dd/mm/yyyy');
        this.grupos = this.page.getByLabel('Nombre');
        this.retencion = this.page.getByPlaceholder('Retención 10%');
        this.factorFijo = this.page.getByPlaceholder('Factor fijo % (Médico comisió');
        this.vendedor = this.page.getByLabel('seller');
        //this.estado = this.page.getByLabel('Estado', { exact: true });
        this.estado1 = this.page.locator('#stateSelect');
        this.ciudad = this.page.locator('#ciudad');
        this.servicioFacturacion = this.page.getByLabel('Servicio de facturación');

        //Fomrulario #2 Datos personales
        this.apellidoPaterno = this.page.getByPlaceholder('Apellido paterno');
        this.apellidoMaterno = this.page.getByPlaceholder('Apellido materno');
        this.nombre = this.page.getByPlaceholder('Nombre', { exact: true });
        //this.nombre = this.page.locator('#name');
        this.segundoNombre = this.page.getByPlaceholder('Segundo nombre');
        this.fechaNacimiento = this.page.getByPlaceholder('Fecha de nacimiento');
        this.lugarNacimiento = this.page.getByPlaceholder('Lugar de nacimiento');
        this.genero = this.page.getByLabel('genero');
        this.celular = this.page.getByPlaceholder('Celular');
        this.emailMedico = this.page.getByPlaceholder('Email Médico');
        this.emailContador = this.page.getByPlaceholder('Email Contador');
        this.emailSecretario = this.page.getByPlaceholder('Email Secretaria');
        this.rfc = this.page.getByPlaceholder('RFC');
        this.curp = this.page.getByPlaceholder('CURP');
        this.web = this.page.getByPlaceholder('Web');
        this.cuentaClabeStp = this.page.getByPlaceholder('Cuenta Clabe STP');
        this.notas = this.page.getByPlaceholder('Notas')
        //Formulario #3 Datos bancarios
        this.cuentaBancaria = this.page.getByPlaceholder('Cuenta bancaria');
        this.clabe = this.page.getByPlaceholder('CLABE', { exact: true });
        this.banco = this.page.locator('#bankId');
        //this.estadoCuentaBoton = this.page.getByLabel('CURP');
        this.subirArchivo = this.page.locator('label');
        //Formulario #4 Datos académicos
        this.especialidad = this.page.getByLabel('Especialidad', { exact: true });
        this.estaCertificado = page.getByLabel('¿Está certificado?');
        this.cedula = this.page.getByLabel('Cédula', { exact: true });
        this.fechaCertificado = this.page.getByLabel('Fecha certificado');
        this.subespecialidad = this.page.getByLabel('Subespecialidad');
        //Formulario #5 consultorios y domicilio fiscal
        this.consultorio = this.page.getByLabel('Consultorio');
        this.direccion = this.page.locator('#direccion');
        this.descripcion = this.page.getByLabel('Descripción')
        this.colonia = this.page.getByLabel('Colonia');
        this.delegacionMunicipio = this.page.getByLabel('Delegación o municipio');
        this.ciudad5 = this.page.locator('#abp-modal-body #ciudad');
        this.estado2 = this.page.getByLabel('estado', { exact: true });
        this.codigoPostal = this.page.getByLabel('Código Postal');
        this.telefono1 = this.page.getByLabel('Teléfono 1');
        this.telefono2 = this.page.getByLabel('Teléfono 2');
        this.horarioAtencion = this.page.getByLabel('Horarios de atención');
        this.nombreContacto = this.page.getByRole('textbox', { name: 'Nombre' });
        this.puesto = this.page.getByLabel('Puesto');
        this.emailContacto = this.page.locator('#emailContact');
        this.telefonoContacto = this.page.getByLabel('Teléfono');
        this.direccionContacto = this.page.getByLabel('Dirección');
        this.notasContacto = this.page.getByLabel('Notas');
        //Formulario #6
        this.estudiosProfesionales = this.page.locator('#professionalStudies');
        this.actividadesCurriculares = this.page.locator('#curricularActivities');
        this.practicaInstitucional = this.page.locator('#institutionalPractice');
        this.organizaciones = this.page.locator('#organizations');
        this.servicioComunitario = this.page.locator('#communityService');
        //Formulario #7
        this.tipoPeronsa = this.page.getByLabel('tipoPersona');
        this.regimenFiscal = this.page.locator('#taxRegimeId');
        this.nombreComercial = this.page.getByPlaceholder('Nombre comercial');
        this.adminFacturacion = this.page.getByRole('checkbox');
        this.contraseniaSAT = this.page.getByPlaceholder('Password SAT');

    }
    /**
     * @param {string} text
     */
    async medicosHabilitado(){
        await this.menu.filter({ hasText: /^Médicos$/ }).click();
        await this.selecMedicos.click();
        await expect(this.altaMedico).toBeVisible();
        await this.altaMedico.click();
        await expect(this.primerForm).toBeVisible();
    }
    async form1DatosGenerales(){
        await this.fechaConversion.fill('2024-11-08');
        await this.grupos.selectOption('439');
        await this.retencion.fill('2.2');
        await this.factorFijo.fill('2.3');
        await this.vendedor.selectOption('3');
        await this.estado1.selectOption('17');
        await this.ciudad.fill('Gdl');
        await this.botones.botonSiguiente.click();
        await expect(this.segundoForm).toBeVisible();
    }
    async form2DatosPersonales(){
        await this.apellidoPaterno.fill('Yañez');
        await this.apellidoMaterno.fill('Martinez');
        await this.nombre.first().fill('Aurelio');
        await this.segundoNombre.fill('Jorge');
        await this.fechaNacimiento.fill('2024-11-08');
        await this.lugarNacimiento.fill('Quintana Roo');
        await this.genero.selectOption('H');
        await this.celular.fill('9988774455');
        await this.emailMedico.fill('medico@gmail.com');
        await this.emailContador.fill('contador@gmail.com');
        await this.emailSecretario.fill('secretaria@gmail.com');
        await this.rfc.fill("GOAP7903086U1");
        await this.curp.fill('GOAP790308HNLNBT05');
        await this.web.fill('www.sinweb.com');
        await this.cuentaClabeStp.fill('558899774455663322');
        await this.notas.first().fill('Notas referentes al médico que se esta dando de alta');
        await this.botones.botonSiguiente.click();
        await expect(this.tercerForm).toBeVisible();
    }
    async form3DatosBancarios(){
        await this.cuentaBancaria.fill('98653212457');
        await this.clabe.fill('653265898754122365');
        await this.banco.selectOption('13');
        //await this.estadoCuentaBoton.setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Subir estado de cuenta' }).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.botones.botonSiguiente.click();
        await expect(this.cuartoForm).toBeVisible();
    }
    async form4datosAcademicos(){
        await this.botones.botonAgregar.first().click();
        await this.especialidad.selectOption('31');
        await this.estaCertificado.selectOption('true');
        await this.cedula.fill('9865321245');
        await this.fechaCertificado.fill('2024-11-11');
        await this.botones.guardar.click();
        await this.botones.botonAgregar.nth(1).click();
        await this.subespecialidad.selectOption('123');
        await this.estaCertificado.selectOption('true');
        await this.cedula.fill('9865321242');
        await this.fechaCertificado.fill('2024-11-11');
        await this.botones.guardar.click();
        await this.botones.botonSiguiente.click();
        await expect(this.quintoForm).toBeVisible();
    }
    async form5consultoriosyDatosFiscales(){
        await this.botones.botonAgregar.first().click();
        await this.consultorio.fill('Consultorio diez');
        await this.direccion.fill('Calle Cortez #99');
        await this.descripcion.fill('Consultorio cerca del centro historico');
        await this.colonia.fill('Centro');
        await this.delegacionMunicipio.fill('Guadalajara');
        await this.ciudad5.fill('Guadalajara');
        await this.estado2.selectOption('17');
        await this.codigoPostal.fill('44890');
        await this.telefono1.fill('2598641252');
        await this.telefono2.fill('3398641252');
        await this.horarioAtencion.fill('L-V');
        await this.botones.guardar.click();
        await this.botones.botonAgregar.nth(1).click();
        await this.nombreContacto.fill('Juliana Gomez del Rio');
        await this.puesto.fill("Admin");
        await this.emailContacto.fill('emailcontacto@gmail.com');
        await this.telefonoContacto.fill('7854213256');
        await this.direccionContacto.fill('Avenida de los maestros #45');
        await this.notasContacto.fill('Notas acerca del contacto registrado');
        await this.botones.guardar.click();
        await this.botones.botonSiguiente.click();
        await expect(this.sextoForm).toBeVisible();
    }
    async form6documentosyHospitales(){
        await this.subirArchivo.filter({ hasText: 'Identificación oficial'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Comprobante de domicilio'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Título profesional'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Título especialidad'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Diploma certificación'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Cédula profesional'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Cédula especialidad'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        //await this.subirArchivo.filter({ hasText: 'CURP'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Cédula fiscal'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Resumen curricular'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.estudiosProfesionales.fill("Valido");
        await this.actividadesCurriculares.fill("Valido");
        await this.practicaInstitucional.fill("Valido");
        await this.organizaciones.fill("Valido");
        await this.servicioComunitario.fill("Valido");
        await this.botones.botonSiguiente.click();
        await expect(this.septimoForm).toBeVisible();
        
    }
    async form7Sat(){
        await this.tipoPeronsa.selectOption('1');
        await this.regimenFiscal.selectOption('55');
        await this.nombreComercial.fill('Asesores y Doctores');
        await this.subirArchivo.filter({ hasText: 'Constancia de situación fiscal'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.adminFacturacion.first().check();
        await this.subirArchivo.filter({ hasText: 'Certificado'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.subirArchivo.filter({ hasText: 'Clave privada para sellar'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.contraseniaSAT.fill('25eseesss');
        await this.subirArchivo.filter({ hasText: 'Logotipo factura'}).setInputFiles(path.join(__dirname,'../UpdateFiles/ATLAS_DR_JESUS_ZAPIEN_ANESTESIOLOGO_carta_App_example3.pdf'));
        await this.adminFacturacion.nth(1).check();
        await this.adminFacturacion.nth(2).check();
        await this.botones.guardarMedico.click();
    }
}