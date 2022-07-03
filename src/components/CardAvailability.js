import {Card, Button,Container} from 'react-bootstrap'


function CardAvailability () {
    return (
<Container  className="text-center justify-content-center">
<h1 className="display-4 text-center">Availability</h1>
<Card className="text-center bg-light" border="primary"> 
  <Card.Body>
    <Card.Title><h3 className='display-6'>Group classes for beginners are available now !!</h3></Card.Title>
    <Card.Text className="lead text-black">
        Classes are now available, for the 30th of August!!
        We offer online Dutch classes for beginners.
        The classes are in the weekend on Saturday and Sundays. A course of 2 hours is offered.
        The entire course has a duration of 3 months. 
        After the course the student will have a A1 level in Dutch. This implies that you will be able to communicate on a basic level.
        
    </Card.Text>
    <Button 
    variant = "secundary"
    size= "lg" 
    className="lead text-white">
    <span className="lead text-white">Make your reservation now</span>
        </Button>
  </Card.Body>
</Card>
</Container>
    )
}

export default CardAvailability;