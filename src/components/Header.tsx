import { LogoutOutlined } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'
import { Modal } from 'antd'

const Header = () => {

  const { setUser } = useContext(AuthContext);
  const naviagate = useNavigate();
  const [modal ,SetModal] = useState<boolean>(false);

  return (
    <div className='flex justify-between px-3 py-2 items-center'>
      <p></p>
      <Typography color='primary' sx={{ fontSize: '20px' }} >Green-Shop Admin</Typography>
      <Button
        sx={{
          display: 'flex',
          gap: '7px',
          alignItems: 'center',
          height: '100%',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
        color='error'
        onClick={()=>SetModal(true)}
      >
        Log Out <LogoutOutlined />
      </Button>
      <Modal
        title="Log Out"
        open={modal}
        onOk={() => {
          setUser(null);
          naviagate('/')
          location.reload();
        }}
        onCancel={()=>{
          SetModal(false);
        }}
      >
        <p>Are you sure log out!</p>
      </Modal>
    </div>
  )
}

export default Header