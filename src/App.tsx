import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/statics/footer/Footer'
import Navbar from './components/statics/navbar/Navbar'
import Home from './pages/home/Home'
import Produtos from './pages/produtos/Produtos'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
         
            <Routes>
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Routes>
       
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
