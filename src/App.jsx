import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { ForgotPassword } from "./components/ForgotPassword"
import { SetPassword } from "./components/SetPassword"
import { SecureRoute } from "./assets/Controllers/SecureRoute"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"

const Content = () => {
  const location = useLocation()

  const navbar = ['/']
  const showNavbar = navbar.includes(location.pathname)

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/" element={
          <SecureRoute>
            <Home />
          </SecureRoute>
        } />
      </Routes>
    </>
  )
}

export const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  )
}
