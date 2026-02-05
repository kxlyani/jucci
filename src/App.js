import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import CampaignPage from './pages/CampaignPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
