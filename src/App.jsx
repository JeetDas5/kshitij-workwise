import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import RfqCreation from './pages/RFQ-Creation'
import RfqManagement from './pages/RFQ-Management'
import SearchVendors from './pages/Search-Vendors'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/rfq-creation' element={<RfqCreation/>} />
        <Route path='/rfq-management' element={<RfqManagement/>} />
        <Route path='/search-vendors' element={<SearchVendors/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App