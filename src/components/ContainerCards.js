import CardTypeClass from "./CardTypeClass";
import { Container,Row,Col } from "react-bootstrap";
import {cardTypeClassesIndividual, cardTypeClassesGroup,DialogOneButtonIndivual,DialogTwoButtonsGroup} from '../utils/text-english'
import { AiOutlineUser, AiOutlineTeam} from "react-icons/ai";
import DialogOneButton from './DialogOneButton'
import { useState } from "react"
import DialogTwoButtons from "./DialogTwoButtons"


function ContainerCards() {

  // useState dialog individual classes
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useState dialog group classes
  const [showGroup, setShowGroup] = useState(false);
  const handleCloseGroup = () => setShowGroup(false);
  const handleShowGroup = () => setShowGroup(true);


  return (
    <section id="classes">
    <Container className="text-center">
      <h1 className="display-4 text-center ">Classes</h1>
      <DialogOneButton 
      show = {show}
      handleClose={handleClose}
      title = {DialogOneButtonIndivual.title}
      body = {DialogOneButtonIndivual.body}
      buttonText = {DialogOneButtonIndivual.buttonText}
      icon = {DialogOneButtonIndivual.icon}
      />
      <DialogTwoButtons
      show = {showGroup}
      handleClose={handleCloseGroup}
      title = {DialogTwoButtonsGroup.title}
      body = {DialogTwoButtonsGroup.body}
      buttonTextPrimary = {DialogTwoButtonsGroup.buttonTextPrimary}
      buttonTextSecundary = {DialogTwoButtonsGroup.buttonTextSecundary}
      icon = {DialogTwoButtonsGroup.icon}
      />
        <Row className="text-center mx-auto">
            <Col md ={6} xm = {12}>
              <h1><AiOutlineUser /></h1>
                <CardTypeClass 
                image= {AiOutlineUser}
                title={cardTypeClassesIndividual.title}
                body= {cardTypeClassesIndividual.body}
                botton= {cardTypeClassesIndividual.buttonText}
                showDialog={handleShow}/>
            </Col>
            <Col md ={6} xm = {12}>
               <h1><AiOutlineTeam /></h1>
                <CardTypeClass
                image= {AiOutlineTeam}
                title={cardTypeClassesGroup.title}
                body= {cardTypeClassesGroup.body}
                botton= {cardTypeClassesGroup.buttonText}
                showDialog={handleShowGroup}/>
            </Col>
        </Row>
        
        
    </Container>
    </section>
  );
}

export default ContainerCards;

