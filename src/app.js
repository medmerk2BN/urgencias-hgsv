const LAB_GROUPS = [
  { title: 'Hematología', items: ['Biometría hemática','Reticulocitos','Vel. Sedimentación globular','Eosinófilo en moco nasal','Frotis en sangre periférica'] },
  { title: 'Bioquímica clínica', items: ['Glucosa','Glucosa postprandial','Tamiz gestacional 50g/1hr.','Curva de tolerancia glucosa','Urea/BUN','Creatinina','Ácido úrico','DHL','CPK','CK MB','Colesterol total','HDL colesterol','Lípidos totales','Triglicéridos','Bilirrubinas','AST (TGO)','ALT (TGP)','Fosfatasa alcalina (ALP)','Proteínas totales','Albúmina','Amilasa','Lipasa','Calcio','Fósforo','Cloro','Potasio','Magnesio','Gasometría','Hemoglobina glicada A1c','Gamma glutamil transpeptidasa (GGT)','Cortisol'] },
  { title: 'Drogas terapéuticas', items: ['Fenitoína','Ácido valproico','Fenobarbital','Carbamazepina'] },
  { title: 'Coagulación', items: ['Tiempo de protrombina','Tiempo de tromboplastina parcial','Fibrinógeno'] },
  { title: 'Inmunología', items: ['Reacciones febriles','Proteína C reactiva','Factor reumatoide','Antiestreptolisinas','VDRL','HCG Beta cualitativa (pie)','Prueba de embarazo en orina','Procalcitonina'] },
  { title: 'Perfil TORCH', items: ['Anti CMV IgM','Anti CMV IgG','Anti Rubéola IgM','Anti Rubéola IgG','Anti Toxo IgM','Anti Toxo IgG','Anti HSV 1/2 IgM','Anti HSV 1/2 IgG','Anti HSV 2 IgM'] },
  { title: 'Autoinmunidad', items: ['Anti DNA','Anticardiolipina IgM','Anticardiolipina IgG','Antitiroglobulina'] },
  { title: 'Parasitología', items: ['Coproparasitoscópico 3','Coproparasitoscópico 1','Citología de moco fecal','Coprológico','Amiba en fresco','Sangre oculta en heces','Azúcares reductores','Rotavirus'] },
  { title: 'Endocrinología', items: ['Perfil ovárico','Testosterona','Perfil tiroideo','Insulina','Insulina 120 minutos'] },
  { title: 'Inmunohematología', items: ['Grupo sanguíneo','Coombs directo','Coombs indirecto'] },
  { title: 'Marcadores tumorales', items: ['AG prostático específico','CA 125','CA 15-3','CA 19-9','HCG Beta cuantitativa','AG carcinoembrionario (CEA)','Alfa fetoproteína (AFP)'] },
  { title: 'Serología', items: ['Ac VIH1-2 prueba rápida','Ac VIH1-2 método ELISA','Ag Hbs','Ag HCV'] },
  { title: 'Urianálisis', items: ['Examen general de orina','Microalbuminuria de orina 24 hr','Proteínas de orina 24 hr','Depuración de creatinina 24 hr'] },
  { title: 'Electrolitos urinarios', items: ['Calcio','Potasio','Sodio','Magnesio'] },
  { title: 'Microbiología', items: ['Urocultivo','Coprocultivo','Exudado faríngeo','Exudado vaginal','Hemocultivo central','Hemocultivo periférico','Cultivo de punta de catéter','Líquido cefalorraquídeo','Líquido pleural','Cultivo aspirado bronquial','Cultivo de secreciones','Cultivo líquido diálisis'] },
  { title: 'Otros', items: ['Dímero D','Troponinas'] }
];

