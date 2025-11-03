// Google Apps Script para Transportes Masic
// Este código debe copiarse en: Extensions > Apps Script de tu Google Sheet

const SHEET_ID = '1B6p3qigLPwyYU_A9e6WYQDjh1dKJB0Una5JC96JJZzw';

// Configuración de hojas
const HOJAS = {
  CONFIG: 'Config',
  VEHICULOS: 'Vehiculos',
  CLIENTES: 'Clientes',
  CONDUCTORES: 'Conductores',
  SERVICIOS: 'Servicios',
  GASTOS: 'Gastos',
  INGRESOS: 'Ingresos'
};

/**
 * Función principal que maneja todas las peticiones POST
 */
function doPost(e) {
  try {
    const datos = JSON.parse(e.postData.contents);
    const accion = datos.action;
    
    let resultado;
    
    switch(accion) {
      case 'obtenerDatos':
        resultado = obtenerDatosIniciales();
        break;
      case 'registrarServicio':
        resultado = registrarServicio(datos.data);
        break;
      case 'registrarGasto':
        resultado = registrarGasto(datos.data);
        break;
      case 'obtenerServiciosHoy':
        resultado = obtenerServiciosHoy();
        break;
      case 'obtenerGastosHoy':
        resultado = obtenerGastosHoy();
        break;
      default:
        resultado = { error: 'Acción no reconocida' };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(resultado))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función GET para pruebas
 */
function doGet(e) {
  return ContentService
    .createTextOutput('API de Transportes Masic funcionando correctamente')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Obtener datos iniciales (vehículos, clientes, conductores)
 */
function obtenerDatosIniciales() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  
  // Obtener vehículos
  const hojaVehiculos = ss.getSheetByName(HOJAS.VEHICULOS);
  const vehiculos = hojaVehiculos.getDataRange().getValues();
  const headerVehiculos = vehiculos[0];
  const datosVehiculos = vehiculos.slice(1).filter(row => row[0] !== '').map(row => {
    const obj = {};
    headerVehiculos.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  
  // Obtener clientes
  const hojaClientes = ss.getSheetByName(HOJAS.CLIENTES);
  const clientes = hojaClientes.getDataRange().getValues();
  const headerClientes = clientes[0];
  const datosClientes = clientes.slice(1).filter(row => row[0] !== '').map(row => {
    const obj = {};
    headerClientes.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  
  // Obtener conductores
  const hojaConductores = ss.getSheetByName(HOJAS.CONDUCTORES);
  const conductores = hojaConductores.getDataRange().getValues();
  const headerConductores = conductores[0];
  const datosConductores = conductores.slice(1).filter(row => row[0] !== '').map(row => {
    const obj = {};
    headerConductores.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  
  return {
    vehiculos: datosVehiculos,
    clientes: datosClientes,
    conductores: datosConductores,
    success: true
  };
}

/**
 * Generar el siguiente ID de servicio
 */
function generarIdServicio() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const hoja = ss.getSheetByName(HOJAS.SERVICIOS);
  const ultimaFila = hoja.getLastRow();
  
  if (ultimaFila <= 1) {
    return 'SER0001';
  }
  
  const ultimoId = hoja.getRange(ultimaFila, 1).getValue();
  const numero = parseInt(ultimoId.replace('SER', '')) + 1;
  return 'SER' + numero.toString().padStart(4, '0');
}

/**
 * Registrar un nuevo servicio
 */
function registrarServicio(datos) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const hoja = ss.getSheetByName(HOJAS.SERVICIOS);
    
    const idServicio = generarIdServicio();
    const fecha = new Date();
    
    // Estructura según las columnas de tu hoja de Servicios
    // Ajustar según tu estructura real
    const nuevaFila = [
      idServicio,
      fecha,
      datos.cliente || '',
      datos.vehiculo || '',
      datos.conductor || '',
      datos.origen || '',
      datos.destino || '',
      datos.km || 0,
      datos.pasajeros || 0,
      datos.tipoServicio || '',
      parseFloat(datos.monto) || 0,
      datos.formaPago || ''
    ];
    
    hoja.appendRow(nuevaFila);
    
    return {
      success: true,
      message: 'Servicio registrado exitosamente',
      idServicio: idServicio
    };
    
  } catch(error) {
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * Generar el siguiente ID de gasto
 */
function generarIdGasto() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const hoja = ss.getSheetByName(HOJAS.GASTOS);
  const ultimaFila = hoja.getLastRow();
  
  if (ultimaFila <= 1) {
    return 'GTO0001';
  }
  
  const ultimoId = hoja.getRange(ultimaFila, 1).getValue();
  const numero = parseInt(ultimoId.replace('GTO', '')) + 1;
  return 'GTO' + numero.toString().padStart(4, '0');
}

/**
 * Registrar un nuevo gasto
 */
function registrarGasto(datos) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const hoja = ss.getSheetByName(HOJAS.GASTOS);
    
    const idGasto = generarIdGasto();
    const fecha = new Date();
    
    // Estructura según las columnas de tu hoja de Gastos
    // Ajustar según tu estructura real
    const nuevaFila = [
      idGasto,
      fecha,
      datos.categoria || '',
      datos.vehiculo || '',
      datos.proveedor || '',
      datos.documento || '',
      parseFloat(datos.montoNeto) || 0,
      parseFloat(datos.iva) || 0,
      parseFloat(datos.total) || 0,
      datos.observaciones || ''
    ];
    
    hoja.appendRow(nuevaFila);
    
    return {
      success: true,
      message: 'Gasto registrado exitosamente',
      idGasto: idGasto
    };
    
  } catch(error) {
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * Obtener servicios del día actual
 */
function obtenerServiciosHoy() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const hoja = ss.getSheetByName(HOJAS.SERVICIOS);
  const datos = hoja.getDataRange().getValues();
  
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  const serviciosHoy = datos.slice(1).filter(row => {
    const fechaServicio = new Date(row[1]);
    fechaServicio.setHours(0, 0, 0, 0);
    return fechaServicio.getTime() === hoy.getTime();
  });
  
  return {
    success: true,
    servicios: serviciosHoy,
    total: serviciosHoy.length
  };
}

/**
 * Obtener gastos del día actual
 */
function obtenerGastosHoy() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const hoja = ss.getSheetByName(HOJAS.GASTOS);
  const datos = hoja.getDataRange().getValues();
  
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  const gastosHoy = datos.slice(1).filter(row => {
    const fechaGasto = new Date(row[1]);
    fechaGasto.setHours(0, 0, 0, 0);
    return fechaGasto.getTime() === hoy.getTime();
  });
  
  return {
    success: true,
    gastos: gastosHoy,
    total: gastosHoy.length
  };
}
