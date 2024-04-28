
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Restaurant from './components/Restaurant'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/GrabFood/' element={<Home/>}/>
        <Route path='/Restaurant' element={<Restaurant/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
