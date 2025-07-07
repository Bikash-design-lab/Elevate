import { useState } from 'react'
import Test from './components/Test'
import MovieTrackerFrontend from './components2/Movie-tracker-frontend'
import { Route, Routes } from 'react-router-dom'
import MoreDetails from './components2/MoreDetails'
import MovieNAvbar from './components2/MovieNAvbar'
import AddMovie from './components2/AddMovie'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Books from './components/Books'
// import Navbar from './components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import AddNewBook from './components/AddNewBook'
// import PageNotFound from './components/PageNotFound'
// import BookDetails from './components/BookDetails'
// import './App.css'

function App() {

  return (
    <>
    <MovieNAvbar/>
    <Routes>
      <Route path='/' element={<MovieTrackerFrontend/>} />
      <Route path='/moreDetails/:id' element={<MoreDetails/>} />
      <Route path='/addNewMovie' element={<AddMovie/>} />
    </Routes>
    {/* <Navbar/>
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/addNewBook" element={<AddNewBook/>} />
      <Route path='/:bookId' element={<BookDetails/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes> */}
    {/* <Test/> */}
    </>
  )
}

export default App
