# 🚗 Transportes Masic - Sistema de Gestión Móvil

## 📱 FASE 1: Webapp para Registro Diario

Sistema web progresivo (PWA) para registrar servicios y gastos desde el móvil, conectado directamente con tu Google Sheet.

---

## ✨ FUNCIONALIDADES IMPLEMENTADAS

### ✅ **Registro de Servicios**
- Formulario optimizado para móvil
- Selección de Cliente, Vehículo, Conductor
- 7 tipos de servicio disponibles
- 11 formas de pago
- Auto-generación de ID (SER00XX)
- Guarda directo en tu Google Sheet

### ✅ **Registro de Gastos**
- Formulario optimizado para móvil
- 18 categorías de gastos
- Cálculo automático de IVA (19%)
- Auto-generación de ID (GTO00XX)
- Guarda directo en tu Google Sheet

### ✅ **Dashboard del Día**
- KPIs en tiempo real:
  * Servicios realizados hoy
  * Ingresos del día
  * Gastos del día
  * Margen del día
- Visualización clara y rápida

### ✅ **Progressive Web App (PWA)**
- Instalable en el móvil como una app nativa
- Funciona offline (con limitaciones)
- Accesos rápidos desde la pantalla de inicio

---

## 🚀 INSTALACIÓN PASO A PASO

### **PASO 1: Configurar Google Apps Script**

1. Abre tu Google Sheet: https://docs.google.com/spreadsheets/d/1B6p3qigLPwyYU_A9e6WYQDjh1dKJB0Una5JC96JJZzw/edit

2. Ve a **Extensiones > Apps Script**

3. Borra el código que aparece por defecto

4. Copia y pega el contenido completo del archivo `google-apps-script.js`

5. **IMPORTANTE**: Antes de guardar, verifica que las columnas de tus hojas coincidan con el script:
   
   **Hoja "Servicios" debe tener estas columnas (en orden):**
   - Columna A: ID_Servicio
   - Columna B: Fecha
   - Columna C: Cliente
   - Columna D: Vehículo
   - Columna E: Conductor
   - Columna F: Origen
   - Columna G: Destino
   - Columna H: Km
   - Columna I: Pasajeros
   - Columna J: Tipo_Servicio
   - Columna K: Monto
   - Columna L: Forma_Pago

   **Hoja "Gastos" debe tener estas columnas (en orden):**
   - Columna A: ID_Gasto
   - Columna B: Fecha
   - Columna C: Categoría
   - Columna D: Vehículo
   - Columna E: Proveedor
   - Columna F: Documento
   - Columna G: Monto_Neto
   - Columna H: IVA
   - Columna I: Total
   - Columna J: Observaciones

6. Guarda el proyecto (Ctrl+S) y ponle un nombre: "API Transportes Masic"

7. Haz clic en **Implementar > Nueva implementación**

8. Selecciona tipo: **Aplicación web**

9. Configura:
   - Ejecutar como: **Yo (tu email)**
   - Quién tiene acceso: **Cualquier persona**

10. Haz clic en **Implementar**

11. **COPIA LA URL** que te da (algo como: `https://script.google.com/macros/s/AKfy...../exec`)

12. Autoriza los permisos cuando te lo pida

---

### **PASO 2: Configurar la Webapp**

1. Abre el archivo `src/App.jsx`

2. Busca la línea 68:
   ```javascript
   const SCRIPT_URL = "TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI";
   ```

3. Reemplaza `"TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI"` con la URL que copiaste en el paso anterior

4. Guarda el archivo

---

### **PASO 3: Desplegar la Webapp**

Tienes 3 opciones para desplegar:

#### **OPCIÓN A: Netlify (Recomendado - Gratis y Fácil)**

1. Ve a https://app.netlify.com/drop

2. Arrastra toda la carpeta `transportes-masic-app` a la zona de drop

3. Netlify te dará una URL (ejemplo: `https://transportes-masic-abc123.netlify.app`)

4. ¡Listo! Ya puedes abrir esa URL en tu móvil

#### **OPCIÓN B: Vercel (Alternativa)**

1. Ve a https://vercel.com

2. Importa el proyecto desde GitHub o sube los archivos

3. Deploy automático

#### **OPCIÓN C: GitHub Pages**

1. Sube los archivos a un repositorio de GitHub

2. Ve a Settings > Pages

3. Selecciona la rama y carpeta

4. Deploy automático

---

### **PASO 4: Instalar en tu Móvil como App**

#### **En iPhone (Safari):**
1. Abre la URL de tu webapp en Safari
2. Toca el botón de **Compartir** (el cuadrado con flecha)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Dale un nombre: "Transportes Masic"
5. Toca **"Añadir"**
6. ¡Ya tienes el ícono en tu pantalla de inicio!

