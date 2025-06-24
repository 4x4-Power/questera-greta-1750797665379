import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaHeadset, FaHeart, FaUser, FaSignOutAlt, FaCog, FaChevronDown } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const { currentUser, logout } = useAuth()
  const location = useLocation()

  const menuItems = [
    { path: '/home', label: 'Inicio', icon: FaHome },
    { path: '/soporte', label: 'Soporte', icon: FaHeadset },
    { path: '/testimonios', label: 'Testimonios', icon: FaHeart }
  ]

  // Agregar elementos del menú según el rol
  if (currentUser?.role === 'SuperAdmin') {
    menuItems.push({ path: '/admin/dashboard', label: 'Panel Admin', icon: FaCog })
  } else if (currentUser?.role === 'Admin') {
    menuItems.push({ path: '/admin/cursos', label: 'Gestión', icon: FaCog })
  } else if (currentUser?.role === 'Mentor') {
    menuItems.push({ path: '/mentor-panel', label: 'Mentor', icon: FaCog })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">4x4</span>
            </div>
            <span className="text-xl font-bold text-white">Club de Maestros</span>
          </Link>

          {/* Navegación principal */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className="text-sm" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Perfil de usuario */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <img
                src={currentUser?.avatar}
                alt={currentUser?.nombre}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-white">{currentUser?.nombre}</p>
                <p className="text-xs text-gray-400">{currentUser?.role}</p>
              </div>
              <FaChevronDown className={`text-gray-400 transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-gray-850 rounded-lg shadow-lg overflow-hidden border border-gray-700"
                >
                  <Link
                    to="/perfil"
                    className="flex items-center px-4 py-3 text-sm hover:bg-gray-700 transition-colors"
                    onClick={() => setShowProfile(false)}
                  >
                    <FaUser className="mr-3 text-gray-400" />
                    Mi Perfil
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                  >
                    <FaSignOutAlt className="mr-3" />
                    Cerrar Sesión
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navegación móvil */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar