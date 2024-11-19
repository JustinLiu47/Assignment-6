import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Footer from "./components/Footer"

function App() {
  return (
    <body>
      <Header/>
      <div>
        <Hero/>
        <Feature/>
      </div>
      <Footer/>
    </body>
  )
}

export default App
