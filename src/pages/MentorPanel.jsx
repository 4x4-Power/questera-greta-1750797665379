import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaChartLine, FaBookOpen, FaCalendar } from 'react-icons/fa'

const MentorPanel = () => {
  const [selectedStudent, setSelectedStudent] = useState(null)

  const estudiantes = [
    {
      id: 1,
      nombre: 'Ana García',
      iglesia: 'Centro Cristiano Vida',
      progreso: 75,
      cursosCompletados: 8,
      ultimaActividad: '2024-01-15'
    },
    {
      id: 2,
      nombre: 'Carlos López',
      iglesia: 'Iglesia Emanuel',
      progreso: 60,
      cursosCompletados: 5,
      ultimaActividad: '2024-01-14'
    },
    {
      id: 3,
      nombre: 'María Rodríguez',
      iglesia: 'Roca de Salvación',
      progreso: 90,
      cursosCompletados: 12,
      ultimaActividad: '2024-01-16'
    }
  ]

  return (
    <main className="pt-20 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Panel de Mentor</h1>
          <p className="text-gray-400">Supervisa el progreso de tus estudiantes y proporciona orientación</p>
        </motion.div>

        {/* Estadísticas del mentor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-850 rounded-xl p-6">
            <FaUsers className="text-2xl text-blue-400 mb-3" />
            <div className="text-2xl font-bold text-white">{estudiantes.length}</div>
            <div className="text-gray-400 text-sm">Estudiantes Asignados</div>
          </div>
          
          <div className="bg-gray-850 rounded-xl p-6">
            <FaChartLine className="text-2xl text-green-400 mb-3" />
            <div className="text-2xl font-bold text-white">75%</div>
            <div className="text-gray-400 text-sm">Progreso Promedio</div>
          </div>
          
          <div className="bg-gray-850 rounded-xl p-6">
            <FaBookOpen className="text-2xl text-purple-400 mb-3" />
            <div className="text-2xl font-bold text-white">25</div>
            <div className="text-gray-400 text-sm">Cursos Completados</div>
          </div>
          
          <div className="bg-gray-850 rounded-xl p-6">
            <FaCalendar className="text-2xl text-yellow-400 mb-3" />
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-gray-400 text-sm">Sesiones Esta Semana</div>
          </div>
        </motion.div>

        {/* Lista de estudiantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-850 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6">Mis Estudiantes</h3>
          
          <div className="space-y-4">
            {estudiantes.map((estudiante) => (
              <motion.div
                key={estudiante.id}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800 rounded-lg p-4 cursor-pointer"
                onClick={() => setSelectedStudent(estudiante)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{estudiante.nombre}</h4>
                    <p className="text-gray-400 text-sm">{estudiante.iglesia}</p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-white font-semibold">{estudiante.cursosCompletados}</div>
                      <div className="text-gray-400 text-xs">Cursos</div>
                    </div>
                    
                    <div className="w-32">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Progreso</span>
                        <span className="text-white">{estudiante.progreso}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${estudiante.progreso}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-white text-sm">Última actividad</div>
                      <div className="text-gray-400 text-xs">{estudiante.ultimaActividad}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal de detalles del estudiante */}
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-gray-850 rounded-xl p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Detalles de {selectedStudent.nombre}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Información General</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Iglesia:</strong> {selectedStudent.iglesia}</p>
                    <p><strong>Progreso:</strong> {selectedStudent.progreso}%</p>
                    <p><strong>Cursos Completados:</strong> {selectedStudent.cursosCompletados}</p>
                    <p><strong>Última Actividad:</strong> {selectedStudent.ultimaActividad}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Acciones de Mentor</h4>
                  <div className="space-y-2">
                    <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                      Enviar Mensaje
                    </button>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Programar Sesión
                    </button>
                    <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Ver Progreso Detallado
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default MentorPanel