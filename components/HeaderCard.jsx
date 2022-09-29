import Card from 'react-bootstrap/Card'; 

function HeaderCard() { 
  return ( 
    <Card className='my-6 mx-6 border' style={{ width: '18rem' }}> 
      <Card.Body className='d-flex flex-column align-items-center p-4'> 
        <Card.Title>Full Stack Web Solutions</Card.Title>   
        <Card.Text className='text-center'> 
          I specialize in building solutions for small businesses that help them run more efficiently, and reach more people.
        </Card.Text> 
        <Card.Link href="mailto:jmfroula@gmail.com">Hire Me</Card.Link> 
        
      </Card.Body>   
    </Card> 
  );
}

export default HeaderCard;