import {Card, Button} from 'react-bootstrap'

function CardTypeClass (props) {
 
    return (
  
    <Card
      bg="light"
      text='black'
      border = 'primary'
    
      className="text-center justify-content-center">
      <Card.Body>
        <Card.Title className="display-6 text-center"> {props.title} </Card.Title>
        <Card.Text className="lead text-black">
         {props.body}
        </Card.Text>
        <Button
         variant ="secundary"
         className='btn btn-lg'
         onClick={props.showDialog}>
            <span className="lead text-white">{props.botton}</span>
        </Button>
      </Card.Body>
    </Card>
  
    )
}

export default CardTypeClass;