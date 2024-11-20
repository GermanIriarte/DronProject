import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import CreateUser from './CreateUser';
import MainPage from './MainPage';
import FormularioReserva from './FormularioReserva';
import CreateDispositivo from './CreateDispositivo';
import Dispositivos from './Dispositivos';
import DispositivoInfo from './DispositivosInfo';
import AdminPage from './AdminMainInterface';
import AlertNotifications from './notificaciones';
import Sidebar from './Sidebar';
import ReservarDispositivo from './ReservarDispositivo';
import Historial from './historialReservas';

function RoutesNav() {
    return (
        <div className="RoutesNav">
            <BrowserRouter>
                <Routes>
                    {/* Redirección por defecto a login */}
                    <Route path="/" element={<Navigate to="/MainPage" replace />} />
                    
                    {/* Rutas principales */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/CreateUser" element={<CreateUser />} />
                    <Route path="/MainPage" element={<MainPage />} />
                    <Route path="/FormularioReserva" element={<FormularioReserva/>} />
                    <Route path="/CreateDispositivo" element={<CreateDispositivo/>} />
                    <Route path="Dispositivos" element={<Dispositivos/>} />
                    <Route path='/dispositivoInfo/:idDispositivo' element={<DispositivoInfo />} />
                    <Route path='/AdminMainInterface' element={<AdminPage />} />
                    <Route path='/notificaciones' element={<AlertNotifications />} />
                    <Route path='/Sidebar' element={<Sidebar />} />
                    <Route path='/ReservarDispositivo' element={<ReservarDispositivo />} />
                    <Route path='/HistorialReservas' element={<Historial />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesNav;