const SECTIONS_CONFIG = [
  { title: 'Identificación', fields: [
    { key:'nombre', label:'Nombre(s)' },
    { key:'apellidoPaterno', label:'Primer apellido' },
    { key:'apellidoMaterno', label:'Segundo apellido' },
    { key:'nombreSocial', label:'Nombre social' },
    { key:'curp', label:'CURP' },
    { key:'sexo', label:'Sexo', options:['Femenino','Masculino','No binario'] },
    { key:'fechaNacimiento', label:'Fecha de nacimiento', type:'date' },
    { key:'entidadNacimiento', label:'Entidad de nacimiento' },
    { key:'edad', label:'Edad', type:'number' },
    { key:'escolaridad', label:'Escolaridad', options:['Ninguna','Primaria','Secundaria','Bachillerato','Profesional','Posgrado'] }
  ]},
  { title: 'Domicilio y contacto', fields: [
    { key:'domicilio', label:'Domicilio', wide:true },
    { key:'telefono', label:'Teléfono' },
    { key:'familiar', label:'Familiar / representante legal' },
    { key:'relacionResponsable', label:'Parentesco' },
    { key:'telefonoFamiliar', label:'Teléfono del familiar' }
  ]},
  { title: 'Afiliación', fields: [
    { key:'afiliacion', label:'Afiliación a servicios de salud', options:['Ninguna','IMSS','ISSSTE','Otra'] },
    { key:'numAfiliacion', label:'Núm. de afiliación' },
    { key:'gratuidad', label:'Gratuidad', options:['Sí','No'] }
  ]},
  { title: 'Expediente e ingreso', fields: [
    { key:'institucion', label:'Institución' },
    { key:'expediente', label:'No. de expediente' },
    { key:'folio', label:'Folio' },
    { key:'fechaIngreso', label:'Fecha de ingreso', type:'date' },
    { key:'horaIngreso', label:'Hora de ingreso', type:'time' },
    { key:'fechaEgreso', label:'Fecha de egreso', type:'date' },
    { key:'horaEgreso', label:'Hora de egreso', type:'time' },
    { key:'servicio', label:'Servicio' },
    { key:'cama', label:'Cama / Box' },
    { key:'medico', label:'Médico responsable' },
    { key:'curpMedico', label:'CURP del médico' },
    { key:'cedulaMedico', label:'Cédula profesional' },
    { key:'medicoEgreso', label:'Médico tratante (egreso)' },
    { key:'medicosTratantes', label:'Médico(s) tratante(s)' },
    { key:'interconsultas', label:'Servicio(s) de interconsultas' },
    { key:'tipoUrgencia', label:'Tipo de urgencia', options:['Urgencia calificada','Urgencia no calificada'] },
    { key:'prioridadTraslado', label:'Prioridad', options:['Prioritaria','Ordinaria'] },
    { key:'prioridadEstudio', label:'Prioridad del estudio (Lab/RX)', options:['Urgente','Prioritario','Ordinario'] },
    { key:'hospOConsulta', label:'Procedencia del estudio', options:['Hospitalización','Consulta externa'] },
    { key:'altaPor', label:'Alta por', options:['Hospitalización','Consulta externa','Traslado a otra unidad','Domicilio','Defunción','Fuga','Voluntad propia'] },
    { key:'hospTipo', label:'Tipo de servicio (hospitalización)', options:['Hospitalización (normal)','Corta estancia'] },
    { key:'procedencia', label:'Procedencia', options:['Consulta externa','Urgencias','Referido','Cunero patológico'] },
    { key:'motivoEgreso', label:'Motivo de egreso', options:['Curación','Mejoría','Voluntario','Traslado a otra unidad','Defunción','Fuga','Otro motivo'] },
    { key:'mujerEdadFertil', label:'Mujer en edad fértil', options:['Embarazo','Puerperio','No embarazo ni puerperio'] }
  ]},
  { title: 'Motivo, antecedentes y alergias', fields: [
    { key:'motivoConsulta', label:'Motivo de consulta', textarea:true, wide:true },
    { key:'antecedentes', label:'Antecedentes de importancia', textarea:true, wide:true },
    { key:'alergias', label:'Alergias', wide:true }
  ]},
  { title: 'Signos vitales al ingreso', fields: [
    { key:'ta', label:'TA (mmHg)' },
    { key:'fc', label:'FC (lpm)' },
    { key:'fr', label:'FR (rpm)' },
    { key:'temp', label:'Temp (°C)' },
    { key:'spo2', label:'SpO2 (%)' },
    { key:'peso', label:'Peso (kg)' },
    { key:'talla', label:'Talla (cm)' },
    { key:'glucosa', label:'Glucosa (mg/dL)' },
    { key:'eva', label:'EVA dolor (/10)' },
    { key:'glasgow', label:'Glasgow' }
  ]},
  { title: 'Diagnóstico y egreso', fields: [
    { key:'diagnosticoIngreso', label:'Diagnóstico de ingreso', textarea:true, wide:true },
    { key:'diagnosticoEgreso', label:'Diagnóstico de egreso', textarea:true, wide:true },
    { key:'grupoSanguineo', label:'Grupo sanguíneo y RH' },
    { key:'transfusiones', label:'Transfusiones' },
    { key:'intervencionesQuirurgicas', label:'Intervenciones quirúrgicas' },
    { key:'tratamientos', label:'Tratamientos', textarea:true, wide:true },
    { key:'diasEstancia', label:'Días de estancia hospitalaria', type:'number' }
  ]},
  { title: 'Consentimiento informado', fields: [
    { key:'procedimientoConsentido', label:'Nombre del procedimiento' },
    { key:'riesgosComplicaciones', label:'Riesgos y complicaciones', textarea:true, wide:true },
    { key:'diagnostico2', label:'Diagnóstico (para beneficios)' },
    { key:'beneficiosEsperados', label:'Beneficios esperados', textarea:true, wide:true }
  ]},
  { title: 'Domicilio detallado (Hoja Diaria / Hospitalización)', fields: [
    { key:'entidadFederativa', label:'Entidad federativa' },
    { key:'municipio', label:'Municipio o alcaldía' },
    { key:'localidad', label:'Localidad' },
    { key:'codigoPostal', label:'Código postal' },
    { key:'tipoVialidad', label:'Tipo de vialidad' },
    { key:'nombreVialidad', label:'Nombre de la vialidad' },
    { key:'numExt', label:'Núm. ext.' },
    { key:'numInt', label:'Núm. int.' },
    { key:'tipoAsentamiento', label:'Tipo de asentamiento' },
    { key:'nombreAsentamiento', label:'Nombre del asentamiento' }
  ]},
  { title: 'Identidad', fields: [
    { key:'seConsideraIndigena', label:'¿Se considera indígena?', options:['Sí','No'] },
    { key:'seConsideraAfromexicano', label:'¿Se considera afromexicano?', options:['Sí','No'] },
    { key:'esMigranteRetornado', label:'¿Es migrante retornado?', options:['Sí','No'] }
  ]},
  { title: 'Estancia en Urgencias (Hoja Diaria)', fields: [
    { key:'atencionPrehospitalaria', label:'Atención prehospitalaria', options:['Sí','No'] },
    { key:'tiempoTraslado', label:'Tiempo de traslado (HH:MM)' },
    { key:'motivoAtencion', label:'Motivo de atención', options:['Accidente, envenenamiento y violencia','Médica','Ginecoobstétrico','Pediátrico'] },
    { key:'tipoCama', label:'Tipo de cama', options:['Cama de observación','Cama de choque','Sin cama'] },
    { key:'trasladoTransitorio', label:'Traslado transitorio', options:['Sí','No'] },
    { key:'unidadTraslado', label:'Nombre de la unidad (traslado)' },
    { key:'cluesTraslado', label:'CLUES (traslado)' },
    { key:'ministerioPublico', label:'Aviso al Ministerio Público', options:['Sí','No'] },
    { key:'folioCertificado', label:'Folio del certificado (defunción)' },
    { key:'semanasGestacion', label:'Semanas de gestación' }
  ]},
  { title: 'Afecciones tratadas', fields: [
    { key:'comorbilidad1', label:'Comorbilidad 1' }, { key:'comorbilidad2', label:'Comorbilidad 2' },
    { key:'comorbilidad3', label:'Comorbilidad 3' }, { key:'comorbilidad4', label:'Comorbilidad 4' },
    { key:'comorbilidad5', label:'Comorbilidad 5' }, { key:'comorbilidad6', label:'Comorbilidad 6' },
    { key:'causaExternaAfeccion', label:'Causa externa', wide:true },
    { key:'llenadoHojaViolencia', label:'Llenado de hoja de atención por violencia y/o lesión', options:['Sí','No'] },
    { key:'folioHojaViolencia', label:'Folio de la hoja de lesiones' }
  ]},
  { title: 'Interconsulta (Hoja Diaria)', fields: [
    { key:'interconsulta1Especialidad', label:'Especialidad 1' }, { key:'interconsulta1Medico', label:'Médico interconsultante 1' },
    { key:'interconsulta2Especialidad', label:'Especialidad 2' }, { key:'interconsulta2Medico', label:'Médico interconsultante 2' },
    { key:'interconsulta3Especialidad', label:'Especialidad 3' }, { key:'interconsulta3Medico', label:'Médico interconsultante 3' }
  ]},
  { title: 'Procedimientos (Hoja Diaria)', fields: [
    { key:'procedimiento1', label:'Procedimiento 1' }, { key:'procedimiento2', label:'Procedimiento 2' },
    { key:'procedimiento3', label:'Procedimiento 3' }, { key:'procedimiento4', label:'Procedimiento 4' },
    { key:'procedimiento5', label:'Procedimiento 5' }
  ]},
  { title: 'Hospitalización — datos adicionales', fields: [
    { key:'infeccionIntrahospitalaria', label:'Infección intrahospitalaria', options:['Sí','No'] },
    { key:'tipoAnestesia', label:'Tipo de anestesia', options:['General','Regional','Sedación','Local','Combinado','No usó'] },
    { key:'violenciaYLesionHosp', label:'Violencia y/o lesión', options:['Sí','No'] },
    { key:'folioLesionesHosp', label:'Folio de la hoja de lesiones (hospitalización)' },
    { key:'procedimientoHosp1', label:'Procedimiento Dx/Qx. 1' }, { key:'procedimientoHosp2', label:'Procedimiento Dx/Qx. 2' },
    { key:'procedimientoHosp3', label:'Procedimiento Dx/Qx. 3' }, { key:'procedimientoHosp4', label:'Procedimiento Dx/Qx. 4' },
    { key:'procedimientoHosp5', label:'Procedimiento Dx/Qx. 5' },
    { key:'atencionObstetricaAplica', label:'Atención obstétrica', options:['No aplica','Aplica'] },
    { key:'historiaGinecobstetrica', label:'Historia ginecobstétrica (G/A/P/C)' },
    { key:'planificacionFamiliar', label:'Planificación familiar' }
  ]},
  { title: 'Medicamentos suministrados — detalle (Hoja Diaria)', fields: [
    { key:'medicamento1', label:'Medicamento 1 — nombre genérico' }, { key:'medicamento1Presentacion', label:'Medicamento 1 — presentación' },
    { key:'medicamento2', label:'Medicamento 2 — nombre genérico' }, { key:'medicamento2Presentacion', label:'Medicamento 2 — presentación' },
    { key:'medicamento3', label:'Medicamento 3 — nombre genérico' }, { key:'medicamento3Presentacion', label:'Medicamento 3 — presentación' },
    { key:'medicamento4', label:'Medicamento 4 — nombre genérico' }, { key:'medicamento4Presentacion', label:'Medicamento 4 — presentación' },
    { key:'medicamento5', label:'Medicamento 5 — nombre genérico' }, { key:'medicamento5Presentacion', label:'Medicamento 5 — presentación' },
    { key:'medicamento6', label:'Medicamento 6 — nombre genérico' }, { key:'medicamento6Presentacion', label:'Medicamento 6 — presentación' }
  ]}
];

