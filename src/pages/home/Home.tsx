import { Box, Button,CardMedia, Typography } from '@mui/material'
import React from 'react'
import CarouselCategoria from '../../components/statics/carouselCategoria/CarouselCategoria'
import CarouselPromo from '../../components/statics/carouselPromo/CarouselPromo'


const Home = () => {
  return (
    <>
     

      <CarouselPromo />

      <Box margin={2}>
        <Typography variant="h6" textAlign="center" color="initial">
          O DIA DOS NAMORADOS CHEGOU COM TUDO NO MERCADO LIVRE 💖</Typography>
      </Box>
      <Box margin={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP717617-MLA50150847222_052022-B.webp"
              alt="Paella dish"
            />
          </Button>

        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP616277-MLA50150817562_052022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP928432-MLA50150808729_052022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP988325-MLA50169943240_062022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>

      </Box>
      <Box margin={2}>
        <Typography variant="h6" textAlign="center" color="initial">
          NÃO PERCA AS LIVES DO DIA DOS NAMORADOS 💘
        </Typography>
      </Box>
      <Box margin={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button color="inherit">
          <CardMedia
            component="img"

            image="https://http2.mlstatic.com/D_NQ_NP_992599-MLA50235183979_062022-OO.webp"
            alt="Paella dish"
          />
        </Button>
      </Box>

      <Box margin={2}>
        <Typography variant="h6" textAlign="center" color="initial">
          TEM PRESENTE PRA VOCÊ, PRO MOZÃO....
        </Typography>
      </Box>
      <Box margin={2} sx={{ display: 'flex', justifyContent: 'center', borderRadius: 16 }}>
        <Button color="inherit">
          <CardMedia
            component="img"

            image="https://http2.mlstatic.com/D_NQ_NP_830079-MLA50140701967_052022-OO.webp"
            alt="Paella dish"
          />
        </Button>
      </Box>

      <Box margin={2}>
        <Typography variant="h6" textAlign="center" color="initial">
          ...E PRA TODOS OS BOLSOS! 👀
        </Typography>
      </Box>

      <Box margin={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP937439-MLA50162808786_062022-B.webp"
              alt="Paella dish"
            />
          </Button>

        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP710090-MLA50162883135_062022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP735944-MLA50162808823_062022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP635998-MLA50162865319_062022-B.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>

      </Box>

      <Box margin={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP_971318-MLA50140804823_052022-OO.webp"
              alt="Paella dish"
            />
          </Button>

        </Box>
        <Box sx={{ width: '50%', height: '50%', margin: 1, borderRadius: 16 }}>
          <Button color="inherit">
            <CardMedia
              component="img"

              image="https://http2.mlstatic.com/D_NQ_NP_994430-MLA50140799938_052022-OO.webp"
              alt="Paella dish"
            />
          </Button>
        </Box>


      </Box>
      <Box margin={2}>
        <Typography variant="h6" textAlign="center" color="initial">
          MAIS OFERTAS PRA APROVEITAR
        </Typography>
      </Box>

    <CarouselCategoria/>

      <Box margin={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" size='large'>
          Ver mais ofertas
        </Button>
      </Box>

      <Box margin={2}  marginTop={12}>
        <Box margin={2} >
          <Typography variant="h4" textAlign="center" color="initial">
            Dúvidas frequentes - Dia dos Namorados 2022
          </Typography>
        </Box>


        <Box margin={2} >
          <Typography variant="h6" textAlign="left" color="initial">
            O que é o Dia dos Namorados?
          </Typography>
        </Box>
        <Box margin={2} >
          <Typography variant="body1" textAlign="justify" color="initial">
            No Brasil, há muitas décadas, em 12 de junho comemora-se o Dia dos Namorados. Essa data faz referência ao amor, ao afeto e ao carinho entre casais. Nesse dia os casais trocam presentes e costumam jantar em restaurantes. Em outros países, há também um dia específico que tem o mesmo propósito.
          </Typography>
        </Box>

        <Box margin={2} >
          <Typography variant="h6" textAlign="left" color="initial">
            Como surgiu o Dia dos Namorados?
          </Typography>
        </Box>
        <Box margin={2} >
          <Typography variant="body1" textAlign="justify" color="initial">
            A comemoração do dia dos namorados não era uma tradição no Brasil, a data começou a ser celebrada depois de uma campanha publicitária realizada em 1949. Naquele ano, o publicitário João Dória, diretor da Agência Standard Propaganda, criou uma campanha comercial para a loja Clipper, que costumava ter baixo volume de vendas no mês de junho. O dia 12 foi escolhido por ser a véspera do dia de Santo Antônio, o santo casamenteiro.
          </Typography>
        </Box>

        <Box margin={2} >
          <Typography variant="h6" textAlign="left" color="initial">
            Quando é o Dia dos Namorados 2022?
          </Typography>
        </Box>
        <Box margin={2} >
          <Typography variant="body1" textAlign="justify" color="initial">
            O Dia dos Namorados em 2022 é em 12 de junho. Aqui no Mercado Livre, o Dia dos Namorados acontece a partir do dia 01 de junho. Você encontra ofertas incríveis com até 60% de desconto e envios grátis e rápidos em milhares de produtos. É a oportunidade perfeita pra encontrar uma presente pro mozão :)
          </Typography>
        </Box>

        <Box margin={2} >
          <Typography variant="h6" textAlign="left" color="initial">
            Quais são as formas de pagamento?
          </Typography>
        </Box>
        <Box margin={2} >
          <Typography variant="body1" textAlign="justify" color="initial">
            Você pode realizar o pagamento das suas compras com boleto bancário, cartão de crédito, cartão de débito virtual, transferência bancária, pix, Mercado Crédito ou utilizar o saldo da sua conta do Mercado Pago. Veja mais.
          </Typography>
        </Box>

        <Box margin={2} >
          <Typography variant="h6" textAlign="left" color="initial">
            Qual valor do frete?
          </Typography>
        </Box>
        <Box margin={2} >
          <Typography variant="body1" textAlign="justify" color="initial">
            Você pode contar com a entrega mais rápida do Brasil com frete grátis a partir de R$79**. Receba sua compra de onde estiver ou retire em uma agência Mercado Livre.
          </Typography>
        </Box>


      </Box>

     
    </>

  )
}

export default Home 