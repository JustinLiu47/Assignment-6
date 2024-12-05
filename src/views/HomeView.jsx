import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Genres from "../components/Genres"

function HomeView() {
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <Feature />
        <Genres />
      </div>
      <Footer />
    </div>
  )
}

export default HomeView;