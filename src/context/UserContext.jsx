import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [progresoCursos, setProgresoCursos] = useState(() => {
    const saved = localStorage.getItem('clubMaestros_progreso')
    return saved ? JSON.parse(saved) : {}
  })

  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem('clubMaestros_favoritos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('clubMaestros_progreso', JSON.stringify(progresoCursos))
  }, [progresoCursos])

  useEffect(() => {
    localStorage.setItem('clubMaestros_favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const actualizarProgreso = (cursoId, leccionId, completada) => {
    setProgresoCursos(prev => ({
      ...prev,
      [cursoId]: {
        ...prev[cursoId],
        [leccionId]: completada
      }
    }))
  }

  const obtenerProgreso = (cursoId) => {
    return progresoCursos[cursoId] || {}
  }

  const agregarFavorito = (curso) => {
    setFavoritos(prev => {
      if (!prev.some(fav => fav.id === curso.id)) {
        return [...prev, curso]
      }
      return prev
    })
  }

  const removerFavorito = (cursoId) => {
    setFavoritos(prev => prev.filter(fav => fav.id !== cursoId))
  }

  const esFavorito = (cursoId) => {
    return favoritos.some(fav => fav.id === cursoId)
  }

  const value = {
    progresoCursos,
    favoritos,
    actualizarProgreso,
    obtenerProgreso,
    agregarFavorito,
    removerFavorito,
    esFavorito
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}