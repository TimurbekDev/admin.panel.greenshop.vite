import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"
import DashboardRoutes from "./routes/DashboardRoutes";
import LoginRoutes from "./routes/LoginRoutes";

const App = () => {

  const { user } = useContext(AuthContext);
  return user ? <DashboardRoutes /> : <LoginRoutes />
}

export default App