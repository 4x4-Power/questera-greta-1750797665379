import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaHeart, FaClock, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const CursoCard = ({ curso, color = 'primary', index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { esFavorito, agregarFavorito, removerFavorito } = useUser()
  const favorito = esFavorito(curso.id)

  const handleFavorito = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (favorito) {
      removerFavorito(curso.id)
    } else {
      agregarFavorito(curso)
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1 }
    }
  }

  return (
    <motion.div
      variants={item}
      className="relative group w-80 flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/modulo/${curso.categoria.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
          <img
            src={curso.imagen}
            alt={curso.titulo}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-2">{curso.titulo}</h3>
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <FaClock className="mr-1" />
              <span>{curso.duracion}</span>
              <FaStar className="ml-3 mr-1 text-yellow-400" />
              <span>{curso.rating}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    <button className={`p-4 bg-${color} rounded-full hover:bg-${color}/90 transition-colors glow-hover`}>
                      <FaPlay className="text-white text-xl" />
                    </button>
                    <button
                      onClick={handleFavorito}
                      className={`p-3 rounded-full transition-colors ${
                        favorito 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <FaHeart />
                    </button>
                  </motion.div>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white text-sm max-w-xs"
                  >
                    {curso.descripcion}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category badge */}
          <div className={`absolute top-3 left-3 px-2 py-1 bg-modulos-${curso.categoria.toLowerCase().replace(/\s+/g, '')} text-white text-xs rounded-full`}>
            {curso.categoria}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CursoCard