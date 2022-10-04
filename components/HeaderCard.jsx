import Card from 'react-bootstrap/Card'; 
import { Fade } from '@mui/material'; 
import Link from 'next/link'; 


function HeaderCard() { 
  return ( 
    <Fade in>
      <Card className='my-6 mx-6 text-blue p-5' style={{ width: '25rem' }}> 
        <Card.Body className='d-flex flex-column align-items-center p-4'> 
          <Card.Title><h2 className='text-center'>Full Stack Web Solutions</h2></Card.Title>   
          <Card.Text className='text-center'> 
            I specialize in building solutions for small businesses that help them run more efficiently, and reach more people.
          </Card.Text> 
          <Link href="mailto:jmfroula@gmail.com">Hire Me</Link> 
          
        </Card.Body>   
      </Card> 
    </Fade> 
  );
}

export default HeaderCard;