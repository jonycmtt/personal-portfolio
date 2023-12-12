import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Services from "./components/Services"
import Skill from "./components/Skill"
import Work from "./components/Work"


function App() {

  return (
    <>
      <div className="bg-[url('./assets/site-bg.jpg')]  bg-no-repeat bg-cover overflow-hidden">
      {/* <div className=""> */}
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <About></About>
        <Services></Services>
        {/* <Skill></Skill> */}
        <Work></Work>
        <Contact></Contact>
        {/* <div className="h-[4000px]"></div> */}
      </div>
    </>
  )
}

export default App
