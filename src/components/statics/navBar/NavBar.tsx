import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


import theme from '../../../theme/ThemeMercado'

import { ThemeProvider} from '@mui/material/styles';
import { Avatar } from '@mui/material';
import MenuNav from './menuNav/MenuNav';
import { Link } from 'react-router-dom';
import './NavBar.css'




const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Box marginX={5}>
          <Link to="/home" className="text-decorator-none">
            <Avatar alt="Example Alt"
              sx={{ width: 160, height: 60 }}
              src="https://oombe.com/assets/img/mercadolivre_nova_logo.png" />
              </Link>
          </Box>


          <MenuNav />
          <Box marginLeft='auto'>
            <Avatar alt="Example Alt"
              sx={{ width: 100, height: 70 }}
              src="https://logospng.org/download/disneyplus/logo-disneyplus-256.png" />

          </Box>
          <Button color="inherit">Assine o nivel 6 por R$ 9,90</Button>
        </Toolbar>
        <Toolbar>
          <Box marginX={5} >
            <Button color="inherit">endereço</Button>

          </Box>

          <Box marginLeft={7} >
          <Link to="/produtos" className="text-decorator-none">
     
            <Button className='cursor'>Categoria</Button>
        
            </Link>
            <Button color="inherit">Oferta do dia</Button>
            <Button color="inherit">Supermercado</Button>
            <Button color="inherit">Moda</Button>
            <Button color="inherit">Live</Button>
            <Button color="inherit">Vender</Button>
            <Button color="inherit">Contato</Button>
          </Box>

          <Box marginLeft={1} >
            <Button color="inherit">User</Button>
            <Button color="inherit">Compras</Button>
            <Button color="inherit">Supermercado</Button>
            <Button color="inherit">Favoritos</Button>

          </Box>
        </Toolbar>
      </AppBar>


    </ThemeProvider>
  )
}

export default NavBar 