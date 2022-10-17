import { Fade } from '@mui/material'; 
import Link from 'next/link'; 
import Button from 'react-bootstrap/Button';
import { GiPineapple } from "react-icons/gi";


function Header() {
  return (
    <>
    <section name='video' className='d-none d-md-flex flex-column justify-content-center align-items-center vid-container'> 

        <div className='w-100' dangerouslySetInnerHTML={{ __html: `
            <video class='video' src='/cover-vid2.mp4' loop muted autoplay playsinline>
            
            </video>  
        `}}>
        </div> 

        <Fade in timeout={{ enter: 3000 }}>  
            <div className='custom-card flexy'>  
    
            <h1 className='text-blue text-center'>  
            Full Stack Web Solutions
            </h1>
            <p className='text-center'>I specialize in building solutions for small businesses that help them run more efficiently, and reach more people.</p>
            <Link href="#projects"><Button className='my-3 btn-success'>My Projects</Button></Link>
            <Link href="mailto:jmfroula@gmail.com"><Button className='btn-primary'>Hire Me</Button></Link>
    
            </div>
        </Fade>

    </section> 

    <div className='flexy'>   

        <Fade in timeout={{ enter: 3000 }}>
            <div className='flexy small-custom-card d-md-none'>     
    
                <GiPineapple className='pineapple text-blue mb-2 mt-2' size={75}></GiPineapple>
    
    
        
                <h1 className='my-4 text-blue text-center'>    
                Full Stack Web Solutions  
                </h1>
                <p className='text-center'>I specialize in building solutions for small businesses that help them run more efficiently, and reach more people.</p>
                <Link href="#projects"><Button className='my-3 btn-success'>My Projects</Button></Link>
                <Link href="mailto:jmfroula@gmail.com"><Button className='btn-primary'>Hire Me</Button></Link>
        
            </div>  
        </Fade> 
    </div>
    </>
  )
}

export default Header