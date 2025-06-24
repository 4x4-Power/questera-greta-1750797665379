import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TestimonioCard = ({ testimonio, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-850 rounded-xl p-6 relative"
    >
      <FaQuoteLeft className="text-primary text-2xl mb-4" />
      
      <p className="text-gray-300 mb-6 italic">
        "{testimonio.mensaje}"
      </p>
      
      <div className="flex items-center space-x-4">
        <img
          src={testimonio.avatar}
          alt={testimonio.nombre}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonio.nombre}</h4>
          <p className="text-gray-400 text-sm">{testimonio.iglesia}</p>
        </div>
      </div>
      
      <div className="flex items-center mt-4">
        {[...Array(testimonio.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonioCard