import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="nav-center">
          <Link to="/" className="logo">
            M A R K E T
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/collection">Collection</Link>
          <Link to="/campaign">Campaign</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
