import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link'; 


function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <div className='link' style={{cursor: 'pointer'}} onClick={handleShow}>
        Contact
      </div>

      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton> 
          <Modal.Title>Contact</Modal.Title> 
        </Modal.Header>
        <div className='flexy my-4'>
        <Modal.Body><Link href="mailto:jmfroula@gmail.com">jmfroula@gmail</Link></Modal.Body>
        <Modal.Body>203.707.4230</Modal.Body> 
        </div>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>    
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal