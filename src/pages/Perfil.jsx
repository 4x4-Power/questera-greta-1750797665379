import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaCamera, FaHeart, FaClock, FaStar } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import { useUser } from '../context/UserContext'

const Perfil = () => {
  const { currentUser } = useAuth()
  const { favoritos, progresoCursos } = useUser()
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    nombre: currentUser?.nombre || '',
    email: currentUser?.email || '',
    avatar: currentUser?.avatar || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se actualizaría el perfil
    setEditMode(false)
  }

  const totalCursosCompletados = Object.keys(progresoCursos).length
  const totalFavoritos = favoritos.length

  return (
    <main className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header del perfil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-850 rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative group">
              <img
                src={formData.avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
              {editMode && (
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center cursor-pointer">
                  <FaCamera className="text-white text-2xl" />
                </div>
              )}
            </div>

            {/* Información básica */}
            <div className="flex-1 text-center md:text-left">
              {editMode ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                    placeholder="Nombre completo"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                    placeholder="Correo electrónico"
                  />
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {currentUser?.nombre}
                  </h1>
                  <p className="text-gray-400 mb-4">{currentUser?.email}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {currentUser?.role}
                    </span>
                  </div>
                  <button
                    onClick={() => setEditMode(true)}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Editar Perfil
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <FaClock className="text-3xl text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{totalCursosCompletados}</div>
            <div className="text-gray-400">Cursos en Progreso</div>
          </div>
          
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <FaHeart className="text-3xl text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{totalFavoritos}</div>
            <div className="text-gray-400">Favoritos</div>
          </div>
          
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <FaStar className="text-3xl text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">4.8</div>
            <div className="text-gray-400">Promedio de Calificaciones</div>
          </div>
        </motion.div>

        {/* Cursos favoritos */}
        {favoritos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-850 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Mis Favoritos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoritos.map((curso) => (
                <div key={curso.id} className="bg-gray-800 rounded-lg p-4">
                  <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className="w-full aspect-video object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-white font-semibold mb-1">{curso.titulo}</h3>
                  <p className="text-gray-400 text-sm">{curso.categoria}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default Perfil