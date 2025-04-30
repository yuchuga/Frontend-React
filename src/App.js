import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VirtualizationList from './hooks/3.2 Virtualization'

const Home = lazy(() => import('./pages/4.1 Home')) //4.1
const Profile = lazy(() => import('./pages/4.1 Profile')) //4.1

const Loader = () => <div>Loading...</div>

//4.1
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/virtualization" element={<VirtualizationList />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App