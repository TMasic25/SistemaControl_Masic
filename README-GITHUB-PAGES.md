# 🚀 GUÍA DE INSTALACIÓN EN GITHUB PAGES

## ✅ **POR QUÉ GITHUB PAGES**

- ✅ **GRATIS** para siempre
- ✅ Ya tienes cuenta de GitHub
- ✅ Fácil de actualizar
- ✅ URL personalizable
- ✅ HTTPS incluido

---

## 📋 **INSTALACIÓN COMPLETA (15 MINUTOS)**

### **PASO 1: Instalar Google Apps Script** ⏱️ 5 min

1. Abre tu Google Sheet:
   ```
   https://docs.google.com/spreadsheets/d/1B6p3qigLPwyYU_A9e6WYQDjh1dKJB0Una5JC96JJZzw/edit
   ```

2. Ve a: **Extensiones > Apps Script**

3. **Borra todo** el código que aparece

4. **Copia** el contenido del archivo: `google-apps-script.js`

5. **Pégalo** en Apps Script

6. **Guarda** (Ctrl+S) y ponle nombre: "API Transportes Masic"

7. **Implementar > Nueva implementación**

8. Configura:
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo**
   - Acceso: **Cualquier persona**

9. **Implementar**

10. **📋 COPIA LA URL** (se verá así):
    ```
    https://script.google.com/macros/s/AKfycby...../exec
    ```

11. Autoriza los permisos

✅ **Paso 1 completo**

---

### **PASO 2: Configurar la URL** ⏱️ 2 min

1. En tu computadora, abre el archivo: `index.html`

2. Busca la **línea 21** (cerca del inicio del archivo):
   ```javascript
   const SCRIPT_URL = "TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI";
   ```

3. **Reemplázala** con la URL del Paso 1:
   ```javascript
   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby...../exec";
   ```

4. **💾 Guarda** el archivo

**IMPORTANTE:** La URL va en el archivo `index.html` línea 21, NO en `src/App.jsx`

✅ **Paso 2 completo**

---

### **PASO 3: Crear Repositorio en GitHub** ⏱️ 3 min

1. Ve a: https://github.com

2. Haz clic en **+ > New repository**

3. Configura:
   - **Repository name:** `transportes-masic`
   - **Description:** Sistema de Gestión Móvil
   - **Public** ✅
   - **Add a README** ✅

4. **Create repository**

✅ **Repositorio creado**

---

### **PASO 4: Subir los Archivos** ⏱️ 5 min

#### **OPCIÓN A: Arrastrar y Soltar (Más Fácil)** ⭐ RECOMENDADO

1. En tu repositorio, haz clic en **Add file > Upload files**

2. **Arrastra TODOS los archivos** de esta carpeta:
   - `index.html`
   - Carpeta `src/`
   - `manifest.json`
   - `sw.js`
   - `google-apps-script.js` (opcional, como referencia)
   - `README.md`

3. Escribe en commit: `Sistema completo`

4. **Commit changes**

#### **OPCIÓN B: Usar Git (Si sabes Git)**

```bash
cd /ruta/a/esta/carpeta
git init
git add .
git commit -m "Sistema completo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/transportes-masic.git
git push -u origin main
```

✅ **Archivos subidos**

---

### **PASO 5: Activar GitHub Pages** ⏱️ 2 min

1. En tu repositorio, ve a **Settings**

2. En el menú lateral, busca **Pages**

3. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`

4. **Save**

5. **Espera 1-2 minutos** y refresca la página

6. Verás:
   ```
   ✅ Your site is live at https://TU_USUARIO.github.io/transportes-masic/
   ```

7. **📋 COPIA ESA URL**

✅ **GitHub Pages activado**

---

### **PASO 6: Probar la App** ⏱️ 2 min

1. Abre la URL en tu navegador:
   ```
   https://TU_USUARIO.github.io/transportes-masic/
   ```

2. Deberías ver el dashboard de la app

3. **Prueba registrar un servicio:**
   - Completa el formulario
   - Guarda
   - Verifica en tu Google Sheet que aparezca

✅ **¡App funcionando!**

---

### **PASO 7: Instalar en el Móvil** ⏱️ 2 min

#### **En iPhone (Safari):**
1. Abre la URL en Safari
2. Toca **Compartir**
3. **Añadir a pantalla de inicio**
4. Nombre: "Transportes Masic"
5. **Añadir**

#### **En Android (Chrome):**
1. Abre la URL en Chrome
2. Menú **(⋮)**
3. **Añadir a pantalla de inicio**
4. Nombre: "Transportes Masic"
5. **Añadir**

✅ **¡App instalada en el móvil!**

---

## 🎯 **CHECKLIST DE VERIFICACIÓN**

- [ ] Google Apps Script instalado y URL copiada
- [ ] URL pegada en `src/App.jsx` línea 58
- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos al repositorio
- [ ] GitHub Pages activado
- [ ] App funciona en https://TU_USUARIO.github.io/transportes-masic/
- [ ] Servicio de prueba registrado exitosamente
- [ ] Datos aparecen en Google Sheet
- [ ] App instalada en el móvil
- [ ] ✅ ¡Sistema completo funcionando!

---

## 🔧 **SOLUCIÓN DE PROBLEMAS**

### **Problema: "404 - Página no encontrada"**
**Solución:**
1. Verifica que GitHub Pages esté activado en Settings > Pages
2. Asegúrate de que seleccionaste la rama `main` y carpeta `/ (root)`
3. Espera 2-3 minutos para que GitHub procese los cambios
4. Limpia caché del navegador (Ctrl+Shift+R)

### **Problema: "La app no carga, pantalla blanca"**
**Solución:**
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que TODOS los archivos estén subidos (especialmente `src/App.jsx`)
4. Verifica que la URL del Google Apps Script esté correcta en `src/App.jsx`

### **Problema: "No guarda servicios/gastos"**
**Solución:**
1. Verifica que la URL del Google Apps Script esté correcta
2. Asegúrate de que el script esté implementado como "Cualquier persona"
3. Revisa los permisos del Google Apps Script
4. Abre la consola (F12) y busca errores de red

### **Problema: "CORS Error"**
**Solución:**
1. Esto es normal si intentas abrir `index.html` directamente desde tu computadora
2. La app DEBE estar en GitHub Pages o un servidor web para funcionar
3. No uses `file:///` en la URL, usa `https://`

---

## 🔄 **CÓMO ACTUALIZAR LA APP**

Cuando quieras hacer cambios:

1. Modifica los archivos en tu computadora

2. Ve a tu repositorio en GitHub

3. Navega al archivo que quieres cambiar

4. Haz clic en **✏️ (editar)**

5. Haz los cambios

6. **Commit changes**

7. Espera 1-2 minutos

8. Refresca tu app (Ctrl+Shift+R)

O si usas Git:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

---

## 🎨 **PERSONALIZACIÓN**

### **Cambiar colores:**
1. Edita `src/App.jsx`
2. Busca clases como `bg-blue-500`, `text-red-600`
3. Cambiar por otros colores de Tailwind

### **Cambiar nombre:**
1. Edita `index.html` - Cambia el `<title>`
2. Edita `manifest.json` - Cambia `name` y `short_name`

### **Agregar logo:**
1. Crea imágenes: `icon-192.png` y `icon-512.png`
2. Súbelas al repositorio
3. Actualiza `manifest.json` con las rutas

---

## 📊 **VENTAJAS DE GITHUB PAGES**

✅ **Gratis:** Sin límites ni costos
✅ **Rápido:** CDN global de GitHub
✅ **Seguro:** HTTPS incluido
✅ **Versionado:** Control de cambios con Git
✅ **Fácil:** Actualizar desde la web o terminal

---

## 🆚 **COMPARACIÓN: GITHUB VS NETLIFY**

| Característica | GitHub Pages | Netlify |
|---|---|---|
| **Precio** | Gratis | Gratis |
| **Deploy** | Manual/Git | Drag & Drop |
| **Rapidez** | Rápido | Muy rápido |
| **Custom Domain** | ✅ | ✅ |
| **CI/CD** | ✅ | ✅ |
| **Funciones** | No | Sí |

**Recomendación:** Ambos son excelentes y gratuitos. Usa GitHub si ya tienes cuenta, o Netlify si prefieres drag & drop.

---

## ✨ **¡LISTO!**

Tu sistema está ahora en:
```
https://TU_USUARIO.github.io/transportes-masic/
```

Puedes:
- ✅ Registrar servicios desde el móvil
- ✅ Registrar gastos desde el móvil
- ✅ Ver dashboard en tiempo real
- ✅ Todo se guarda en tu Google Sheet

**¡Éxito con tu empresa! 🚗💨**

---

## 📞 **URLs IMPORTANTES**

- Tu repositorio: `https://github.com/TU_USUARIO/transportes-masic`
- Tu app: `https://TU_USUARIO.github.io/transportes-masic/`
- Google Sheet: `https://docs.google.com/spreadsheets/d/1B6p3qigLPwyYU_A9e6WYQDjh1dKJB0Una5JC96JJZzw/edit`

---

*Sistema de Gestión Móvil para Transportes Masic Spa*
*Versión GitHub Pages - Noviembre 2024*
