import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaPlay, FaHeart } from 'react-icons/fa'
import CursoCard from './CursoCard'

const Carrusel = ({ titulo, cursos, color = 'primary' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, cursos.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, cursos.length - 3)) % Math.max(1, cursos.length - 3))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{titulo}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            disabled={currentIndex >= cursos.length - 3}
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden"
      >
        <motion.div
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex space-x-4"
          style={{ width: `${cursos.length * 320}px` }}
        >
          {cursos.map((curso, index) => (
            <CursoCard
              key={curso.id}
              curso={curso}
              color={color}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Carrusel