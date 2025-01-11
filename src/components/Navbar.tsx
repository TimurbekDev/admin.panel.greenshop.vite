import { CategoryOutlined, PeopleOutlineRounded, Person, ProductionQuantityLimitsOutlined } from "@mui/icons-material"
import { Box, ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material"
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="flex flex-col justify-start gap-5 w-full h-full">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '13%',
          gap: '10px',
          borderBottom: '2px solid white'
        }}
      >
        <StoreIcon className="flex !size-10 text-white" />
        <Typography className="text-center text-white">Green-Shop</Typography>
      </Box>

      <MenuList className="flex flex-col gap-4 ">
        <NavLink to={'/categories'}>
          <MenuItem className="!px-5 !py-4">
            <ListItemIcon>
              <CategoryOutlined color="primary" />
            </ListItemIcon>
            <Typography color="white"> Categories </Typography>
          </MenuItem>
        </NavLink>

        <NavLink to={'/products'}>
          <MenuItem className="!px-5 !py-4">
            <ListItemIcon>
              <ProductionQuantityLimitsOutlined color="primary" />
            </ListItemIcon>
            <Typography color="white"> Products </Typography>
          </MenuItem>
        </NavLink>

        <NavLink to={'/users'}>
          <MenuItem className="!px-5 !py-4">
            <ListItemIcon>
              <PeopleOutlineRounded color="primary" />
            </ListItemIcon>
            <Typography color="white"> Users </Typography>
          </MenuItem>
        </NavLink>

        <NavLink to={'/profile'}>
          <MenuItem className="!px-5 !py-4">
            <ListItemIcon>
              <Person color="primary" />
            </ListItemIcon>
            <Typography color="white"> Profile </Typography>
          </MenuItem>
        </NavLink>

      </MenuList>
      <Box></Box>
    </div>
  )
}

export default Navbar