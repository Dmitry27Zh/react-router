import './App.css'
import NavBar from './components/navBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Posts from './components/posts'
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/posts/:id?" element={<Posts />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App
