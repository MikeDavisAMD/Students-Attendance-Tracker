import { Navigate, useLocation } from "react-router-dom"

export const SecureRoute = ({ children }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    const location = useLocation()

    const isForgotPW = location.pathname === "/forgot-password"
    const isSetPW = location.pathname === "/set-password"

    return !token && !isForgotPW && !isSetPW ? <Navigate to='/login' replace /> : children
}
