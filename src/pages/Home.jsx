import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import Carrusel from '../components/Carrusel'
import { MODULOS, CURSOS_POR_MODULO } from '../data/mockData'

const Home = () => {
  const { currentUser } = useAuth()
  const [greeting, setGreeting] = useState('')
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting('Buenos días')
    } else if (hour < 18) {
      setGreeting('Buenas tardes')
    } else {
      setGreeting('Buenas noches')
    }

    // Activar el efecto typewriter después de un pequeño delay
    const timer = setTimeout(() => setShowTypewriter(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const firstName = currentUser?.nombre?.split(' ')[0] || 'Maestro'

  return (
    <main className="pt-20 pb-12 min-h-screen bg-gradient-to-b from-dark via-secondary to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Saludo personalizado */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-light text-gray-300 mb-4"
          >
            {greeting}, {firstName} 👋
          </motion.h1>
          
          {showTypewriter && (
            <div className="text-3xl md:text-5xl font-bold text-white typewriter overflow-hidden whitespace-nowrap border-r-2 border-primary">
              ¿Qué quieres aprender hoy?
            </div>
          )}
        </motion.section>

        {/* Carruseles por módulo */}
        <div className="space-y-16">
          {MODULOS.map((modulo, index) => (
            <motion.div
              key={modulo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Carrusel
                titulo={`${modulo.icono} ${modulo.nombre}`}
                cursos={CURSOS_POR_MODULO[modulo.id] || []}
                color={modulo.color}
              />
            </motion.div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-300">Maestros Activos</div>
          </div>
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-300">Cursos Disponibles</div>
          </div>
          <div className="bg-gray-850 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-gray-300">Módulos Especializados</div>
          </div>
        </motion.section>

        {/* Call to action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas ayuda para empezar?
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de soporte está aquí para guiarte en tu journey de aprendizaje
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all glow-hover"
            >
              Contactar Soporte
            </motion.button>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

export default Home