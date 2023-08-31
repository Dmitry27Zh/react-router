import './App.css'
import NavBar from './components/navBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Posts from './components/posts'
import Post from './components/post'
import Dashboard from './components/dashboard'

const posts = [
  {
    id: 1,
    label: 'Post 1',
  },
  {
    id: 2,
    label: 'Post 2',
  },
  {
    id: 3,
    label: 'Post 3',
  },
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/posts" element={<Posts posts={posts} />}></Route>
        <Route path="/posts/:id" element={<Post posts={posts} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App
