import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPlay, FaHeart, FaClock, FaStar, FaBookmark, FaArrowLeft } from 'react-icons/fa'
import { MODULOS, CURSOS_POR_MODULO } from '../data/mockData'
import { useUser } from '../context/UserContext'

const Modulo = () => {
  const { nombre } = useParams()
  const [selectedCurso, setSelectedCurso] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const { obtenerProgreso, actualizarProgreso, esFavorito, agregarFavorito, removerFavorito } = useUser()

  const moduloId = nombre.replace('-', '')
  const modulo = MODULOS.find(m => m.id === moduloId)
  const cursos = CURSOS_POR_MODULO[moduloId] || []

  const handlePlayCurso = (curso) => {
    setSelectedCurso(curso)
    setShowVideo(true)
  }

  const handleFavorito = (curso) => {
    if (esFavorito(curso.id)) {
      removerFavorito(curso.id)
    } else {
      agregarFavorito(curso)
    }
  }

  if (!modulo) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Módulo no encontrado</h1>
          <Link to="/home" className="text-primary hover:text-primary/90">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-dark">
      {/* Header del módulo */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={modulo.imagen}
          alt={modulo.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/home"
              className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Volver al inicio
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {modulo.icono} {modulo.nombre}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {modulo.descripcion}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lista de cursos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            Cursos disponibles ({cursos.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso, index) => (
              <motion.div
                key={curso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-850 rounded-xl overflow-hidden hover:bg-gray-800 transition-all group"
              >
                <div className="relative aspect-video">
                  <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => handlePlayCurso(curso)}
                      className="p-4 bg-primary rounded-full hover:bg-primary/90 transition-colors glow"
                    >
                      <FaPlay className="text-white text-xl" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {curso.titulo}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {curso.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{curso.duracion}</span>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="mr-1 text-yellow-400" />
                      <span>{curso.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBookmark className="mr-1" />
                      <span>{curso.lecciones} lecciones</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handlePlayCurso(curso)}
                      className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mr-2"
                    >
                      Comenzar Curso
                    </button>
                    <button
                      onClick={() => handleFavorito(curso)}
                      className={`p-2 rounded-lg transition-colors ${
                        esFavorito(curso.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal de video */}
      {showVideo && selectedCurso && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black flex items-center justify-center">
              <p className="text-white">
                Reproductor de video para: {selectedCurso.titulo}
              </p>
              {/* Aquí iría el reproductor real (Vimeo, YouTube, etc.) */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedCurso.titulo}
              </h3>
              <p className="text-gray-400">
                {selectedCurso.descripcion}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}

export default Modulo