import { useState } from "react"
import { Link } from "react-router"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="@container flex flex-col gap-4 items-center md:flex-row md:justify-between bg-gray-200 p-4 font-semibold">
        <ul className="hidden md:flex md:justify-evenly md:gap-10">
            <li><Link to="/knihy">Knihy</Link></li>
            <li><a href="#">Filmy</a></li>
            <li><a href="#">Seriály</a></li>
        </ul>
        <ul className="hidden md:flex md:justify-evenly md:gap-10">
            {
              isLoggedIn ? (
                <>
                  <li><a href="#">My Books</a></li>
                  <li><a href="#">My Reviews</a></li>
                  <li><a href="#">My Profile</a></li>
                </>
              ) : (
                <>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                </>
              )
            }
        </ul>
        <div className="md:hidden w-full flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer md:hidden" onClick={toggleMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <ul className={isOpen ? "md:hidden flex flex-col gap-4" : "hidden"}>
            <li><a href="#">Google Books</a></li>
            <li><a href="#">Apple Books</a></li>
            <li><a href="#">Amazon Books</a></li>

            {
              isLoggedIn ? (
                <>
                  <li><a href="#">My Books</a></li>
                  <li><a href="#">My Reviews</a></li>
                  <li><a href="#">My Profile</a></li>
                </>
              ) : (
                <>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                </>
              )
            }
        </ul>
    </nav>
  )
}

export default Navigation