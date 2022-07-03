import LogoFull from '../images/Logo - English.png'
import {Image} from 'react-bootstrap'
function Hero () {
    return (
    <section id="section-hero" className="text-center text-white d-flex justify-content-center align-items-center py-5">
    
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Image className="img-fluid" src={LogoFull}></Image>
            <br></br>
            <br></br>
            <br></br>
            <p className="display-4 text-black">Online Dutch classes</p>
            <br></br>
            <p className="lead text-black">Individual or in group</p>
            <p className="lead text-black"></p>
           <br></br>
            
       
            <a href="#classes" className="btn btn-lg btn-primary text-white"><i className="" aria-hidden="true"></i>More info </a>
        
        </div>
    </section>
    )
}

export default Hero;