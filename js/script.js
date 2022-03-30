
const actualizarContador = () => {

    const textArea = document.getElementById('entrada-datos');
    const elemContador = document.getElementById('contador');
    let query = textArea.value;
    elemContador.innerHTML = textArea.value;


}

const url = 'https://pre.ifacturatransfiriendo.transfiriendo.com/DianV2WCF/FacturaService.svc';
//request de serena 19-03-2022
let data = `<?xml version="1.0" encoding="UTF-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
        <UserName>administradorti</UserName>
        <Password>!QAZxsw2ZLÑ</Password>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <generarDocumento xmlns="http://tempuri.org/">
            <documentoElectronico xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    	xmlns:xsd="http://www.w3.org/2001/XMLSchema">
                <documento>
                    <identificadorTransaccion>3b745eb7-5bcf-4bc6-ba5e-ac234012fb37</identificadorTransaccion>
                    <NITFacturador>900482242</NITFacturador>
                    <prefijo>SM</prefijo>
                    <numeroDocumento>18330</numeroDocumento>
                    <tipoDocumento>1</tipoDocumento>
                    <subTipoDocumento>01</subTipoDocumento>
                    <tipoOperacion>SS-CUFE</tipoOperacion>
                    <plantilla>2</plantilla>
                    <generaRepresentacionGrafica>true</generaRepresentacionGrafica>
                    <fechaEmision>2022-03-19</fechaEmision>
                    <horaEmision>09:57:03-05:00</horaEmision>
                    <fechaVencimiento>2022-04-18</fechaVencimiento>
                    <fechaInicioPeriodo>2022-03-03</fechaInicioPeriodo>
                    <horaInicioPeriodo>09:10:06-05:00</horaInicioPeriodo>
                    <fechaFinPeriodo>2022-03-03</fechaFinPeriodo>
                    <horaFinPeriodo>10:10:06-05:00</horaFinPeriodo>
                    <moneda>COP</moneda>
                    <codigoCentroCostos>CHSM</codigoCentroCostos>
                    <contactoEntrega>
                        <nombre>CLAUDIA POSSE VELASQUEZ</nombre>
                    </contactoEntrega>
                    <notificaciones>
                        <notificacion>
                            <tipo>1</tipo>
                            <valor>
                                <string>RECEPCIONCUENTASMEDICAS@COLMEDICA.COM</string>
                            </valor>
                        </notificacion>
                    </notificaciones>
                    <formaPago>
                        <tipoPago>2</tipoPago>
                        <codigoMedio>ZZZ</codigoMedio>
                        <fechaVencimiento>2022-03-19</fechaVencimiento>
                    </formaPago>
                    <informacionesAdicionales>
                        <informacionAdicional>
                            <nombre>CodigoHabitacion</nombre>
                            <valor>130010332101</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>valoraPagar</nombre>
                            <valor>449186</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroIngreso</nombre>
                            <valor>2203000504</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>CodigoAsistenciaComplementaria</nombre>
                            <valor>130010332101</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroAutorizacion</nombre>
                            <valor>(221-25280520|2022-03-03||)</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TipoDocumentoPaciente</nombre>
                            <valor>13</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroDocumentoPaciente</nombre>
                            <valor>22613251</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>PrimerNombrePaciente</nombre>
                            <valor>BRIANA</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>SegundoNombrePaciente</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>PrimerApellidoPaciente</nombre>
                            <valor>ROMERO</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>SegundoApellidoPaciente</nombre>
                            <valor>AVILA</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>FechaNacimientoPaciente</nombre>
                            <valor>1980-04-22</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TipoAfiliacionPaciente</nombre>
                            <valor>1</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>EdadPaciente</nombre>
                            <valor>42</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>SexoPaciente</nombre>
                            <valor>F</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>EsMultipaciente</nombre>
                            <valor>FALSE</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TipoServicio</nombre>
                            <valor>3</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroAtencionConvenio</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>CodigoMedico</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>DiasEstancia</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>DiagnosticoIngreso</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>DiagnosticoEgreso</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>SociedadMedica</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>PolizaAtencion</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>PolizaAtencionAseguradora</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroHistoria</nombre>
                            <valor>22613251</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>CodigoConvenio</nombre>
                            <valor>22</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>CodigoFacturador</nombre>
                            <valor>SMA49952</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TipoDocumentoFacturador</nombre>
                            <valor>13</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NumeroDocumentoFacturador</nombre>
                            <valor>1047449952</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>NombreFacturador</nombre>
                            <valor>EDUARDO</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>ApellidoFacturador</nombre>
                            <valor>LUIS GOMEZ GONZALEZ</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>Idpacienteconvenio</nombre>
                            <valor>22</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>ObservacionesFactura</nombre>
                            <valor></valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TotalFacturaDolares</nombre>
                            <valor>0</valor>
                        </informacionAdicional>
                        <informacionAdicional>
                            <nombre>TotalFacturaDolaresMoneda</nombre>
                            <valor></valor>
                        </informacionAdicional>
                    </informacionesAdicionales>
                    <extensionesSalud>
                        <extensionSalud>
                            <codigoPrestador>130010332101</codigoPrestador>
                            <tipoDocumentoIdentificacion>CC</tipoDocumentoIdentificacion>
                            <numeroIdentificacion>22613251</numeroIdentificacion>
                            <primerApellido>ROMERO</primerApellido>
                            <segundoApellido>AVILA</segundoApellido>
                            <primerNombre>BRIANA</primerNombre>
                            <tipoDeUsuario>CONTRIBUTIVO BENEFICIARIO</tipoDeUsuario>
                            <modalidadesContratacion>POR SERVICIO</modalidadesContratacion>
                            <cobertura>COBERTURA RÉGIMEN ESPECIAL O EXCEPCIÓN</cobertura>
                            <numeroAutorizacion>
                                <string>221-25280520</string>
                            </numeroAutorizacion>
                            <fechaInicioFacturacion>2022-03-03</fechaInicioFacturacion>
                            <fechaFinFacturacion>2022-03-03</fechaFinFacturacion>
                            <copago>0</copago>
                            <cuotaModeradora>0</cuotaModeradora>
                            <cuotaRecuperacion>0</cuotaRecuperacion>
                            <pagosCompartidos>0</pagosCompartidos>
                        </extensionSalud>
                    </extensionesSalud>
                </documento>
                <adquiriente>
                    <identificacion>800106339</identificacion>
                    <tipoIdentificacion>31</tipoIdentificacion>
                    <codigoInterno>22</codigoInterno>
                    <matriculaMercantil>0</matriculaMercantil>
                    <razonSocial>COLMEDICA - PIEDRAS PRECIOSAS</razonSocial>
                    <nombreSucursal>BOGOTA D.C.-FONTIBON</nombreSucursal>
                    <correo>RECEPCIONCUENTASMEDICAS@COLMEDICA.COM</correo>
                    <telefono>3240250 -</telefono>
                    <sitio>RECEPCIONCUENTASMEDICAS@COLMEDICA.COM</sitio>
                    <responsabilidadesRUT>
                        <string>O-13</string>
                    </responsabilidadesRUT>
                    <tipoPersona>1</tipoPersona>
                    <ubicacion>
                        <pais>CO</pais>
                        <codigoMunicipio>11001</codigoMunicipio>
                        <ciudad></ciudad>
                        <departamento>BOGOTA D.C.</departamento>
                        <direccion>AVENIDA EL DORADO 69C - 03</direccion>
                    </ubicacion>
                </adquiriente>
                <cargosDescuentos>
                    <cargoDescuento>
                        <esCargo>false</esCargo>
                        <codigo>01</codigo>
                        <valorImporte>0</valorImporte>
                        <valorImporteMoneda>COP</valorImporteMoneda>
                        <valorBase>0</valorBase>
                        <valorBaseMoneda>COP</valorBaseMoneda>
                        <porcentaje>0</porcentaje>
                    </cargoDescuento>
                </cargosDescuentos>
                <tributos>
                    <tributo>
                        <id>01</id>
                        <nombre>IVA</nombre>
                        <esImpuesto>false</esImpuesto>
                        <valorImporteTotal>0</valorImporteTotal>
                        <valorImporteTotalMoneda>COP</valorImporteTotalMoneda>
                        <detalles>
                            <tributoDetalle>
                                <valorImporte>0</valorImporte>
                                <valorImporteMoneda>COP</valorImporteMoneda>
                                <valorBase>449186</valorBase>
                                <valorBaseMoneda>COP</valorBaseMoneda>
                                <porcentaje>0</porcentaje>
                                <tributoFijoUnidades>0</tributoFijoUnidades>
                                <tributoFijoValorImporte>0</tributoFijoValorImporte>
                            </tributoDetalle>
                        </detalles>
                    </tributo>
                </tributos>
                <totales>
                    <valorBruto>449186</valorBruto>
                    <valorBrutoMoneda>COP</valorBrutoMoneda>
                    <valorCargos>0</valorCargos>
                    <valorCargosMoneda>COP</valorCargosMoneda>
                    <valorDescuentos>0</valorDescuentos>
                    <valorDescuentosMoneda>COP</valorDescuentosMoneda>
                    <valorAnticipos>0</valorAnticipos>
                    <valorAnticiposMoneda>COP</valorAnticiposMoneda>
                    <valorRedondeo>0</valorRedondeo>
                    <valorRedondeoMoneda>COP</valorRedondeoMoneda>
                    <valorTotalSinImpuestos>449186</valorTotalSinImpuestos>
                    <valorTotalSinImpuestosMoneda>COP</valorTotalSinImpuestosMoneda>
                    <valorTotalConImpuestos>449186</valorTotalConImpuestos>
                    <valorTotalConImpuestosMoneda>COP</valorTotalConImpuestosMoneda>
                    <valorNeto>449186</valorNeto>
                    <valorNetoMoneda>COP</valorNetoMoneda>
                </totales>
                <detalles>
                    <detalle>
                        <tipoDetalle>2</tipoDetalle>
                        <valorCodigoInterno>17</valorCodigoInterno>
                        <codigoEstandar>999</codigoEstandar>
                        <valorCodigoEstandar>17</valorCodigoEstandar>
                        <descripcion>MEDICAMENTOS</descripcion>
                        <unidades>1</unidades>
                        <unidadMedida>ZZ</unidadMedida>
                        <unidadesPorEmpaque>0</unidadesPorEmpaque>
                        <valorUnitarioBruto>129458</valorUnitarioBruto>
                        <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                        <valorBruto>129458</valorBruto>
                        <valorBrutoMoneda>COP</valorBrutoMoneda>
                        <valorReferencia>0</valorReferencia>
                        <informacionesAdicionales>
                            <informacionAdicional>
                                <nombre>Codigo</nombre>
                                <valor>999</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>ValorUnitarioOtraDivisa</nombre>
                                <valor>0</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>MonedaOtraDivisa</nombre>
                                <valor>USD</valor>
                            </informacionAdicional>
                        </informacionesAdicionales>
                        <subDetalles>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1141011120</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1141011120</valorCodigoEstandar>
                                <descripcion>* IOVERSOL X 320MG/ML SOLUCION INYECTABLE JERINGA INYECTOR X 75ML</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>48968</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>48968</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>48968</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>48968</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1141013063</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1141013063</valorCodigoEstandar>
                                <descripcion>SULFATO DE BARIO X 10G (4,9%) SUSPENSION ORAL FRASCO X 225ML</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>80490</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>80490</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>80490</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>80490</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                        </subDetalles>
                    </detalle>
                    <detalle>
                        <tipoDetalle>2</tipoDetalle>
                        <valorCodigoInterno>203</valorCodigoInterno>
                        <codigoEstandar>999</codigoEstandar>
                        <valorCodigoEstandar>203</valorCodigoEstandar>
                        <descripcion>IMAGENOLOGIA</descripcion>
                        <unidades>1</unidades>
                        <unidadMedida>ZZ</unidadMedida>
                        <unidadesPorEmpaque>0</unidadesPorEmpaque>
                        <valorUnitarioBruto>283297</valorUnitarioBruto>
                        <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                        <valorBruto>283297</valorBruto>
                        <valorBrutoMoneda>COP</valorBrutoMoneda>
                        <valorReferencia>0</valorReferencia>
                        <informacionesAdicionales>
                            <informacionAdicional>
                                <nombre>Codigo</nombre>
                                <valor>999</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>ValorUnitarioOtraDivisa</nombre>
                                <valor>0</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>MonedaOtraDivisa</nombre>
                                <valor>USD</valor>
                            </informacionAdicional>
                        </informacionesAdicionales>
                        <subDetalles>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>879420</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>879420</valorCodigoEstandar>
                                <descripcion>TOMOGRAFIA COMPUTADA DE ABDOMEN Y PELVIS (ABDOMEN TOTAL)</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>283297</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>283297</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>283297</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>283297</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                        </subDetalles>
                    </detalle>
                    <detalle>
                        <tipoDetalle>2</tipoDetalle>
                        <valorCodigoInterno>16</valorCodigoInterno>
                        <codigoEstandar>999</codigoEstandar>
                        <valorCodigoEstandar>16</valorCodigoEstandar>
                        <descripcion>INSUMOS</descripcion>
                        <unidades>1</unidades>
                        <unidadMedida>ZZ</unidadMedida>
                        <unidadesPorEmpaque>0</unidadesPorEmpaque>
                        <valorUnitarioBruto>36431</valorUnitarioBruto>
                        <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                        <valorBruto>36431</valorBruto>
                        <valorBrutoMoneda>COP</valorBrutoMoneda>
                        <valorReferencia>0</valorReferencia>
                        <informacionesAdicionales>
                            <informacionAdicional>
                                <nombre>Codigo</nombre>
                                <valor>999</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>ValorUnitarioOtraDivisa</nombre>
                                <valor>0</valor>
                            </informacionAdicional>
                            <informacionAdicional>
                                <nombre>MonedaOtraDivisa</nombre>
                                <valor>USD</valor>
                            </informacionAdicional>
                        </informacionesAdicionales>
                        <subDetalles>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1210010111</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1210010111</valorCodigoEstandar>
                                <descripcion>GASA IMPREGNADA CON ALCOHOL 70%</descripcion>
                                <unidades>2</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>99</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>198</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>198</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>198</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1221010018</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1221010018</valorCodigoEstandar>
                                <descripcion>EQUIPO DE VENOCLISIS S/AGUJA (MACROGOTEO)</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>1488</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>1488</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>1488</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>1488</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1203010408</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1203010408</valorCodigoEstandar>
                                <descripcion>EXTENSION EN Y CON VALVULA ANTIREFLUJO CASE 60" Y TUBO REF:844012</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>23048</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>23048</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>23048</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>23048</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1201010038</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1201010038</valorCodigoEstandar>
                                <descripcion>CATETER INTRAVENOSO 20GX 1 1/4" AUTOGUARD</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>5000</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>5000</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>5000</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>5000</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1221040013</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1221040013</valorCodigoEstandar>
                                <descripcion>EXTENSION PARA ANESTESIA ADULTO</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>1248</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>1248</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>1248</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>1248</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1149011039</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1149011039</valorCodigoEstandar>
                                <descripcion>SOLUCION SALINA X 0,9% SOLUCION INYECTABLE BOLSA X 250ML X UND</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>2760</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>2760</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>2760</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>2760</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                            <subDetalle>
                                <tipoDetalle>1</tipoDetalle>
                                <valorCodigoInterno>1211010172</valorCodigoInterno>
                                <codigoEstandar>999</codigoEstandar>
                                <valorCodigoEstandar>1211010172</valorCodigoEstandar>
                                <descripcion>JERINGA PRELLENADA CON SOLUCION SALINA 0.9% 10ML/10CC REF.306565</descripcion>
                                <unidades>1</unidades>
                                <unidadMedida>ZZ</unidadMedida>
                                <unidadesPorEmpaque>0</unidadesPorEmpaque>
                                <valorUnitarioBruto>2689</valorUnitarioBruto>
                                <valorUnitarioBrutoMoneda>COP</valorUnitarioBrutoMoneda>
                                <valorBruto>2689</valorBruto>
                                <valorBrutoMoneda>COP</valorBrutoMoneda>
                                <valorReferencia>0</valorReferencia>
                                <tributos>
                                    <detalleTributo>
                                        <id>01</id>
                                        <nombre>IVA</nombre>
                                        <esImpuesto>false</esImpuesto>
                                        <valorImporte>0</valorImporte>
                                        <valorImporteMoneda>COP</valorImporteMoneda>
                                        <valorBase>2689</valorBase>
                                        <valorBaseMoneda>COP</valorBaseMoneda>
                                        <porcentaje>0</porcentaje>
                                        <tributoFijoUnidades>0</tributoFijoUnidades>
                                        <tributoFijoValorImporte>0</tributoFijoValorImporte>
                                    </detalleTributo>
                                </tributos>
                                <informacionesAdicionales>
                                    <informacionAdicional>
                                        <nombre>FechaPrestacion</nombre>
                                        <valor>2022-03-03</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TipoDocumentoPaciente</nombre>
                                        <valor>13</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroDocumentoPaciente</nombre>
                                        <valor>22613251</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerNombrePaciente</nombre>
                                        <valor>BRIANA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoNombrePaciente</nombre>
                                        <valor></valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>PrimerApellidoPaciente</nombre>
                                        <valor>ROMERO</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>SegundoApellidoPaciente</nombre>
                                        <valor>AVILA</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>TarifaContratada</nombre>
                                        <valor>2689</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValidarTarifaContratada</nombre>
                                        <valor>FALSE</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroAutorizacion</nombre>
                                        <valor>(221-25280520|2022-03-03||)</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngreso</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>NumeroIngresoDAU</nombre>
                                        <valor>2203000504</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>ValorUnitarioOtraDivisa</nombre>
                                        <valor>0</valor>
                                    </informacionAdicional>
                                    <informacionAdicional>
                                        <nombre>MonedaOtraDivisa</nombre>
                                        <valor>USD</valor>
                                    </informacionAdicional>
                                </informacionesAdicionales>
                            </subDetalle>
                        </subDetalles>
                    </detalle>
                </detalles>
            </documentoElectronico>
        </generarDocumento>
    </s:Body>
</s:Envelope>`;

