import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import GoogleBooks from "../components/GoogleBooks"
import AppleBooks from "../components/AppleBooks"

function Homepage() {

  return (
    <div className="flex flex-col gap-4 justify-between h-screen">
        <Navigation />
        <GoogleBooks />
        <AppleBooks />
        <Footer />
    </div>
  )
}

export default Homepage