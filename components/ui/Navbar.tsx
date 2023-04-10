import { FC, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography, TextField, Switch, Grid, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';
import CustomizedSwitches from './Switch';

export const Navbar: FC = () => {

  const { openSideMenu } = useContext(UIContext)

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size="large"
          edge='start'
          onClick={openSideMenu}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Link href='/' underline='none' color='white'>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>OpenJira</Typography>
        </Link>

        <div style={{ flex: 1 }}/>
        
        <CustomizedSwitches />

      </Toolbar>


    </AppBar>
  )
}