let dataJson = {
    "s:Envelope": {
      "-xmlns:s": "http://schemas.xmlsoap.org/soap/envelope/",
      "s:Header": {
        "UserName": "administradorti",
        "Password": "!QAZxsw2ZLÑ"
      },
      "s:Body": {
        "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "generarDocumento": {
          "-xmlns": "http://tempuri.org/",
          "documentoElectronico": {
            "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "-xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
            "documento": {
              "identificadorTransaccion": "94d8f9e2-6bea-47c4-9ea9-26c410ba902f",
              "NITFacturador": "900482242",
              "prefijo": "SM",
              "numeroDocumento": "18330",
              "tipoDocumento": "1",
              "subTipoDocumento": "01",
              "tipoOperacion": "SS-CUFE",
              "plantilla": "2",
              "generaRepresentacionGrafica": "true",
              "fechaEmision": "2022-03-19",
              "horaEmision": "09:57:03-05:00",
              "fechaVencimiento": "2022-04-18",
              "fechaInicioPeriodo": "2022-03-03",
              "horaInicioPeriodo": "09:10:06-05:00",
              "fechaFinPeriodo": "2022-03-03",
              "horaFinPeriodo": "10:10:06-05:00",
              "moneda": "COP",
              "codigoCentroCostos": "CHSM",
              "contactoEntrega": {
                "nombre": "CLAUDIA POSSE VELASQUEZ"
              },
              "notificaciones": {
                "notificacion": {
                  "tipo": "1",
                  "valor": {
                    "string": "RECEPCIONCUENTASMEDICAS@COLMEDICA.COM"
                  }
                }
              },
              "formaPago": {
                "tipoPago": "2",
                "codigoMedio": "ZZZ",
                "fechaVencimiento": "2022-03-19"
              },
              "informacionesAdicionales": {
                "informacionAdicional": [
                  {
                    "nombre": "CodigoHabitacion",
                    "valor": "130010332101"
                  },
                  {
                    "nombre": "valoraPagar",
                    "valor": "449186"
                  },
                  {
                    "nombre": "NumeroIngreso",
                    "valor": "2203000504"
                  },
                  {
                    "nombre": "CodigoAsistenciaComplementaria",
                    "valor": "130010332101"
                  },
                  {
                    "nombre": "NumeroAutorizacion",
                    "valor": "(221-25280520|2022-03-03||)"
                  },
                  {
                    "nombre": "TipoDocumentoPaciente",
                    "valor": "13"
                  },
                  {
                    "nombre": "NumeroDocumentoPaciente",
                    "valor": "22613251"
                  },
                  {
                    "nombre": "PrimerNombrePaciente",
                    "valor": "BRIANA"
                  },
                  {
                    "nombre": "SegundoNombrePaciente",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "PrimerApellidoPaciente",
                    "valor": "ROMERO"
                  },
                  {
                    "nombre": "SegundoApellidoPaciente",
                    "valor": "AVILA"
                  },
                  {
                    "nombre": "FechaNacimientoPaciente",
                    "valor": "1980-04-22"
                  },
                  {
                    "nombre": "TipoAfiliacionPaciente",
                    "valor": "1"
                  },
                  {
                    "nombre": "EdadPaciente",
                    "valor": "42"
                  },
                  {
                    "nombre": "SexoPaciente",
                    "valor": "F"
                  },
                  {
                    "nombre": "EsMultipaciente",
                    "valor": "FALSE"
                  },
                  {
                    "nombre": "TipoServicio",
                    "valor": "3"
                  },
                  {
                    "nombre": "NumeroAtencionConvenio",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "CodigoMedico",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "DiasEstancia",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "DiagnosticoIngreso",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "DiagnosticoEgreso",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "SociedadMedica",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "PolizaAtencion",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "PolizaAtencionAseguradora",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "NumeroHistoria",
                    "valor": "22613251"
                  },
                  {
                    "nombre": "CodigoConvenio",
                    "valor": "22"
                  },
                  {
                    "nombre": "CodigoFacturador",
                    "valor": "SMA49952"
                  },
                  {
                    "nombre": "TipoDocumentoFacturador",
                    "valor": "13"
                  },
                  {
                    "nombre": "NumeroDocumentoFacturador",
                    "valor": "1047449952"
                  },
                  {
                    "nombre": "NombreFacturador",
                    "valor": "EDUARDO"
                  },
                  {
                    "nombre": "ApellidoFacturador",
                    "valor": "LUIS GOMEZ GONZALEZ"
                  },
                  {
                    "nombre": "Idpacienteconvenio",
                    "valor": "22"
                  },
                  {
                    "nombre": "ObservacionesFactura",
                    "valor": {
                    }
                  },
                  {
                    "nombre": "TotalFacturaDolares",
                    "valor": "0"
                  },
                  {
                    "nombre": "TotalFacturaDolaresMoneda",
                    "valor": {
                    }
                  }
                ]
              },
              "extensionesSalud": {
                "extensionSalud": {
                  "codigoPrestador": "130010332101",
                  "tipoDocumentoIdentificacion": "CC",
                  "numeroIdentificacion": "22613251",
                  "primerApellido": "ROMERO",
                  "segundoApellido": "AVILA",
                  "primerNombre": "BRIANA",
                  "tipoDeUsuario": "CONTRIBUTIVO BENEFICIARIO",
                  "modalidadesContratacion": "POR SERVICIO",
                  "cobertura": "COBERTURA RÉGIMEN ESPECIAL O EXCEPCIÓN",
                  "numeroAutorizacion": {
                    "string": "221-25280520"
                  },
                  "fechaInicioFacturacion": "2022-03-03",
                  "fechaFinFacturacion": "2022-03-03",
                  "copago": "0",
                  "cuotaModeradora": "0",
                  "cuotaRecuperacion": "0",
                  "pagosCompartidos": "0"
                }
              }
            },
            "adquiriente": {
              "identificacion": "800106339",
              "tipoIdentificacion": "31",
              "codigoInterno": "22",
              "matriculaMercantil": "0",
              "razonSocial": "COLMEDICA - PIEDRAS PRECIOSAS",
              "nombreSucursal": "BOGOTA D.C.-FONTIBON",
              "correo": "RECEPCIONCUENTASMEDICAS@COLMEDICA.COM",
              "telefono": "3240250 -",
              "sitio": "RECEPCIONCUENTASMEDICAS@COLMEDICA.COM",
              "responsabilidadesRUT": {
                "string": "O-13"
              },
              "tipoPersona": "1",
              "ubicacion": {
                "pais": "CO",
                "codigoMunicipio": "11001",
                "ciudad": {
                },
                "departamento": "BOGOTA D.C.",
                "direccion": "AVENIDA EL DORADO 69C - 03"
              }
            },
            "cargosDescuentos": {
              "cargoDescuento": {
                "esCargo": "false",
                "codigo": "01",
                "valorImporte": "0",
                "valorImporteMoneda": "COP",
                "valorBase": "0",
                "valorBaseMoneda": "COP",
                "porcentaje": "0"
              }
            },
            "tributos": {
              "tributo": {
                "id": "01",
                "nombre": "IVA",
                "esImpuesto": "false",
                "valorImporteTotal": "0",
                "valorImporteTotalMoneda": "COP",
                "detalles": {
                  "tributoDetalle": {
                    "valorImporte": "0",
                    "valorImporteMoneda": "COP",
                    "valorBase": "449186",
                    "valorBaseMoneda": "COP",
                    "porcentaje": "0",
                    "tributoFijoUnidades": "0",
                    "tributoFijoValorImporte": "0"
                  }
                }
              }
            },
            "totales": {
              "valorBruto": "449186",
              "valorBrutoMoneda": "COP",
              "valorCargos": "0",
              "valorCargosMoneda": "COP",
              "valorDescuentos": "0",
              "valorDescuentosMoneda": "COP",
              "valorAnticipos": "0",
              "valorAnticiposMoneda": "COP",
              "valorRedondeo": "0",
              "valorRedondeoMoneda": "COP",
              "valorTotalSinImpuestos": "449186",
              "valorTotalSinImpuestosMoneda": "COP",
              "valorTotalConImpuestos": "449186",
              "valorTotalConImpuestosMoneda": "COP",
              "valorNeto": "449186",
              "valorNetoMoneda": "COP"
            },
            "detalles": {
              "detalle": [
                {
                  "tipoDetalle": "2",
                  "valorCodigoInterno": "17",
                  "codigoEstandar": "999",
                  "valorCodigoEstandar": "17",
                  "descripcion": "MEDICAMENTOS",
                  "unidades": "1",
                  "unidadMedida": "ZZ",
                  "unidadesPorEmpaque": "0",
                  "valorUnitarioBruto": "129458",
                  "valorUnitarioBrutoMoneda": "COP",
                  "valorBruto": "129458",
                  "valorBrutoMoneda": "COP",
                  "valorReferencia": "0",
                  "informacionesAdicionales": {
                    "informacionAdicional": [
                      {
                        "nombre": "Codigo",
                        "valor": "999"
                      },
                      {
                        "nombre": "ValorUnitarioOtraDivisa",
                        "valor": "0"
                      },
                      {
                        "nombre": "MonedaOtraDivisa",
                        "valor": "USD"
                      }
                    ]
                  },
                  "subDetalles": {
                    "subDetalle": [
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1141011120",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1141011120",
                        "descripcion": "* IOVERSOL X 320MG/ML SOLUCION INYECTABLE JERINGA INYECTOR X 75ML",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "48968",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "48968",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "48968",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "48968"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1141013063",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1141013063",
                        "descripcion": "SULFATO DE BARIO X 10G (4,9%) SUSPENSION ORAL FRASCO X 225ML",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "80490",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "80490",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "80490",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "80490"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "tipoDetalle": "2",
                  "valorCodigoInterno": "203",
                  "codigoEstandar": "999",
                  "valorCodigoEstandar": "203",
                  "descripcion": "IMAGENOLOGIA",
                  "unidades": "1",
                  "unidadMedida": "ZZ",
                  "unidadesPorEmpaque": "0",
                  "valorUnitarioBruto": "283297",
                  "valorUnitarioBrutoMoneda": "COP",
                  "valorBruto": "283297",
                  "valorBrutoMoneda": "COP",
                  "valorReferencia": "0",
                  "informacionesAdicionales": {
                    "informacionAdicional": [
                      {
                        "nombre": "Codigo",
                        "valor": "999"
                      },
                      {
                        "nombre": "ValorUnitarioOtraDivisa",
                        "valor": "0"
                      },
                      {
                        "nombre": "MonedaOtraDivisa",
                        "valor": "USD"
                      }
                    ]
                  },
                  "subDetalles": {
                    "subDetalle": {
                      "tipoDetalle": "1",
                      "valorCodigoInterno": "879420",
                      "codigoEstandar": "999",
                      "valorCodigoEstandar": "879420",
                      "descripcion": "TOMOGRAFIA COMPUTADA DE ABDOMEN Y PELVIS (ABDOMEN TOTAL)",
                      "unidades": "1",
                      "unidadMedida": "ZZ",
                      "unidadesPorEmpaque": "0",
                      "valorUnitarioBruto": "283297",
                      "valorUnitarioBrutoMoneda": "COP",
                      "valorBruto": "283297",
                      "valorBrutoMoneda": "COP",
                      "valorReferencia": "0",
                      "tributos": {
                        "detalleTributo": {
                          "id": "01",
                          "nombre": "IVA",
                          "esImpuesto": "false",
                          "valorImporte": "0",
                          "valorImporteMoneda": "COP",
                          "valorBase": "283297",
                          "valorBaseMoneda": "COP",
                          "porcentaje": "0",
                          "tributoFijoUnidades": "0",
                          "tributoFijoValorImporte": "0"
                        }
                      },
                      "informacionesAdicionales": {
                        "informacionAdicional": [
                          {
                            "nombre": "FechaPrestacion",
                            "valor": "2022-03-03"
                          },
                          {
                            "nombre": "TipoDocumentoPaciente",
                            "valor": "13"
                          },
                          {
                            "nombre": "NumeroDocumentoPaciente",
                            "valor": "22613251"
                          },
                          {
                            "nombre": "PrimerNombrePaciente",
                            "valor": "BRIANA"
                          },
                          {
                            "nombre": "SegundoNombrePaciente",
                            "valor": {
                            }
                          },
                          {
                            "nombre": "PrimerApellidoPaciente",
                            "valor": "ROMERO"
                          },
                          {
                            "nombre": "SegundoApellidoPaciente",
                            "valor": "AVILA"
                          },
                          {
                            "nombre": "TarifaContratada",
                            "valor": "283297"
                          },
                          {
                            "nombre": "ValidarTarifaContratada",
                            "valor": "FALSE"
                          },
                          {
                            "nombre": "NumeroAutorizacion",
                            "valor": "(221-25280520|2022-03-03||)"
                          },
                          {
                            "nombre": "NumeroIngreso",
                            "valor": "2203000504"
                          },
                          {
                            "nombre": "NumeroIngresoDAU",
                            "valor": "2203000504"
                          },
                          {
                            "nombre": "ValorUnitarioOtraDivisa",
                            "valor": "0"
                          },
                          {
                            "nombre": "MonedaOtraDivisa",
                            "valor": "USD"
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "tipoDetalle": "2",
                  "valorCodigoInterno": "16",
                  "codigoEstandar": "999",
                  "valorCodigoEstandar": "16",
                  "descripcion": "INSUMOS",
                  "unidades": "1",
                  "unidadMedida": "ZZ",
                  "unidadesPorEmpaque": "0",
                  "valorUnitarioBruto": "36431",
                  "valorUnitarioBrutoMoneda": "COP",
                  "valorBruto": "36431",
                  "valorBrutoMoneda": "COP",
                  "valorReferencia": "0",
                  "informacionesAdicionales": {
                    "informacionAdicional": [
                      {
                        "nombre": "Codigo",
                        "valor": "999"
                      },
                      {
                        "nombre": "ValorUnitarioOtraDivisa",
                        "valor": "0"
                      },
                      {
                        "nombre": "MonedaOtraDivisa",
                        "valor": "USD"
                      }
                    ]
                  },
                  "subDetalles": {
                    "subDetalle": [
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1210010111",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1210010111",
                        "descripcion": "GASA IMPREGNADA CON ALCOHOL 70%",
                        "unidades": "2",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "99",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "198",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "198",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "198"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1221010018",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1221010018",
                        "descripcion": "EQUIPO DE VENOCLISIS S/AGUJA (MACROGOTEO)",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "1488",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "1488",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "1488",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "1488"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1203010408",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1203010408",
                        "descripcion": "EXTENSION EN Y CON VALVULA ANTIREFLUJO CASE 60\" Y TUBO REF:844012",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "23048",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "23048",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "23048",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "23048"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1201010038",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1201010038",
                        "descripcion": "CATETER INTRAVENOSO 20GX 1 1/4\" AUTOGUARD",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "5000",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "5000",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "5000",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "5000"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1221040013",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1221040013",
                        "descripcion": "EXTENSION PARA ANESTESIA ADULTO",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "1248",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "1248",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "1248",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "1248"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1149011039",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1149011039",
                        "descripcion": "SOLUCION SALINA X 0,9% SOLUCION INYECTABLE BOLSA X 250ML X UND",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "2760",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "2760",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "2760",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "2760"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      },
                      {
                        "tipoDetalle": "1",
                        "valorCodigoInterno": "1211010172",
                        "codigoEstandar": "999",
                        "valorCodigoEstandar": "1211010172",
                        "descripcion": "JERINGA PRELLENADA CON SOLUCION SALINA 0.9% 10ML/10CC REF.306565",
                        "unidades": "1",
                        "unidadMedida": "ZZ",
                        "unidadesPorEmpaque": "0",
                        "valorUnitarioBruto": "2689",
                        "valorUnitarioBrutoMoneda": "COP",
                        "valorBruto": "2689",
                        "valorBrutoMoneda": "COP",
                        "valorReferencia": "0",
                        "tributos": {
                          "detalleTributo": {
                            "id": "01",
                            "nombre": "IVA",
                            "esImpuesto": "false",
                            "valorImporte": "0",
                            "valorImporteMoneda": "COP",
                            "valorBase": "2689",
                            "valorBaseMoneda": "COP",
                            "porcentaje": "0",
                            "tributoFijoUnidades": "0",
                            "tributoFijoValorImporte": "0"
                          }
                        },
                        "informacionesAdicionales": {
                          "informacionAdicional": [
                            {
                              "nombre": "FechaPrestacion",
                              "valor": "2022-03-03"
                            },
                            {
                              "nombre": "TipoDocumentoPaciente",
                              "valor": "13"
                            },
                            {
                              "nombre": "NumeroDocumentoPaciente",
                              "valor": "22613251"
                            },
                            {
                              "nombre": "PrimerNombrePaciente",
                              "valor": "BRIANA"
                            },
                            {
                              "nombre": "SegundoNombrePaciente",
                              "valor": {
                              }
                            },
                            {
                              "nombre": "PrimerApellidoPaciente",
                              "valor": "ROMERO"
                            },
                            {
                              "nombre": "SegundoApellidoPaciente",
                              "valor": "AVILA"
                            },
                            {
                              "nombre": "TarifaContratada",
                              "valor": "2689"
                            },
                            {
                              "nombre": "ValidarTarifaContratada",
                              "valor": "FALSE"
                            },
                            {
                              "nombre": "NumeroAutorizacion",
                              "valor": "(221-25280520|2022-03-03||)"
                            },
                            {
                              "nombre": "NumeroIngreso",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "NumeroIngresoDAU",
                              "valor": "2203000504"
                            },
                            {
                              "nombre": "ValorUnitarioOtraDivisa",
                              "valor": "0"
                            },
                            {
                              "nombre": "MonedaOtraDivisa",
                              "valor": "USD"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    }
  }; 


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(data,"text/xml");



//Acceder a una parte especifica del xml obtenido del parser
// console.log(xmlDoc.getElementsByTagName('generarDocumento')[0].innerHTML);


const enviarPeticion = (xmlDoc) => {
    // console.log(typeof(xmlDoc),xmlDoc);
    // var request = new Request(url, {
    //     method: 'POST',
    //     body: xmlDoc,
    //     // mode: 'no-cors',
    //     headers: {
    //         'Content-type': 'text/xml;charset=UTF-8',
    //         'Content-type': 'application/json;charset=UTF-8',
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Headers':'*'
    //     },
    
    // });
    
    // fetch(request)
    // .then( response => {
    //     console.log(response);
    // }).catch ( error => {
    //     console.log(error)
    // });

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            console.log(xhr.response);
        }
    }

    xhr.open("POST", url,true);
    xhr.setRequestHeader("Content-type","text/xml;charset=UTF-8");
    xhr.setRequestHeader("SOAPAction", "http://tempuri.org/IFacturaService/generarDocumento");
    xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    xhr.send(xmlDoc);
}

const btnProcesar = document.getElementById("btn-process");
btnProcesar.addEventListener("click", function(){enviarPeticion(data)});
