import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Homepage() {
  return (
    <div className="flex flex-col gap-4 justify-between h-screen">
        <Navigation />
        <Footer />
    </div>
  )
}

export default Homepage