import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Dock, Home, Navbar, Welcome } from '#components'
import { Finder, Resume, Safari, Terminal, Text ,ImageShow, Contact} from '#windows'

const App = () => {
  gsap.registerPlugin(Draggable)
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>


      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <ImageShow/>
      <Contact/>

      <Home/>
    </main>
  )
}

export default App
