import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('clubMaestros_auth')
    return saved ? JSON.parse(saved) : null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Lista de usuarios predefinidos (en producción esto vendría de Supabase)
  const usuarios = [
    {
      id: '1',
      email: 'mentores4x4@gmail.com',
      password: 'Salmos23:1',
      nombre: 'Super Administrador',
      role: 'SuperAdmin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    {
      id: '2',
      email: 'admin@clubmaestros.com',
      password: 'admin123',
      nombre: 'Administrador',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150'
    },
    {
      id: '3',
      email: 'mentor@clubmaestros.com',
      password: 'mentor123',
      nombre: 'Mentor Principal',
      role: 'Mentor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      id: '4',
      email: 'soporte@clubmaestros.com',
      password: 'soporte123',
      nombre: 'Soporte Técnico',
      role: 'Soporte',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    {
      id: '5',
      email: 'yesica@ejemplo.com',
      password: 'cliente123',
      nombre: 'Yésica González',
      role: 'Cliente',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150'
    }
  ]

  useEffect(() => {
    localStorage.setItem('clubMaestros_auth', JSON.stringify(currentUser))
  }, [currentUser])

  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simular tiempo de carga
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const usuario = usuarios.find(u => u.email === email && u.password === password)
      
      if (usuario) {
        const { password: _, ...usuarioSinPassword } = usuario
        setCurrentUser(usuarioSinPassword)
        
        // Redirigir según el rol
        switch (usuario.role) {
          case 'SuperAdmin':
            navigate('/admin/dashboard')
            break
          case 'Admin':
            navigate('/admin/cursos')
            break
          case 'Mentor':
            navigate('/mentor-panel')
            break
          case 'Soporte':
            navigate('/soporte')
            break
          default:
            navigate('/home')
        }
      } else {
        throw new Error('Credenciales inválidas')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setCurrentUser(null)
    navigate('/login')
  }

  const createUser = async (userData) => {
    // Solo SuperAdmin y Soporte pueden crear usuarios
    if (!currentUser || !['SuperAdmin', 'Soporte'].includes(currentUser.role)) {
      throw new Error('No tienes permisos para crear usuarios')
    }

    setLoading(true)
    try {
      // En producción, esto se haría con Supabase
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        avatar: userData.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
      }
      
      // Aquí se guardaría en la base de datos
      console.log('Usuario creado:', newUser)
      return newUser
    } finally {
      setLoading(false)
    }
  }

  const updateUserRole = async (userId, newRole) => {
    // Solo SuperAdmin puede cambiar roles
    if (!currentUser || currentUser.role !== 'SuperAdmin') {
      throw new Error('No tienes permisos para cambiar roles')
    }

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // En producción, esto se haría con Supabase
      console.log(`Rol del usuario ${userId} cambiado a ${newRole}`)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    currentUser,
    loading,
    error,
    login,
    logout,
    createUser,
    updateUserRole
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}