// ---- STATE ----
function defaultPatient() {
  return {
    institucion:'Hospital General Salvatierra',
    nombre:'', apellidoPaterno:'', apellidoMaterno:'', nombreSocial:'', curp:'', sexo:'', fechaNacimiento:'', entidadNacimiento:'', edad:'', escolaridad:'',
    domicilio:'', telefono:'', familiar:'', relacionResponsable:'', telefonoFamiliar:'',
    afiliacion:'', numAfiliacion:'', gratuidad:'',
    expediente:'', folio:'', fechaIngreso:'', horaIngreso:'', fechaEgreso:'', horaEgreso:'', servicio:'Urgencias', cama:'', medico:'', curpMedico:'', cedulaMedico:'', medicoEgreso:'', medicosTratantes:'', interconsultas:'', procedencia:'', motivoEgreso:'', mujerEdadFertil:'',
    tipoUrgencia:'', prioridadTraslado:'', altaPor:'', hospTipo:'', prioridadEstudio:'', hospOConsulta:'',
    motivoConsulta:'', antecedentes:'', alergias:'Niega',
    ta:'', fc:'', fr:'', temp:'', spo2:'', glucosa:'', eva:'', glasgow:'15', peso:'', talla:'',
    diagnosticoIngreso:'', diagnosticoEgreso:'', grupoSanguineo:'', transfusiones:'', tratamientos:'', intervencionesQuirurgicas:'', diasEstancia:'',
    procedimientoConsentido:'', riesgosComplicaciones:'', diagnostico2:'', beneficiosEsperados:'',
    medicamentosSuministrados:'',
    numeroSolicitud:'', especialidadReferida:'', procedimientoSolicitadoReferencia:'', unidadReferida:'', tratamientoEmpleado:'', procedimientoTerapeutico:'', recursosEspeciales:'', medicoAcepta:'', embarazoAltoRiesgo:false, motivoReferenciaDetalle:'',
    entidadFederativa:'Guanajuato', municipio:'Salvatierra', localidad:'', codigoPostal:'', tipoVialidad:'', nombreVialidad:'', numExt:'', numInt:'', tipoAsentamiento:'', nombreAsentamiento:'',
    seConsideraIndigena:'', seConsideraAfromexicano:'', esMigranteRetornado:'',
    atencionPrehospitalaria:'', tiempoTraslado:'', motivoAtencion:'', tipoCama:'', trasladoTransitorio:'', unidadTraslado:'', cluesTraslado:'',
    ministerioPublico:'', folioCertificado:'', semanasGestacion:'',
    comorbilidad1:'', comorbilidad2:'', comorbilidad3:'', comorbilidad4:'', comorbilidad5:'', comorbilidad6:'', causaExternaAfeccion:'', llenadoHojaViolencia:'', folioHojaViolencia:'',
    interconsulta1Especialidad:'', interconsulta1Medico:'', interconsulta2Especialidad:'', interconsulta2Medico:'', interconsulta3Especialidad:'', interconsulta3Medico:'',
    procedimiento1:'', procedimiento2:'', procedimiento3:'', procedimiento4:'', procedimiento5:'',
    medicamento1:'', medicamento1Presentacion:'', medicamento2:'', medicamento2Presentacion:'', medicamento3:'', medicamento3Presentacion:'', medicamento4:'', medicamento4Presentacion:'', medicamento5:'', medicamento5Presentacion:'', medicamento6:'', medicamento6Presentacion:'',
    infeccionIntrahospitalaria:'', tipoAnestesia:'', violenciaYLesionHosp:'', folioLesionesHosp:'',
    procedimientoHosp1:'', procedimientoHosp2:'', procedimientoHosp3:'', procedimientoHosp4:'', procedimientoHosp5:'',
    atencionObstetricaAplica:'', historiaGinecobstetrica:'', planificacionFamiliar:'',
    observaciones:'',
    notas:[],
    ee:{
      antirrabico:{ folio:'', fecha:'', unidad:'', jurisdiccion:'', referidoDe:'', referidoA:'', tratamientoPrevio:'', numDosis:'', fechaUltimaDosis:'', fechaExposicion:'', tipoExposicion:'', localizacionMordedura:'', tipoHerida:'', especieAnimal:'', edadAnimal:'', sexoAnimal:'', animalVacunado:'', localizacionAnimal:'', examenClinico:'', fechaExamenClinico:'', diasObservacion:'', resultadoObservacion:'', examenLaboratorio:'', tipoExamenLab:'', fechaExamenLab:'', nombreMVZ:'', tipoVacuna:'', numLote:'', caducidad:'', dosisIndicadas:'', dosisAplicadas:'', fechaAplicacion:'', totalFrascos:'', gammaglobulina:'', gammaglobulinaDosis:'', vacunaTd:'', aceptoTratamiento:'', abandonoTratamiento:'', causaInterrupcion:'', motivoAgresion:'' },
      eda:{ semanaNotificacion:'', hablaLenguaIndigena:'', cualLengua:'', ocupacion:'', nombreUnidad:'', jurisdiccion:'', procedencia:'', fechaPrimerContacto:'', esMigrante:'', paisNacionalidad:'', paisOrigen:'', casoBinacional:'', paisTransito:'', fechaIngresoPais:'', visitoOtrosLugares:'', cuantosLugares:'', especifiqueLugar:'', fechaInicio:'', semanaEpidemiologicaInicio:'', duracionDiarrea:'', numVomitos:'', fiebre:'', consistencia:'', color:'', aspecto:'', estadoHidratacion:'', choque:'', gradoDesnutricion:'', planHidratacion:'', tratamiento:'', cualAntibiotico:'', solucionesEmpleadas:'', alimentosConsumidos:'', tipoHielo:'', fechaConsumo:'', domicilioConsumo:'', lugarConsumo:'', procedenciaAgua:'', eliminacionExcretas:'', contacto1Nombre:'', contacto1Edad:'', contacto1Sexo:'', contacto1Tipo:'', contacto2Nombre:'', contacto2Edad:'', contacto2Sexo:'', contacto2Tipo:'', contacto3Nombre:'', contacto3Edad:'', contacto3Sexo:'', contacto3Tipo:'', contacto4Nombre:'', contacto4Edad:'', contacto4Sexo:'', contacto4Tipo:'', bloqueoFamiliar:'', cloracionDepositos:'', manejoExcretas:'', hisopoContactos:'', quimioprofilaxis:'', tomaHisopo:'', resultadoLab:'', defuncion:'' },
      vectores:{ rfc:'', esIndigena:'', cualLengua:'', claveUnidad:'', jurisdiccion:'', dxInicialHospitalario:'', estadoNacimiento:'', municipioNacimiento:'', domicilioResidencia:'', colonia:'', cp:'', ocupacion:'', clasificacion:'', tipoCaso:'', otroEstado:'', otroPais:'', otraJurisdiccion:'', fechaInicioSintomas:'', fechaInicioFiebre:'', fechaInicioAlarma:'', fechaInicioGrave:'', lugaresVisitados:'', semanasGestacion:'', fechaUltimaRegla:'', sintomas:'', comorbilidad:'', hto:'', hb:'', plaquetas:'', albumina:'', leucocitos:'', linfocitos:'', dhl:'', alt:'', ast:'', bilirrubinaDirecta:'', bilirrubinaTotal:'', fechaUltrasonido:'', fechaRadiografia:'', liquidoCavidades:'', tipoMuestraLab:'', fechaTomaMuestra:'', diasTransito:'', muestraRechazada:'', fechaRecepcion:'', muestraTomada:'', folioCaso:'', altaVoluntaria:'', defuncion:'', fechaDefuncion:'' },
      irag:{ ocupacion:'', seReconoceIndigena:'', hablaLenguaIndigena:'', tipoPaciente:'', esMigrante:'', paisNacionalidad:'', paisNacimiento:'', entidadNacimiento:'', paisesTransito:'', fechaIngresoMexico:'', institucionEducativa:'', embarazada:'', mesesEmbarazo:'', puerperio:'', diasPuerperio:'', fechaInicioSintomas:'', viajeReciente:'', contactoRespiratorio:'', contactoAnimales:'', vacunaInfluenza:'', vacunaCovid:'', cuantasDosis:'', marcaVacuna:'', fecha1aDosis:'', fecha2aDosis:'', dosisRefuerzo:'', sintomas:'', comorbilidad:'', neumonia:'', uci:'', intubado:'', tratamientoAntipireticos:'', tratamientoAntivirales:'', inicioTratamientoAntiviral:'', antiviralSeleccionado:'', tratamientoAntimicrobianos:'', muestraTomada:'', tipoMuestra:'', fechaTomaMuestra:'', laboratorioProcesamiento:'', resultadoMuestra:'', muestraAntigeno:'', resultadoAntigeno:'', covidClinicoEpidemiologico:'', evolucion:'', defuncion:'', folioCertificadoDefuncion:'' },
      ponzonoso:{ fechaNotificacion:'', horaNotificacion:'', folioPlataforma:'', institucionTratante:'', rfc:'', seguridadSocial:'', sector:'', manzana:'', embarazoActual:'', semanaGestacion:'', esMigrante:'', paisOrigen:'', nacionalidad:'', puebloEtnia:'', hablaLenguaOriginaria:'', puebloOriginarioCual:'', sabeLeer:'', ocupacionActual:'', comorbilidades:'', tratamientoPrevio:'', fechaTratamientoPrevio:'', agenteInvolucradoPrevio:'', entidadIntoxicacion:'', coloniaIntoxicacion:'', calleIntoxicacion:'', numIntIntoxicacion:'', fechaIntoxicacion:'', horaIntoxicacion:'', momentoIntoxicacion:'', sitioOcurrio:'', actividadRealizando:'', sitioAgente:'', interrogatorio:'', nombreFamiliar:'', regionCorporal:'', agenteCausal:'', clasificacionGravedad:'', sintomas:'', fechaInicioCuadro:'', horaInicioSintomas:'', tipoAtencion:'', tiempoHospitalizacion:'', traslado:'', lugarTraslado:'', motivoTraslado:'', fechaTraslado:'', folioCertificadoDefuncion:'', vacunaAntitetanica:'', fechaVacunaAntitetanica:'', tipoAntidoto:'', horaAntidoto:'', numFrascos:'', viaAdministracion:'', loteAntidoto:'', caducidadAntidoto:'', otrosMedicamentos:'', observacionesTratamiento:'', estadoAnimal:'', enviadoLaboratorio:'', especieTaxonomica:'', porQuienTaxonomico:'', notaLaboratorio:'' }
    },
    lab:{ selected:{} },
    xray:{ rayosX:'', ultrasonido:'', mastografia:'', otros:'', otrosModalidad:'', tomografia:'', tomografiaModalidad:'', urea:'', creatinina:'', justificacion:'', portatil:'' },
    violencia:{ fecha:'', hora:'', sitio:'', intencionalidad:'', agente:'', tipo:'', parentescoAgresor:'', servicioAtencion:'', avisoMP:'', causaExterna:'', destino:'', escolaridad:'', sabeLeer:'', dificultadDiscapacidad:'', habaLenguaIndigena:'', referidoPor:'', nombreReferido:'', cluesReferido:'', fueDiaFestivo:'', municipioOcurrencia:'', localidadOcurrencia:'', cpOcurrencia:'', tipoVialidadOcurrencia:'', nombreVialidadOcurrencia:'', bajoEfectosPaciente:'', esAccidenteVehicular:'', lesionadoEs:'', usoEquipoSeguridad:'', equipoSeguridad:'', numAgresores:'', sexoAgresor:'', edadAgresor:'', agresorBajoEfectos:'', eventoAutoinfligido:'', tipoAtencion:'', areaAnatomicaGravedad:'', consecuenciaGravedad:'', folioCertificadoViolencia:'', responsableAtencion:'' }
  };
}

