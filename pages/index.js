import axios from "axios"

import { useEffect, useState } from 'react'; 
import Head from 'next/head'; 
import NavBar from '../components/NavBar'; 
import Skills from '../components/Skills'; 
import Header from '../components/Header'; 
import { Fade } from '@mui/material'; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import HeaderCard from '../components/HeaderCard';
import Projects from '../components/Projects';
import Button from 'react-bootstrap/Button';
import { GiPineapple } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {    

  async function getData() {
    const data = await axios.get(URL)
    console.log(data)
  }

  getData()

  // const getIp = async () => {
    
  //   const ip = await axios.get('https://api.ipdata.co/?api-key=086f6229233c6b9511098c344b1594ec8f4dd4543448980e004b8518')
  //   const address = ip.data.ip  
  //   console.log(ip) 

  //   //axios.post('https://www.joefroula.dev/api/send-message', {ip: address, city: ip.data})

  // }  

  

  // useEffect(() => {
    
  //   fetch('https://api.ipdata.co/?api-key=086f6229233c6b9511098c344b1594ec8f4dd4543448980e004b8518')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     })
    
  //     setData(data)
  // }, [])


  const handleText = async () => {  
    const data = await axios.get(`https://api.ipdata.co/?api-key=${process.env.NEXT_PUBLIC_IP_KEY}`) 
    console.log(data) 
    try {
      const res = await axios.post('/api/send-message', data)
      return res
    } catch (error) {
      console.log(error)
    }

  }
    
  handleText()
  //getIp() 

  return (
    <div> 
      <Head> 
        <title>Joe Froula</title> 
        <meta name="description" content="Generated by create next app" /> 
      </Head> 
      
      <NavBar></NavBar>  

      <Header></Header>


      <div className='ghost-y-100'></div>

      <section name='projects' className='d-flex flex-column justify-center align-items-center p-3'>  
        <div className='d-flex flex-column flex-sm-row justify-center align-items-center'>  

          <Projects></Projects>     
  
        </div> 
      </section>

      <div className='ghost-y-100'></div>

      <section>
        <Skills></Skills>
      </section>

      <div className='ghost-y-100'></div>

    </div> 
  )  
}
