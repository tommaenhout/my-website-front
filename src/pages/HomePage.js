import CarouselComplete from "../components/CarouselComplete";
import NavbarComplete from "../components/NavbarComplete";
import CardAvailability from "../components/CardAvailability";
import ContainerCards from "../components/ContainerCards";
import Hero from "../components/Hero";
import Contact from "../components/Contact"
import AboutTheTeacher from "../components/AboutTheTeacher";

function HomePage () {
  return (
    <div>
    <NavbarComplete />  
    <Hero />
    <br></br>
    <AboutTheTeacher />
    <br></br>
    <ContainerCards />
    <br></br>
    <CardAvailability />
    <br></br>
    <CarouselComplete />
    <Contact/>
    </div>
  )
}

export default HomePage;