let patient;
try {
  const saved = JSON.parse(localStorage.getItem('urgencias_patient_v3') || 'null');
  patient = saved ? Object.assign(defaultPatient(), saved) : defaultPatient();
  // deep-merge ee sub-objects so new fields get defaults even in saved records
  const defEE = defaultPatient().ee;
  patient.ee = Object.assign({}, defEE, patient.ee || {});
  for (const k of Object.keys(defEE)) {
    patient.ee[k] = Object.assign({}, defEE[k], (patient.ee[k] || {}));
  }
} catch(e) { patient = defaultPatient(); }

let currentTab = 'captura';

function savePatient() {
  localStorage.setItem('urgencias_patient_v3', JSON.stringify(patient));
}

function setField(key, value) {
  const parts = key.split('.');
  if (parts.length === 3) {
    if (!patient[parts[0]]) patient[parts[0]] = {};
    if (!patient[parts[0]][parts[1]]) patient[parts[0]][parts[1]] = {};
    patient[parts[0]][parts[1]][parts[2]] = value;
  } else if (parts.length === 2) {
    patient[parts[0]][parts[1]] = value;
  } else {
    patient[key] = value;
  }
  savePatient();
  populateCurrentDoc();
}

function getField(key) {
  const parts = key.split('.');
  if (parts.length === 3) {
    return ((patient[parts[0]] || {})[parts[1]] || {})[parts[2]] || '';
  } else if (parts.length === 2) {
    return (patient[parts[0]] || {})[parts[1]] || '';
  }
  return patient[key] || '';
}

