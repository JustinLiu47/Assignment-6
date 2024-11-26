import Header from "../components/Header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Footer from "../components/Footer"

function HomeView() {
  return (
    <div>
      <Header/>
      <div>
        <Hero/>
        <Feature/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeView;