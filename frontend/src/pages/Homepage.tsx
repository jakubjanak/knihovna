import { Link } from "react-router"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Homepage() {

  return (
    <div className="flex flex-col gap-4 justify-between h-screen">
        <Navigation />
        <Link to="/knihy" className="text-2xl md:text-3xl font-bold px-5">
            Knihy
        </Link>
        <Footer />
    </div>
  )
}

export default Homepage