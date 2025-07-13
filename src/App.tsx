import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import { ThemeProvider } from './components/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'
// import { Layout } from 'lu'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Routes>
          <Route path='/' element={<WeatherDashboard />}/>
          <Route path='/city/:cityName' element={<CityPage />}/>
        </Routes>
      </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
