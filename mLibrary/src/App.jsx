import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Books from './components/Books'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddNewBook from './components/AddNewBook'
import PageNotFound from './components/PageNotFound'
import BookDetails from './components/BookDetails'
// import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/addNewBook" element={<AddNewBook/>} />
      <Route path='/:bookId' element={<BookDetails/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
