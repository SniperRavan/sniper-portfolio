import Cursor from './components/Cursor'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import StackTicker from './sections/StackTicker'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Capabilities from './sections/Capabilities'
import Stats from './sections/Stats'
import Logbook from './sections/Logbook'
import FooterCTA from './sections/FooterCTA'

function Divider() {
  return <div className="section-divider" />
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Cursor />
      <Navigation />

      <Hero />
      <Divider />

      <StackTicker />
      <Divider />

      <Process />
      <Divider />

      <Projects />
      <Divider />

      <Capabilities />
      <Divider />

      <Stats />
      <Divider />

      <Logbook />
      <Divider />

      <FooterCTA />
    </div>
  )
}
