import { Route, Routes } from "react-router"
import { Login } from "../../pages"

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default LoginRoutes