// ---- TAB SWITCHING ----
function switchTab(tab) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
  document.getElementById('btn-print').style.display = tab === 'captura' ? 'none' : 'block';
  document.getElementById('btn-preview').style.display = tab === 'captura' ? 'none' : 'block';
  currentTab = tab;
  populateCurrentDoc();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ---- POPULATE DOCUMENT TABS ----
function populateCurrentDoc() {
  const pane = document.getElementById('tab-' + currentTab);
  if (!pane) return;

  // Simple fields: data-p="key"
  pane.querySelectorAll('[data-p]').forEach(el => {
    const val = patient[el.dataset.p] || '';
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
    else el.textContent = val;
  });

  // Combined name fields: data-combo="key1 key2 key3"
  pane.querySelectorAll('[data-combo]').forEach(el => {
    const keys = el.dataset.combo.split(' ');
    el.value = keys.map(k => patient[k] || '').filter(Boolean).join(' ');
  });

  // Checkbox groups: .chk-group[data-field="key"]
  pane.querySelectorAll('.chk-group').forEach(grp => {
    const key = grp.dataset.field;
    const cur = getField(key);
    grp.querySelectorAll('input[type=checkbox]').forEach(cb => {
      cb.checked = cb.dataset.val === cur;
    });
  });

  // Editable fields: data-rw="key"
  pane.querySelectorAll('[data-rw]').forEach(el => {
    const key = el.dataset.rw;
    const val = getField(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
  });

  // Special: embarazo alto riesgo checkbox
  const earChk = document.getElementById('chk-embarazo-alto-riesgo');
  if (earChk) earChk.checked = !!patient.embarazoAltoRiesgo;

  // Nota de Evolución
  if (currentTab === 'evolucion') {
    renderNotas();
    requestAnimationFrame(checkNotasOverflow);
    const obsTa = document.getElementById('observaciones-ta');
    if (obsTa) autoResize(obsTa);
  }

  // Auto-resize all data-rw textareas in the active pane
  pane.querySelectorAll('textarea[data-rw]').forEach(ta => autoResize(ta));

  // Lab checklist
  if (currentTab === 'laboratorio') renderLab();
}

// ---- ATTACH EDITABLE HANDLERS ----
function attachDocHandlers() {
  document.addEventListener('change', function(e) {
    const el = e.target;

    // Checkbox group
    if (el.type === 'checkbox' && el.closest('.chk-group')) {
      const grp = el.closest('.chk-group');
      const key = grp.dataset.field;
      if (el.checked) {
        // uncheck siblings
        grp.querySelectorAll('input[type=checkbox]').forEach(cb => { if (cb !== el) cb.checked = false; });
        setField(key, el.dataset.val);
      } else {
        setField(key, '');
      }
      return;
    }

    // Editable text/textarea
    if (el.dataset.rw) {
      setField(el.dataset.rw, el.value);
      return;
    }

    // Embarazo alto riesgo
    if (el.id === 'chk-embarazo-alto-riesgo') {
      patient.embarazoAltoRiesgo = el.checked;
      savePatient();
      return;
    }
  });
}

// ---- CAPTURA FORM GENERATION ----
function buildCapturaForm() {
  const container = document.getElementById('captura-sections');
  container.innerHTML = '';

  SECTIONS_CONFIG.forEach(section => {
    const secDiv = document.createElement('div');
    secDiv.className = 'sec-block';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'sec-title';
    titleDiv.textContent = section.title;
    secDiv.appendChild(titleDiv);

    const grid = document.createElement('div');
    grid.className = 'fields-grid';

    section.fields.forEach(f => {
      const wrapper = document.createElement('div');
      if (f.wide) wrapper.className = 'field-wide';

      const lbl = document.createElement('label');
      lbl.className = 'lbl';
      lbl.textContent = f.label;
      wrapper.appendChild(lbl);

      let input;
      if (f.options) {
        input = document.createElement('select');
        input.className = 'inp';
        const blank = document.createElement('option');
        blank.value = ''; blank.textContent = 'Seleccionar...';
        input.appendChild(blank);
        f.options.forEach(opt => {
          const o = document.createElement('option');
          o.value = opt; o.textContent = opt;
          input.appendChild(o);
        });
        input.value = patient[f.key] || '';
      } else if (f.textarea) {
        input = document.createElement('textarea');
        input.className = 'inp';
        input.rows = 2;
        input.style.resize = 'vertical';
        input.value = patient[f.key] || '';
        input.placeholder = '';
      } else {
        input = document.createElement('input');
        input.className = 'inp';
        input.type = f.type || 'text';
        input.value = patient[f.key] || '';
      }

      input.dataset.capturaKey = f.key;
      input.addEventListener('change', function() {
        patient[f.key] = this.value;
        savePatient();
      });
      input.addEventListener('input', function() {
        patient[f.key] = this.value;
        savePatient();
      });

      wrapper.appendChild(input);
      grid.appendChild(wrapper);
    });

    secDiv.appendChild(grid);
    container.appendChild(secDiv);
  });
}

// ---- HELPERS ----
function autoResize(ta) {
  ta.style.height = '0';                               // colapsa primero
  ta.style.height = Math.max(80, ta.scrollHeight) + 'px'; // crece al contenido
}

// ---- NOTAS DE EVOLUCIÓN ----
function renderNotas() {
  const container = document.getElementById('notas-container');
  if (!container) return;
  container.innerHTML = '';
  (patient.notas || []).forEach((nota, i) => {
    const row = document.createElement('div');
    row.className = 'nota-row';
    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:5px">
        <input type="datetime-local" value="${nota.fechaHora || ''}" data-nota-idx="${i}" data-nota-key="fechaHora" style="border:1px solid #c7cedb;border-radius:5px;padding:3px 6px;font-size:11px">
        <button class="btn-rm-nota" onclick="removeNota(${i})">eliminar</button>
      </div>
      <textarea class="inp" style="min-height:80px;resize:none;overflow:hidden" data-nota-idx="${i}" data-nota-key="texto" placeholder="Evolución...">${nota.texto || ''}</textarea>
    `;
    container.appendChild(row);
  });

  // Auto-altura inicial para notas con texto existente
  container.querySelectorAll('textarea').forEach(autoResize);

  container.querySelectorAll('[data-nota-idx]').forEach(el => {
    el.addEventListener('change', function() {
      const idx = parseInt(this.dataset.notaIdx);
      const key = this.dataset.notaKey;
      patient.notas[idx][key] = this.value;
      savePatient();
      requestAnimationFrame(checkNotasOverflow);
    });
    el.addEventListener('input', function() {
      const idx = parseInt(this.dataset.notaIdx);
      const key = this.dataset.notaKey;
      patient.notas[idx][key] = this.value;
      savePatient();
      if (this.tagName === 'TEXTAREA') autoResize(this);
      requestAnimationFrame(checkNotasOverflow);
    });
  });
}

function addNota() {
  if (!patient.notas) patient.notas = [];
  patient.notas.push({ fechaHora: new Date().toISOString().slice(0,16), texto:'' });
  savePatient();
  renderNotas();
}

function removeNota(idx) {
  patient.notas.splice(idx, 1);
  savePatient();
  renderNotas();
}

// ---- LAB CHECKLIST ----
function renderLab() {
  const container = document.getElementById('lab-checklist');
  if (!container) return;
  container.innerHTML = '';
  LAB_GROUPS.forEach(grp => {
    const grpDiv = document.createElement('div');
    grpDiv.className = 'lab-grp';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'lab-grp-title';
    titleDiv.textContent = grp.title;
    grpDiv.appendChild(titleDiv);
    grp.items.forEach(name => {
      const lbl = document.createElement('label');
      lbl.className = 'lab-item';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = !!(patient.lab && patient.lab.selected && patient.lab.selected[name]);
      cb.addEventListener('change', function() {
        if (!patient.lab) patient.lab = { selected:{} };
        if (!patient.lab.selected) patient.lab.selected = {};
        patient.lab.selected[name] = this.checked;
        savePatient();
      });
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(' ' + name));
      grpDiv.appendChild(lbl);
    });
    container.appendChild(grpDiv);
  });
}

// ---- NUEVO PACIENTE ----
function nuevoPaciente() {
  if (!confirm('¿Limpiar todos los datos capturados para iniciar un paciente nuevo?')) return;
  patient = defaultPatient();
  savePatient();
  buildCapturaForm();
  populateCurrentDoc();
}

// ---- OVERFLOW INDICATOR ----
let _overflowTimer = null;
function checkNotasOverflow() {
  clearTimeout(_overflowTimer);
  _overflowTimer = setTimeout(() => {
    const badge = document.getElementById('notas-overflow-badge');
    if (!badge || currentTab !== 'evolucion') { if (badge) badge.style.display = 'none'; return; }

    // Leer estado actual dentro del timeout (cancela resultados de checks anteriores)
    const hasText = (patient.notas || []).some(n => (n.texto || '').trim().length > 0);
    if (!hasText) { badge.style.display = 'none'; return; }

    const notasContainer = document.getElementById('notas-container');
    const docPage = document.querySelector('#tab-evolucion .doc-page');
    if (!notasContainer || !docPage) { badge.style.display = 'none'; return; }

    // Carta imprimible: 11in - márgenes @page (0.45×2) - padding doc (.5×2) = 9.1in × 96 ≈ 874px contenido
    // distancia desde el tope del doc-page hasta el tope del notas-container
    const docRect = docPage.getBoundingClientRect();
    const notasRect = notasContainer.getBoundingClientRect();
    const notasTopFromDoc = Math.max(0, notasRect.top - docRect.top);
    const available = Math.max(150, 874 - notasTopFromDoc - 95); // 95 = padding-bottom + footer

    badge.style.display = (notasContainer.scrollHeight > available) ? 'flex' : 'none';
  }, 150);
}

// ---- PRINT FLOW ----
// Tabs que se imprimen en oficio (legal 8.5"×14")
const LEGAL_TABS = new Set(['diaria', 'hospitalizacion', 'violencia', 'antirrabico', 'vectores', 'irag', 'ponzonoso']);

function getPrintOpts(extraOpts) {
  const isLegal = LEGAL_TABS.has(currentTab);
  const pageSize = isLegal ? 'Legal' : 'Letter';
  // Altura objetivo en px a 96dpi: legal≈1344, carta≈1056
  const targetH = (isLegal ? 14 : 11) * 96;
  const docPage = document.querySelector('#tab-' + currentTab + ' .doc-page');
  let scaleFactor = 100;
  if (docPage && docPage.scrollHeight > targetH * 0.9) {
    scaleFactor = Math.max(50, Math.floor((targetH * 0.92 / docPage.scrollHeight) * 100));
  }
  // Inyectar @page size para el fallback window.print()
  let s = document.getElementById('_print_page_style');
  if (!s) { s = document.createElement('style'); s.id = '_print_page_style'; document.head.appendChild(s); }
  s.textContent = '@media print{@page{size:' + (isLegal ? 'legal' : 'letter') + ' portrait;margin:.25in}}';
  return Object.assign({ pageSize, scaleFactor }, extraOpts || {});
}

async function doPrint(extraOpts) {
  const opts = getPrintOpts(extraOpts);
  if (window.electronAPI) {
    await window.electronAPI.print(opts);
  } else {
    window.print();
  }
}

function handlePrint() {
  if (currentTab !== 'evolucion') { doPrint(); return; }
  const docPage = document.querySelector('#tab-evolucion .doc-page');
  const overflows = docPage && docPage.scrollHeight > 960;
  if (!overflows) { doPrint(); return; }
  openDuplexModal();
}

function openDuplexModal() {
  document.getElementById('duplex-step-0').style.display = 'block';
  document.getElementById('duplex-step-1').style.display = 'none';
  document.getElementById('duplex-step-2').style.display = 'none';
  document.getElementById('duplex-step-3').style.display = 'none';
  document.getElementById('modal-duplex').style.display = 'flex';
}

function closeDuplexModal() {
  document.getElementById('modal-duplex').style.display = 'none';
}

function printNormal() {
  closeDuplexModal();
  doPrint();
}

function duplexStep1() {
  document.getElementById('duplex-step-0').style.display = 'none';
  document.getElementById('duplex-step-1').style.display = 'block';
}

async function printAnverso() {
  document.getElementById('duplex-step-1').style.display = 'none';
  await doPrint({ pageRanges: [{ from: 0, to: 0 }], silent: false });
  document.getElementById('duplex-step-2').style.display = 'block';
}

async function printReverso() {
  document.getElementById('duplex-step-2').style.display = 'none';
  await doPrint({ pageRanges: [{ from: 1, to: 999 }], silent: false });
  document.getElementById('duplex-step-3').style.display = 'block';
}

// ---- PRINT PREVIEW ----
function openPreview() {
  const docPage = document.querySelector('#tab-' + currentTab + ' .doc-page');
  if (!docPage) return;

  // Snapshot current input values into DOM so the clone picks them up
  docPage.querySelectorAll('input').forEach(el => el.setAttribute('value', el.value));
  docPage.querySelectorAll('textarea').forEach(el => { el.textContent = el.value; });

  const clone = docPage.cloneNode(true);

  // Hide interactive controls in clone
  clone.querySelectorAll('button').forEach(el => el.style.display = 'none');
  clone.querySelectorAll('input, textarea').forEach(el => {
    el.style.pointerEvents = 'none';
    el.removeAttribute('placeholder');
  });

  const previewDoc = document.getElementById('preview-doc');
  previewDoc.innerHTML = '';
  previewDoc.appendChild(clone);

  document.getElementById('preview-modal').style.display = 'flex';

  requestAnimationFrame(() => {
    const modal = document.getElementById('preview-modal');
    const availW = modal.offsetWidth * 0.9;
    const scale = Math.min(1, availW / clone.offsetWidth);
    clone.style.transform = 'scale(' + scale + ')';
    clone.style.transformOrigin = 'top left';
    previewDoc.style.width = (clone.offsetWidth * scale) + 'px';
    previewDoc.style.height = (clone.offsetHeight * scale) + 'px';
  });
}

function closePreview() {
  document.getElementById('preview-modal').style.display = 'none';
}

// ---- INIT ----
buildCapturaForm();
attachDocHandlers();
populateCurrentDoc();
