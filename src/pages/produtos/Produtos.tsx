import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react'
import { Typography,  Switch, TextField } from '@mui/material';
import CardsProducts from '../../components/cards/CardsProducts';

const styleBackgroud = {
    bgcolor: '#EDEDED',
}


const commonStyles = {
    bgcolor: '#FFFFFF',
    m: 1,
    border: 1,
    width: '60%',
    height: '30%',

};

export const Produtos = () => {
    return (
        <Box sx={{ ...styleBackgroud }}>
      

            <Grid container >
                <Grid item xs={3} >
                    <Box margin={2}  marginLeft={9}>
                        <Typography variant="body1" textAlign="start" color="initial">
                            Instrumentos Musicais &gt; Instrumentos de Corda</Typography>
                    </Box>
                    <Box margin={2} marginLeft={9}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                            Violoncelo</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box sx={{ ...commonStyles, borderRadius: '5px',borderColor:'#cecece', padding: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                            <Typography variant="body1" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                                Chegam amanhã</Typography>
                            <Switch />
                        </Box>

                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box sx={{ ...commonStyles, borderRadius: '5px',borderColor:'#cecece', padding: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                            <Typography variant="body1" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                                Frete grátis</Typography>
                            <Switch />
                        </Box>

                    </Box>

                    <Box marginY={3} marginLeft={9}>
                        <Typography variant="h6" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                            Condição</Typography>
                        <Typography variant="body2"  textAlign="start" color="initial">
                            Novo
                            (393)</Typography>
                        <Typography variant="body2" textAlign="start" color="initial">
                            Usado
                            (4)</Typography>

                    </Box>

                    <Box marginY={3} marginLeft={9}>
                        <Typography variant="h6" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                            Preço</Typography>
                        <Typography variant="body2" textAlign="start" color="initial">
                            Até R$350</Typography>
                        <Typography variant="body2" textAlign="start" color="initial">
                            R$350 a R$3.500</Typography>
                        <Typography variant="body2" textAlign="start" color="initial">
                            Mais de R$3.500 (134)</Typography>
                        <Box display="flex" justifyContent="start" marginY={2} marginRight={9}>

                            <TextField style={{backgroundColor:'#FFFFFF'}} id="outlined-basic" size="small" label="Mínimo" variant="outlined" /> _ <TextField style={{backgroundColor:'#FFFFFF'}} id="outlined-basic" size="small" label="Máximo" variant="outlined" />
                        </Box>
                    </Box>



                    <Box marginY={3} marginLeft={9}>
                        <Typography style={{ fontWeight: "bold" }} variant="h6" textAlign="start" color="initial">
                            Tempo de entrega</Typography>
                        <Typography variant="body2" textAlign="start" color="initial">
                            Chegará em menos de 24h (6)</Typography>


                    </Box>

                </Grid>
                <Grid item xs={9}>

                    <CardsProducts/>

                   

                </Grid>


            </Grid>

           

        </Box>
    )
}
