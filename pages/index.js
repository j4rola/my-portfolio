import Head from 'next/head'; 
import NavBar from '../components/NavBar'; 
import { Fade } from '@mui/material'; 
import Link from 'next/link'; 
import HeaderCard from '../components/HeaderCard';
import Projects from '../components/Projects';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {    
  return (
    <div> 
      <Head> 
        <title>Joe Froula</title> 
        <meta name="description" content="Generated by create next app" /> 
      </Head> 
      <NavBar></NavBar>  

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

      <div className='flexy my-5'>
        <div className='flexy small-custom-card d-md-none my-5'>
              
          <h1 className='text-blue text-center'>
            Full Stack Web Solutions
          </h1>
          <p className='text-center'>I specialize in building solutions for small businesses that help them run more efficiently, and reach more people.</p>
          <Link href="#projects"><Button className='my-3 btn-success'>My Projects</Button></Link>
          <Link href="mailto:jmfroula@gmail.com"><Button className='btn-primary'>Hire Me</Button></Link>
              
        </div>
      </div>


      <div className='ghost-y-100'></div>

      <section name='projects' className='d-flex flex-column justify-center align-items-center p-3'> 
        <div className='d-flex flex-column flex-sm-row justify-center align-items-center'> 

          <Projects></Projects>     
          
        </div> 
      </section>

    </div> 
  )
}
