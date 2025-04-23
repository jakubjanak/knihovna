import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import GoogleBooks from "../components/GoogleBooks"

function Homepage() {

  return (
    <div className="flex flex-col gap-4 justify-between h-screen">
        <Navigation />
        <GoogleBooks />
        <Footer />
    </div>
  )
}

export default Homepage