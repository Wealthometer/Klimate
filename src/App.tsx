import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
// import { Layout } from 'lu'

function App() {
  return (
    <BrowserRouter>
      <Layout> Hello </Layout>
    </BrowserRouter>
  )
}

export default App
