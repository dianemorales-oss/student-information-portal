import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Campusly Student Portal</span>
        <span>Made for curious minds <span aria-hidden="true">✦</span></span>
      </footer>
    </div>
  )
}

export default App
