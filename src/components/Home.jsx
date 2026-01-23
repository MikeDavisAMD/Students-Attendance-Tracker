import { useLocation } from "react-router-dom"
import { Admin } from "../assets/utils/Admin"
import { Teacher } from "../assets/utils/Teacher"

export const Home = () => {
    const location = useLocation()
    const role = location.state?.role

    return (
        <>
            {role === 'admin' ? <Admin /> : <Teacher />}
        </>
    )
}
