import { Head } from "./components/Head"
import { Cards } from "./components/Cards"
import { Doc } from "./components/Doc"
import { Footer } from "./components/Footer"

function App() {
  return (
    <section className="App">
      <Head/>
      <Cards/>
      <Doc/>
      <Footer/>
    </section>
  )
}

export default App
