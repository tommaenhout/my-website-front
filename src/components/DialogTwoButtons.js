import {Modal, Button} from 'react-bootstrap'
import {Link} from  'react-router-dom'

function DialogTwoButtons (props) { 
    return ( 
    <>
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
    <Modal.Footer>
      <Button variant="light" onClick={props.handleClose}>
          {props.buttonTextSecundary}
      </Button>
      <Link to="/form" >
      <Button variant="primary" onClick={props.handleClose}>
          {props.buttonTextPrimary}
      </Button>
      </Link>
    </Modal.Footer>
  </Modal>
  </>
)
}

export default DialogTwoButtons