#### **En Android (Chrome):**
1. Abre la URL de tu webapp en Chrome
2. Toca el menú (tres puntos)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Dale un nombre: "Transportes Masic"
5. Toca **"Añadir"**
6. ¡Ya tienes el ícono en tu pantalla de inicio!

---

## 📊 CÓMO USAR LA APP

### **Dashboard (Pantalla Inicial)**
- Ver resumen del día actual
- Acceso rápido a "Registrar Servicio" y "Registrar Gasto"

### **Registrar Servicio**
1. Toca el botón azul "Registrar Servicio"
2. Selecciona Cliente, Vehículo, Conductor
3. Elige el tipo de servicio
4. Completa los datos (origen, destino, km, etc.)
5. Ingresa el monto y forma de pago
6. Toca "Guardar Servicio"
7. ¡Se registra automáticamente en tu Google Sheet!

### **Registrar Gasto**
1. Toca el botón rojo "Registrar Gasto"
2. Selecciona la categoría
3. Opcionalmente asocia un vehículo
4. Ingresa proveedor y documento
5. Ingresa el monto neto (el IVA se calcula automáticamente)
6. Toca "Guardar Gasto"
7. ¡Se registra automáticamente en tu Google Sheet!

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### **Problema: No guarda los datos**
**Solución:**
1. Verifica que copiaste correctamente la URL del Google Apps Script
2. Asegúrate de que el script esté implementado como "Cualquier persona"
3. Revisa que las columnas de tu Google Sheet coincidan con el script

### **Problema: Error al cargar datos**
**Solución:**
1. Verifica tu conexión a internet
2. Asegúrate de que el Google Apps Script esté implementado correctamente
3. Revisa la consola del navegador (F12) para ver errores específicos

### **Problema: La app no se instala en el móvil**
**Solución:**
1. Asegúrate de estar usando Safari (iPhone) o Chrome (Android)
2. Verifica que el archivo `manifest.json` esté en la carpeta `public`
3. Intenta acceder desde modo incógnito para descartar caché

---

## 📁 ESTRUCTURA DEL PROYECTO

```
transportes-masic-app/
├── public/
│   ├── index.html          # Página principal
│   ├── manifest.json       # Configuración PWA
│   ├── sw.js              # Service Worker (offline)
│   ├── icon-192.png       # Ícono de la app (crear)
│   └── icon-512.png       # Ícono de la app (crear)
├── src/
│   └── App.jsx            # Componente principal React
├── google-apps-script.js  # Script para Google Sheets
└── README.md              # Este archivo
```

---

## 🎯 PRÓXIMOS PASOS (FASE 2 y 3)

Una vez que la Fase 1 esté funcionando perfectamente, podemos agregar:

### **FASE 2: Gestión de Maestros**
- [ ] CRUD completo de Vehículos
- [ ] CRUD completo de Clientes
- [ ] CRUD completo de Conductores
- [ ] Editar/Eliminar servicios y gastos

### **FASE 3: Dashboards Avanzados**
- [ ] Dashboard mensual completo
- [ ] Dashboard por vehículo (rendimiento, costos)
- [ ] Dashboard por cliente (facturación)
- [ ] Dashboard por conductor (performance)
- [ ] Reportes exportables (PDF/Excel)
- [ ] Gráficos de tendencias

---

## 🆘 SOPORTE

Si tienes algún problema durante la instalación o uso:

1. Revisa la sección "Solución de Problemas" arriba
2. Verifica que seguiste todos los pasos en orden
3. Asegúrate de que tu Google Sheet tiene exactamente las mismas columnas que se especifican

---

## 📝 NOTAS IMPORTANTES

- **IVA**: Configurado al 19% según tu Sheet
- **IDs**: Se generan automáticamente (SER00XX, GTO00XX)
- **Fecha**: Se registra automáticamente la fecha actual
- **Offline**: La app funciona offline pero necesita conexión para guardar datos
- **Seguridad**: Los datos se guardan directo en tu Google Sheet privado

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Copiar script a Google Apps Script
- [ ] Verificar columnas del Google Sheet
- [ ] Implementar como Aplicación Web
- [ ] Copiar URL del script
- [ ] Pegar URL en App.jsx
- [ ] Desplegar webapp (Netlify/Vercel/GitHub Pages)
- [ ] Probar en navegador desktop
- [ ] Probar en navegador móvil
- [ ] Instalar como PWA en el móvil
- [ ] Registrar servicio de prueba
- [ ] Registrar gasto de prueba
- [ ] Verificar datos en Google Sheet
- [ ] ✨ ¡Listo para usar!

---

**¡Tu sistema de gestión móvil está listo! 🎉**

Desarrollado para Transportes Masic Spa
