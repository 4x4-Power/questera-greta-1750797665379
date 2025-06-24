import { motion } from 'framer-motion'
import TestimonioCard from '../components/TestimonioCard'
import { TESTIMONIOS } from '../data/mockData'

const Testimonios = () => {
  return (
    <main className="pt-20 min-h-screen bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Historias que Inspiran
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo el Club de Maestros 4x4 está transformando la educación cristiana 
            alrededor del mundo a través de las experiencias de nuestros maestros.
          </p>
        </motion.div>

        {/* Testimonios destacados */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIOS.map((testimonio, index) => (
              <TestimonioCard
                key={testimonio.id}
                testimonio={testimonio}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Estadísticas de impacto */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Nuestro Impacto Global
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-300">Maestros Capacitados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-300">Iglesias Impactadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-gray-300">Niños Alcanzados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-300">Países</div>
            </div>
          </div>
        </motion.section>

        {/* Call to action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gray-850 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Quieres compartir tu testimonio?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Tu historia puede inspirar a otros maestros. Comparte cómo el Club de Maestros 4x4 
            ha impactado tu ministerio y la vida de tus estudiantes.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all glow-hover"
          >
            Enviar Mi Testimonio
          </motion.button>
        </motion.section>
      </div>
    </main>
  )
}

export default Testimonios