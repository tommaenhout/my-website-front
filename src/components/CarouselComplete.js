import Carousel from 'react-bootstrap/Carousel'
import CarouselBackground from '../images/CarouselBackground.png'
import {textCarousel} from '../utils/text-general'

function CarouselComplete () {
  return (
    <section id = "reviews">
    <div className="text-center">

      <h1 className="display-4 text-center" >Reviews</h1>

    <Carousel fade variant="dark text-center">
      
    {textCarousel.map((review)=>{
          return(
    <Carousel.Item key={review.key} interval={300000}>
    <img
      className="d-block w-100"
      src={CarouselBackground} height="200" width="100"
      alt="First slide"
    />
    <Carousel.Caption key={review.key}>
      <h3 className='display-6'>{review.name} from {review.country}</h3>
      <p className="lead text-black"><strong className="strong">"</strong>{review.review}"</p>
    </Carousel.Caption>
  </Carousel.Item>
          )
      }
  )
}
</Carousel>
</div>
</section>
)}

export default CarouselComplete

