import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import GoogleBooks from "../components/GoogleBooks"
import AppleBooks from "../components/AppleBooks"
import OpenLibraryBooks from "../components/OpenLibraryBooks"

function Knihy() {
  return (
    <div className="flex flex-col gap-4 justify-between h-screen">
        <Navigation />
        <GoogleBooks nazev="Tim Cook" pocet={10} />
        <AppleBooks nazev="Tim Cook" pocet={10}/>
        <OpenLibraryBooks nazev="Tim Cook" pocet={10}/>
        <Footer />
    </div>
  )
}

export default Knihy