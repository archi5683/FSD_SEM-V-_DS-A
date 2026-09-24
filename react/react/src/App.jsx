import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import Courses from './components/courses'
import Fees from './components/fees'

import './college.css'

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>ABES College</h2>

        <div className="nav-links">

          <Link to="/">HOME</Link>

          <Link to="/about">ABOUT US</Link>

          <Link to="/courses">COURSES</Link>

          <Link to="/fees">FEES</Link>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/fees" element={<Fees />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App