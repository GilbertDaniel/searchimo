import React from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { Results } from './Results'

export const AppRoutes = () => {
  return (
    <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Navigate to="/search"/>}></Route>
      <Route exact path="/search" element={<Results/>}></Route>
      <Route exact path="/image" element={<Results/>}></Route>
      <Route exact path="/news" element={<Results/>}></Route>
      <Route exact path="/video" element={<Results/>}></Route>
    </Routes>
  </div>
  )
}
