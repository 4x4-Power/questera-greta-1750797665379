import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { UserProvider } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Soporte from './pages/Soporte'
import Testimonios from './pages/Testimonios'
import Modulo from './pages/Modulo'
import AdminDashboard from './pages/AdminDashboard'
import MentorPanel from './pages/MentorPanel'
import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <div className="flex flex-col min-h-screen bg-dark">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <ProtectedRoute>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/soporte" element={<Soporte />} />
                    <Route path="/testimonios" element={<Testimonios />} />
                    <Route path="/modulo/:nombre" element={<Modulo />} />
                    <Route 
                      path="/admin/dashboard" 
                      element={
                        <ProtectedRoute requiredRole={['SuperAdmin']}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/admin/cursos" 
                      element={
                        <ProtectedRoute requiredRole={['SuperAdmin', 'Admin']}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/mentor-panel" 
                      element={
                        <ProtectedRoute requiredRole={['SuperAdmin', 'Mentor']}>
                          <MentorPanel />
                        </ProtectedRoute>
                      } 
                    />
                  </Routes>
                </main>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </UserProvider>
    </AuthProvider>
  )
}

export default App