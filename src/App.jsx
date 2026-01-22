import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { ForgotPassword } from "./components/ForgotPassword"
import { SetPassword } from "./components/SetPassword"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword/>}/>
      </Routes>
    </Router>
  )
}
