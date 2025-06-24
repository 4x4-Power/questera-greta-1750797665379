import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeadset, FaEnvelope, FaPhone, FaWhatsapp, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa'

const Soporte = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
    prioridad: 'media'
  })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envío
    setTimeout(() => {
      setEnviado(true)
      setTimeout(() => setEnviado(false), 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqItems = [
    {
      pregunta: '¿Cómo puedo acceder a los cursos?',
      respuesta: 'Una vez que inicies sesión, podrás ver todos los módulos disponibles en la página principal. Haz clic en cualquier módulo para ver los cursos disponibles.'
    },
    {
      pregunta: '¿Puedo descargar los videos para verlos offline?',
      respuesta: 'Actualmente no ofrecemos la opción de descarga offline. Todos los videos deben ser visualizados en línea con una conexión a internet activa.'
    },
    {
      pregunta: '¿Cómo puedo resetear mi contraseña?',
      respuesta: 'Contacta al administrador del sistema para solicitar un cambio de contraseña. No hay opción de auto-reseteo por seguridad.'
    },
    {
      pregunta: '¿Los cursos tienen certificado?',
      respuesta: 'Sí, al completar cada módulo recibirás un certificado digital que podrás descargar e imprimir.'
    }
  ]

  return (
    <main className="pt-20 min-h-screen bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FaHeadset className="text-5xl text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Centro de Soporte</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Encuentra respuestas rápidas o contáctanos directamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-850 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
            
            {enviado ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-400">Te responderemos en las próximas 24 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Prioridad
                  </label>
                  <select
                    name="prioridad"
                    value={formData.prioridad}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                    <option value="urgente">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                    placeholder="Describe tu consulta o problema..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all glow-hover"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Información de contacto y FAQ */}
          <div className="space-y-8">
            {/* Métodos de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-850 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Otras formas de contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">soporte@clubmaestros4x4.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <FaPhone className="text-blue-500 text-xl" />
                  <div>
                    <div className="text-white font-medium">Teléfono</div>
                    <div className="text-gray-400">Lun - Vie: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-850 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaQuestionCircle className="mr-2 text-primary" />
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details key={index} className="bg-gray-800 rounded-lg">
                    <summary className="p-4 cursor-pointer text-white font-medium hover:bg-gray-700 rounded-lg transition-colors">
                      {item.pregunta}
                    </summary>
                    <div className="p-4 pt-0 text-gray-400">
                      {item.respuesta}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Soporte