import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaBookOpen, FaChartLine, FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const AdminDashboard = () => {
  const { currentUser, createUser } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [showCreateUser, setShowCreateUser] = useState(false)
  const [newUser, setNewUser] = useState({
    nombre: '',
    email: '',
    password: '',
    role: 'Cliente'
  })

  const handleCreateUser = async (e) => {
    e.preventDefault()
    try {
      await createUser(newUser)
      setShowCreateUser(false)
      setNewUser({ nombre: '', email: '', password: '', role: 'Cliente' })
    } catch (error) {
      console.error('Error al crear usuario:', error)
    }
  }

  const estadisticas = [
    { titulo: 'Total Usuarios', valor: '487', icono: FaUsers, color: 'text-blue-400' },
    { titulo: 'Cursos Activos', valor: '52', icono: FaBookOpen, color: 'text-green-400' },
    { titulo: 'Horas de Contenido', valor: '340', icono: FaChartLine, color: 'text-purple-400' },
    { titulo: 'Iglesias Registradas', valor: '89', icono: FaUsers, color: 'text-yellow-400' }
  ]

  const usuariosRecientes = [
    { id: 1, nombre: 'Ana García', email: 'ana@iglesia.com', role: 'Cliente', activo: true },
    { id: 2, nombre: 'Carlos López', email: 'carlos@centro.com', role: 'Mentor', activo: true },
    { id: 3, nombre: 'María Rodríguez', email: 'maria@vida.com', role: 'Cliente', activo: false },
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
          <h1 className="text-3xl font-bold text-white mb-2">
            Panel de {currentUser?.role === 'SuperAdmin' ? 'Super Administración' : 'Administración'}
          </h1>
          <p className="text-gray-400">Gestiona usuarios, cursos y contenido del Club de Maestros 4x4</p>
        </motion.div>

        {/* Navegación de pestañas */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Resumen' },
                { id: 'users', label: 'Usuarios' },
                { id: 'courses', label: 'Cursos' },
                { id: 'analytics', label: 'Analíticas' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenido según la pestaña activa */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estadisticas.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-850 rounded-xl p-6"
                >
                  <div className="flex items-center">
                    <stat.icono className={`text-2xl ${stat.color} mr-4`} />
                    <div>
                      <p className="text-gray-400 text-sm">{stat.titulo}</p>
                      <p className="text-2xl font-bold text-white">{stat.valor}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Actividad reciente */}
            <div className="bg-gray-850 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Usuarios Recientes</h3>
              <div className="space-y-3">
                {usuariosRecientes.map((usuario) => (
                  <div key={usuario.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{usuario.nombre}</p>
                      <p className="text-gray-400 text-sm">{usuario.email}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        usuario.role === 'SuperAdmin' ? 'bg-red-500/20 text-red-400' :
                        usuario.role === 'Admin' ? 'bg-orange-500/20 text-orange-400' :
                        usuario.role === 'Mentor' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {usuario.role}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${usuario.activo ? 'bg-green-400' : 'bg-gray-400'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Header de usuarios */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Gestión de Usuarios</h3>
              {['SuperAdmin', 'Soporte'].includes(currentUser?.role) && (
                <button
                  onClick={() => setShowCreateUser(true)}
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  <FaPlus className="mr-2" />
                  Nuevo Usuario
                </button>
              )}
            </div>

            {/* Lista de usuarios */}
            <div className="bg-gray-850 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Usuario</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Rol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Estado</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {usuariosRecientes.map((usuario) => (
                      <tr key={usuario.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-white font-medium">{usuario.nombre}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-400">{usuario.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            usuario.role === 'SuperAdmin' ? 'bg-red-500/20 text-red-400' :
                            usuario.role === 'Admin' ? 'bg-orange-500/20 text-orange-400' :
                            usuario.role === 'Mentor' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {usuario.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`w-2 h-2 rounded-full inline-block ${usuario.activo ? 'bg-green-400' : 'bg-gray-400'}`} />
                          <span className="ml-2 text-gray-400 text-sm">
                            {usuario.activo ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <FaEdit />
                            </button>
                            {currentUser?.role === 'SuperAdmin' && (
                              <button className="text-red-400 hover:text-red-300">
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Modal para crear usuario */}
        {showCreateUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-gray-850 rounded-xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-white mb-4">Crear Nuevo Usuario</h3>
              
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                  <input
                    type="text"
                    value={newUser.nombre}
                    onChange={(e) => setNewUser({...newUser, nombre: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Contraseña</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Rol</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Mentor">Mentor</option>
                    {currentUser?.role === 'SuperAdmin' && (
                      <>
                        <option value="Admin">Admin</option>
                        <option value="Soporte">Soporte</option>
                      </>
                    )}
                  </select>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Crear Usuario
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateUser(false)}
                    className="flex-1 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default AdminDashboard