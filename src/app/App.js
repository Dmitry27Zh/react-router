import './App.css'
import NavBar from './components/navBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Posts from './components/posts'
import Dashboard from './components/dashboard'
import NotFound from './components/notFound'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id?" element={<Posts />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/admin" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  )
}

export default App
