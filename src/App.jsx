import React, { useState, useEffect } from 'react';
import { Calendar, DollarSign, TrendingUp, Car, Users, FileText, PlusCircle, Menu, X, Home } from 'lucide-react';

// Configuración de la empresa desde tu Google Sheet
const CONFIG = {
  empresa: "Transportes Masic Spa",
  rut: "77.541.461-8",
  iva: 0.19,
  
  tiposServicio: [
    { codigo: "SRV001", nombre: "Traslado Aeropuerto" },
    { codigo: "SRV002", nombre: "Tour Turístico" },
    { codigo: "SRV003", nombre: "Transporte Empresarial" },
    { codigo: "SRV004", nombre: "Evento Privado" },
    { codigo: "SRV005", nombre: "Transporte Escolar" },
    { codigo: "SRV006", nombre: "Servicio Mensual" },
    { codigo: "SRV999", nombre: "Otro" }
  ],
  
  categoriasGastos: [
    { codigo: "GAS001", nombre: "Combustible" },
    { codigo: "GAS002", nombre: "Mantenimiento" },
    { codigo: "GAS003", nombre: "Neumáticos" },
    { codigo: "GAS004", nombre: "Repuestos" },
    { codigo: "GAS005", nombre: "Seguros" },
    { codigo: "GAS006", nombre: "TAG/Peajes" },
    { codigo: "GAS007", nombre: "Permiso Circulación" },
    { codigo: "GAS008", nombre: "Revisión Técnica" },
    { codigo: "GAS009", nombre: "Remuneraciones" },
    { codigo: "GAS010", nombre: "Leyes Sociales" },
    { codigo: "GAS011", nombre: "Honorarios" },
    { codigo: "GAS012", nombre: "Arriendo Oficina" },
    { codigo: "GAS013", nombre: "Servicios Básicos" },
    { codigo: "GAS014", nombre: "Telefonía/Internet" },
    { codigo: "GAS015", nombre: "Publicidad" },
    { codigo: "GAS016", nombre: "Útiles Oficina/Limpieza" },
    { codigo: "GAS017", nombre: "Contador/Asesoría" },
    { codigo: "GAS018", nombre: "Multas" },
    { codigo: "GAS999", nombre: "Otros Gastos" }
  ],
  
  formasPago: [
    { codigo: "PAG001", nombre: "Efectivo" },
    { codigo: "PAG002", nombre: "Transferencia" },
    { codigo: "PAG003", nombre: "Cheque" },
    { codigo: "PAG004", nombre: "Tarjeta Débito" },
    { codigo: "PAG005", nombre: "Tarjeta Crédito" },
    { codigo: "PAG006", nombre: "Factura 30 días" },
    { codigo: "PAG007", nombre: "Factura 60 días" },
    { codigo: "PAG008", nombre: "Tarjeta Crédito Personal" },
    { codigo: "PAG009", nombre: "Tarjeta Crédito Empresa" },
    { codigo: "PAG010", nombre: "Tarjeta Débito Personal" },
    { codigo: "PAG011", nombre: "Tarjeta Débito Empresa" }
  ]
};

