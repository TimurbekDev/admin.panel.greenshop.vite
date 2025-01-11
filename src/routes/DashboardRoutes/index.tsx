import { Route, Routes } from "react-router";
import { Categories, Products, Profile, Users } from "../../pages";
import { PATH } from "../../hooks/paths";
import { Box } from "@mui/material";
import { Header, Navbar } from "../../components";

const DashboardRoutes = () => {
  const routes = [
    {
      id: 1,
      path: PATH.products,
      element: <Products />,
    },
    {
      id: 2,
      path: PATH.categories,
      element: <Categories />,
    },
    {
      id: 3,
      path: PATH.users,
      element: <Users />,
    },
    {
      id: 4,
      path: PATH.profile,
      element: <Profile />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "20%",
          bgcolor: "#152259",
        }}
      >
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: "80%",
          bgcolor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Fixed Header */}
        <Box
          sx={{
            width: "100%",
            height: "8%",
            bgcolor: "whitesmoke",
            flexShrink: 0,
          }}
        >
          <Header />
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flexGrow: 1, // Takes up remaining space
            overflowY: 'auto', // Enables vertical scrolling
          }}
        >
          <Routes>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardRoutes;
