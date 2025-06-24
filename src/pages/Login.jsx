import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import { VIDEOS_BIENVENIDA } from '../data/mockData'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { login, loading, error } = useAuth()

  // Carrusel de imágenes de fondo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % VIDEOS_BIENVENIDA.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo - Carrusel de imágenes */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {VIDEOS_BIENVENIDA.map((imagen, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={imagen}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Overlay con información */}
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-12 text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Club de Maestros 4x4
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-200 mb-6"
            >
              Transformando la educación cristiana con herramientas innovadoras
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-2"
            >
              {VIDEOS_BIENVENIDA.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-primary w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Panel derecho - Formulario de login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-dark">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full space-y-8"
        >
          {/* Logo y título */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-white font-bold text-2xl">4x4</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">Bienvenido</h2>
            <p className="text-gray-400">Inicia sesión en tu cuenta</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-850 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="tu@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-gray-850 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Tu contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all glow-hover"
            >
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </motion.button>
          </form>

          {/* Información adicional */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              ¿No tienes cuenta? Contacta al administrador
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Solo usuarios autorizados pueden acceder
            </p>
          </div>

          {/* Demo credentials */}
          <div className="bg-gray-850 rounded-lg p-4 mt-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Credenciales de prueba:</h3>
            <div className="text-xs text-gray-400 space-y-1">
              <p><strong>SuperAdmin:</strong> mentores4x4@gmail.com / Salmos23:1</p>
              <p><strong>Cliente:</strong> yesica@ejemplo.com / cliente123</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login