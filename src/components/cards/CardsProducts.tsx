import { CardMedia, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const styleBackgroud = {
    bgcolor: '#FFFFFF',
}


const CardsProducts = () => {
    const [cards, setCards] = useState([
        { id: 1, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '2.000', img: "https://http2.mlstatic.com/D_NQ_NP_996545-MLB45042145148_032021-W.webp" },
        { id: 2, titulo: "Violoncelo Custom 3/4 Arco E Breu Com Case", preco: '3.500', img: "https://http2.mlstatic.com/D_NQ_NP_718197-MLB49985316043_052022-W.webp" },
        { id: 3, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.000', img: "https://http2.mlstatic.com/D_NQ_NP_742546-MLB43496316374_092020-W.webp" },
        { id: 4, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '1.800', img: "https://http2.mlstatic.com/D_NQ_NP_785478-MLB43555120435_092020-W.webp" },
        { id: 5, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '5.000', img: "https://http2.mlstatic.com/D_NQ_NP_997230-MLB44938028891_022021-W.webp" },
        { id: 6, titulo: "Violoncelo Custom 4/4 Arco E Breu Com Case", preco: '4.765', img: "https://http2.mlstatic.com/D_NQ_NP_869318-MLB41840058854_052020-W.webp" },
    ])
    return (
        <>
            <Box display="flex" flexWrap="wrap" justifyContent="center" padding={2}>
                {
                    cards.map(card =>
                        <Button>
                            <Box margin={1}
                                width={270} sx={{ ...styleBackgroud, border: 1, borderColor: '#cecece', borderRadius: '10px', paddingX: 5 }} >

                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={card.img}

                                />

                                <Box padding={1} marginBottom={2}>
                                    <Typography variant="h6" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                                        R${card.preco}</Typography>
                                    <Typography style={{ color: '#2FB670' }} variant="body1" textAlign="start" color="initial">
                                        Frete gratis</Typography>
                                    <Typography variant="body1" textAlign="start" color="initial">
                                        {card.titulo}
                                    </Typography>

                                </Box>

                            </Box>
                        </Button>

                    )}

            </Box>
        </>
    )
}

export default CardsProducts 