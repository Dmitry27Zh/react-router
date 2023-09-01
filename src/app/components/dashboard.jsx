import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Stats from './stats'
import Edit from './edit'

const Dashboard = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Stats />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default Dashboard
