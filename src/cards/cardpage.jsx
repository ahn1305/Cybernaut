import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './cardpage.css'
import img from '../images/Rectangle 30.png'
export default function cardpage() {
  return (
    <div className="cp">
        <h1>What we Offer</h1>
        <div className="cards">


        <Card className='card tech-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Tech Pack</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" style={{borderRadius:'15px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card className='card softskill-card' style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Soft Skill Pack</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" style={{borderRadius:'15px'}}>Go somewhere</Button>
        <Card.Img variant="top" src={img} />
      </Card.Body>
    </Card>
    <Card className='card junior-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Junior Pack</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" style={{borderRadius:'15px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card designer-card' style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Designer Pack</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" style={{borderRadius:'15px'}}>Go somewhere</Button>
        <Card.Img variant="top" src={img} />
      </Card.Body>
    </Card>
        </div>
        <br />
        <center><h4>Prepare yourself for the reality <br /> #fundlebundle</h4></center>
    </div>
  )
}
