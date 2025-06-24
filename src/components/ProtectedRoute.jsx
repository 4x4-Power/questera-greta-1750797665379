import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && !requiredRole.includes(currentUser.role)) {
    return <Navigate to="/home" replace />
  }

  return children
}

export default ProtectedRoute