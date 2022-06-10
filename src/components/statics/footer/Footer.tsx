import { Box, Button, Toolbar, Typography } from '@mui/material'
import theme from '../../../theme/ThemeMercado'
import React from 'react'
import { ThemeProvider } from 'react-bootstrap'

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box marginTop={5}>

                <Toolbar>


                    <Box marginLeft={7} >
                        <Button color="inherit" size='small'>Trabalhe conosco</Button>
                        <Button color="inherit" size='small'>Termos e condições</Button>
                        <Button color="inherit" size='small'>Como cuidamos da sua privacidade</Button>
                        <Button color="inherit" size='small'>Contato</Button>
                        <Button color="inherit" size='small'>Informações sobre seguros</Button>

                    </Box>


                </Toolbar>
                <Toolbar>
                    <Box marginLeft={7} >
                        <Typography variant="body1" textAlign="justify" color="initial">
                            Copyright © 1999-2022 Ebazar.com.br LTDA
                        </Typography>

                        <Typography variant="body1" textAlign="justify" color="initial">
                            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre
                        </Typography>
                    </Box>
                </Toolbar>
            </Box>
        </ThemeProvider>
    )
}

export default Footer