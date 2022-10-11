import Head from 'next/head'; 
import NavBar from '../components/NavBar'; 
import HeaderCard from '../components/HeaderCard';
import Projects from '../components/Projects'; 

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {    
  return (
    <div> 
      <Head> 
        <title>Joe Froula</title> 
        <meta name="description" content="Generated by create next app" /> 
      </Head> 
      <NavBar></NavBar>  
      <section name='video' className='d-flex flex-column justify-content-center align-items-center'> 

        <div className='w-100' dangerouslySetInnerHTML={{ __html: `
            <video class='video' src='/covervid.mp4' loop muted autoplay playsinline>
              <h1 class='video-text'>TEST</h1>
            </video>  
          `}}>
        </div> 

      </section> 

      <div className='ghost-y-100'></div>

      <section name='header' className='d-flex flex-column justify-content-center align-items-center p-3'> 
        <div className='w-100 d-flex flex-column flex-md-row justify-content-around align-items-center px-5'> 
          
          <img src="https://img.icons8.com/color/200/000000/pixar-lamp-2.png"/>
          <div className='flexy'></div> 
          <HeaderCard/>
          <img className='d-none d-lg-block ms-5' src="https://img.icons8.com/color/200/000000/pixar-lamp.png"/>
        </div> 
      </section> 

      

      <div className='ghost-y-100'></div>

      <section name='projects' className='d-flex flex-column justify-center align-items-center p-3'> 
        <div className='d-flex flex-column flex-sm-row justify-center align-items-center'> 

          <Projects></Projects>     
          
        </div> 
      </section>

    </div> 
  )
}