// URL del Google Apps Script (la crearemos después)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyGBwFkbRP-y6K_qD1plEgfOlCm__ePaOZ8WZxCXCQcFyewkZy-RkvlKjyvizP1Mkua/exec";

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Estados para datos
  const [vehiculos, setVehiculos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [conductores, setConductores] = useState([]);
  const [serviciosHoy, setServiciosHoy] = useState([]);
  const [gastosHoy, setGastosHoy] = useState([]);
  
  // Estados para formularios
  const [formServicio, setFormServicio] = useState({
    cliente: '',
    vehiculo: '',
    conductor: '',
    origen: '',
    destino: '',
    km: '',
    pasajeros: '',
    tipoServicio: '',
    monto: '',
    formaPago: ''
  });
  
  const [formGasto, setFormGasto] = useState({
    categoria: '',
    vehiculo: '',
    proveedor: '',
    documento: '',
    montoNeto: '',
    observaciones: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Cargar datos iniciales
  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = async () => {
    // Datos de ejemplo - reemplazar con llamadas reales al Sheet
    setVehiculos([
      { patente: "ABCD12", marca: "Mercedes", modelo: "Sprinter" },
      { patente: "EFGH34", marca: "Hyundai", modelo: "H1" },
      { patente: "IJKL56", marca: "Toyota", modelo: "Hiace" }
    ]);
    
    setClientes([
      { rut: "12345678-9", razonSocial: "Hotel Puerto Varas" },
      { rut: "98765432-1", razonSocial: "Empresa Turismo Sur" },
      { rut: "11223344-5", razonSocial: "Colegio Los Lagos" },
      { rut: "55667788-9", razonSocial: "Cliente VIP" }
    ]);
    
    setConductores([
      { rut: "16789012-3", nombre: "Juan Pérez" }
    ]);
  };

  const enviarServicio = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validaciones
      if (!formServicio.cliente || !formServicio.vehiculo || !formServicio.monto) {
        throw new Error("Por favor completa todos los campos obligatorios");
      }

      // Aquí iría la llamada al Google Apps Script
      // const response = await fetch(SCRIPT_URL, {
      //   method: 'POST',
      //   body: JSON.stringify({ action: 'registrarServicio', data: formServicio })
      // });

      // Simulación de éxito
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: '✅ Servicio registrado exitosamente' });
      
      // Limpiar formulario
      setFormServicio({
        cliente: '',
        vehiculo: '',
        conductor: '',
        origen: '',
        destino: '',
        km: '',
        pasajeros: '',
        tipoServicio: '',
        monto: '',
        formaPago: ''
      });

      // Actualizar dashboard
      setTimeout(() => {
        setCurrentView('dashboard');
        setMessage({ type: '', text: '' });
      }, 2000);

    } catch (error) {
      setMessage({ type: 'error', text: `❌ Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const enviarGasto = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validaciones
      if (!formGasto.categoria || !formGasto.montoNeto) {
        throw new Error("Por favor completa todos los campos obligatorios");
      }

      const iva = parseFloat(formGasto.montoNeto) * CONFIG.iva;
      const total = parseFloat(formGasto.montoNeto) + iva;

      const gastoCompleto = {
        ...formGasto,
        iva: iva.toFixed(0),
        total: total.toFixed(0)
      };

      // Aquí iría la llamada al Google Apps Script
      // const response = await fetch(SCRIPT_URL, {
      //   method: 'POST',
      //   body: JSON.stringify({ action: 'registrarGasto', data: gastoCompleto })
      // });

      // Simulación de éxito
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: '✅ Gasto registrado exitosamente' });
      
      // Limpiar formulario
      setFormGasto({
        categoria: '',
        vehiculo: '',
        proveedor: '',
        documento: '',
        montoNeto: '',
        observaciones: ''
      });

      // Actualizar dashboard
      setTimeout(() => {
        setCurrentView('dashboard');
        setMessage({ type: '', text: '' });
      }, 2000);

    } catch (error) {
      setMessage({ type: 'error', text: `❌ Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const calcularKPIs = () => {
    const totalServicios = serviciosHoy.length;
    const totalIngresos = serviciosHoy.reduce((sum, s) => sum + (s.monto || 0), 0);
    const totalGastos = gastosHoy.reduce((sum, g) => sum + (g.total || 0), 0);
    const margen = totalIngresos - totalGastos;

    return { totalServicios, totalIngresos, totalGastos, margen };
  };

  const kpis = calcularKPIs();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(value);
  };

  // Componente de Navegación
  const Navigation = () => (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="w-6 h-6" />
          <span className="font-bold text-lg">Transportes Masic</span>
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-blue-700 rounded-lg"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {menuOpen && (
        <div className="mt-4 space-y-2">
          <button
            onClick={() => { setCurrentView('dashboard'); setMenuOpen(false); }}
            className={`w-full text-left p-3 rounded-lg flex items-center space-x-2 ${
              currentView === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => { setCurrentView('servicios'); setMenuOpen(false); }}
            className={`w-full text-left p-3 rounded-lg flex items-center space-x-2 ${
              currentView === 'servicios' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Nuevo Servicio</span>
          </button>
          <button
            onClick={() => { setCurrentView('gastos'); setMenuOpen(false); }}
            className={`w-full text-left p-3 rounded-lg flex items-center space-x-2 ${
              currentView === 'gastos' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <DollarSign className="w-5 h-5" />
            <span>Nuevo Gasto</span>
          </button>
        </div>
      )}
    </nav>
  );

  // Componente Dashboard
  const Dashboard = () => (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-blue-600" />
          Dashboard de Hoy
        </h2>
        <p className="text-gray-600 mb-4">{new Date().toLocaleDateString('es-CL', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Servicios</div>
            <div className="text-2xl font-bold text-blue-600">{kpis.totalServicios}</div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Ingresos</div>
            <div className="text-xl font-bold text-green-600">{formatCurrency(kpis.totalIngresos)}</div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Gastos</div>
            <div className="text-xl font-bold text-red-600">{formatCurrency(kpis.totalGastos)}</div>
          </div>
          
          <div className={`p-4 rounded-lg ${kpis.margen >= 0 ? 'bg-emerald-50' : 'bg-orange-50'}`}>
            <div className="text-sm text-gray-600">Margen</div>
            <div className={`text-xl font-bold ${kpis.margen >= 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
              {formatCurrency(kpis.margen)}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setCurrentView('servicios')}
          className="w-full bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
        >
          <PlusCircle className="w-6 h-6" />
          <span className="font-semibold">Registrar Servicio</span>
        </button>
        
        <button
          onClick={() => setCurrentView('gastos')}
          className="w-full bg-red-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700"
        >
          <PlusCircle className="w-6 h-6" />
          <span className="font-semibold">Registrar Gasto</span>
        </button>
      </div>
    </div>
  );

  // Componente Formulario Servicios
  const FormularioServicios = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          Nuevo Servicio
        </h2>

        {message.text && (
          <div className={`mb-4 p-3 rounded-lg ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={enviarServicio} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Cliente *</label>
            <select
              value={formServicio.cliente}
              onChange={(e) => setFormServicio({...formServicio, cliente: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Seleccionar cliente</option>
              {clientes.map(c => (
                <option key={c.rut} value={c.razonSocial}>{c.razonSocial}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Vehículo *</label>
            <select
              value={formServicio.vehiculo}
              onChange={(e) => setFormServicio({...formServicio, vehiculo: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Seleccionar vehículo</option>
              {vehiculos.map(v => (
                <option key={v.patente} value={v.patente}>
                  {v.patente} - {v.marca} {v.modelo}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Conductor</label>
            <select
              value={formServicio.conductor}
              onChange={(e) => setFormServicio({...formServicio, conductor: e.target.value})}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Seleccionar conductor</option>
              {conductores.map(c => (
                <option key={c.rut} value={c.nombre}>{c.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tipo de Servicio *</label>
            <select
              value={formServicio.tipoServicio}
              onChange={(e) => setFormServicio({...formServicio, tipoServicio: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Seleccionar tipo</option>
              {CONFIG.tiposServicio.map(t => (
                <option key={t.codigo} value={t.nombre}>{t.nombre}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Origen</label>
              <input
                type="text"
                value={formServicio.origen}
                onChange={(e) => setFormServicio({...formServicio, origen: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Puerto Varas"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Destino</label>
              <input
                type="text"
                value={formServicio.destino}
                onChange={(e) => setFormServicio({...formServicio, destino: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Aeropuerto"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Kilómetros</label>
              <input
                type="number"
                value={formServicio.km}
                onChange={(e) => setFormServicio({...formServicio, km: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pasajeros</label>
              <input
                type="number"
                value={formServicio.pasajeros}
                onChange={(e) => setFormServicio({...formServicio, pasajeros: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Monto *</label>
            <input
              type="number"
              value={formServicio.monto}
              onChange={(e) => setFormServicio({...formServicio, monto: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Forma de Pago *</label>
            <select
              value={formServicio.formaPago}
              onChange={(e) => setFormServicio({...formServicio, formaPago: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Seleccionar forma de pago</option>
              {CONFIG.formasPago.map(f => (
                <option key={f.codigo} value={f.nombre}>{f.nombre}</option>
              ))}
            </select>
          </div>

          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setCurrentView('dashboard')}
              className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? 'Guardando...' : 'Guardar Servicio'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Componente Formulario Gastos
  const FormularioGastos = () => {
    const montoNeto = parseFloat(formGasto.montoNeto) || 0;
    const iva = montoNeto * CONFIG.iva;
    const total = montoNeto + iva;

    return (
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <DollarSign className="w-6 h-6 mr-2 text-red-600" />
            Nuevo Gasto
          </h2>

          {message.text && (
            <div className={`mb-4 p-3 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={enviarGasto} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Categoría *</label>
              <select
                value={formGasto.categoria}
                onChange={(e) => setFormGasto({...formGasto, categoria: e.target.value})}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Seleccionar categoría</option>
                {CONFIG.categoriasGastos.map(c => (
                  <option key={c.codigo} value={c.nombre}>{c.nombre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Vehículo (opcional)</label>
              <select
                value={formGasto.vehiculo}
                onChange={(e) => setFormGasto({...formGasto, vehiculo: e.target.value})}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Sin vehículo asociado</option>
                {vehiculos.map(v => (
                  <option key={v.patente} value={v.patente}>
                    {v.patente} - {v.marca} {v.modelo}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Proveedor</label>
              <input
                type="text"
                value={formGasto.proveedor}
                onChange={(e) => setFormGasto({...formGasto, proveedor: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Nombre del proveedor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">N° Documento</label>
              <input
                type="text"
                value={formGasto.documento}
                onChange={(e) => setFormGasto({...formGasto, documento: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="Factura/Boleta"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Monto Neto *</label>
              <input
                type="number"
                value={formGasto.montoNeto}
                onChange={(e) => setFormGasto({...formGasto, montoNeto: e.target.value})}
                className="w-full p-2 border rounded-lg"
                placeholder="0"
                required
              />
            </div>

            <div className="bg-gray-50 p-3 rounded-lg space-y-1">
              <div className="flex justify-between text-sm">
                <span>Monto Neto:</span>
                <span className="font-semibold">{formatCurrency(montoNeto)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IVA (19%):</span>
                <span className="font-semibold">{formatCurrency(iva)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-1">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Observaciones</label>
              <textarea
                value={formGasto.observaciones}
                onChange={(e) => setFormGasto({...formGasto, observaciones: e.target.value})}
                className="w-full p-2 border rounded-lg"
                rows="3"
                placeholder="Detalles adicionales..."
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setCurrentView('dashboard')}
                className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400"
              >
                {loading ? 'Guardando...' : 'Guardar Gasto'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'servicios' && <FormularioServicios />}
      {currentView === 'gastos' && <FormularioGastos />}
    </div>
  );
}

export default App;
