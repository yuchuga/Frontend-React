import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VirtualizationList from './hooks/3.2 Virtualization'

//4.1 Lazy Loading
const Home = lazy(() => import('./pages/4.1 Home')) 
const Profile = lazy(() => import('./pages/4.1 Profile')) 

const Loader = () => <div>Loading...</div>

//4.1 Suspense Fallback and Dynamic Routing
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<VirtualizationList />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App