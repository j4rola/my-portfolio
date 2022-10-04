import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'; 



function Projects() {
  return (
    <div id='projects' className='flexy py-5 gray rounded-1' style={{ width: '97vw'  }}>
        <Card className='my-5'>  
            <Card.Text className='text-center'> 
                <h2 className='text-blue p-4 '>{'Projects  </>'}</h2>  
            </Card.Text> 
        </Card>
        <div className=' w-100 d-flex flex-column flex-lg-row flex-nowrap justify-content-around align-items-center my-5'>
            <Card className='flexy flex-nowrap m-3 py-2' style={{ width: '20rem', height: '20rem'  }}> 
                <Card.Body className='flexy flex-nowrap p-4 m-4'> 

                    <Card.Title className='text-center'>Crowdsourcing Platform</Card.Title>   
                    <Card.Text className='text-center'> 
                        A platform for funding business ideas built using the MERN stack.
                    </Card.Text>   
                    
                    <div className='flexy flex-nowrap'>  
                        <Button  className='btn-primary my-2'><Link href="https://gorgeous-smakager-5d3cdf.netlify.app/">Check it out</Link></Button>
                    </div>
                    
                </Card.Body> 
            </Card> 

            <Card className='flexy flex-nowrap m-3 mx-5 py-2' style={{ width: '20rem', height: '20rem' }}> 
                <Card.Body className='flexy flex-nowrap p-4 m-4'> 

                    <Card.Title className='text-center'>Puppy Website</Card.Title>    
                    <Card.Text className='text-center'>   
                        A website for selling pure-bred golden doodle puppies. Built with Next.js for optimum SEO capabilities.
                    </Card.Text>   
                        <div className='flexy flex-nowrap'>
                            <Button className='d-flex flex-row btn-primary my-2 text-inline'>
                                <Link href="https://www.supercutedoodles.com/">Check it out</Link>
                            </Button>  
                        </div> 
                </Card.Body> 
            </Card> 

            <Card className='flexy flex-nowrap m-3 py-2' style={{ width: '20rem', height: '20rem' }}> 
                <Card.Body className='flexy flex-nowrap p-4 m-4'> 

                    <Card.Title>Wordle Clone</Card.Title>    
                    <Card.Text className='text-center'>   
                        A practice arena for your favorite 5-letter word game.
                    </Card.Text>   
                    
                    <div className='flexy flex-nowrap'>  
                        <Button className='btn-primary my-2'> 
                        <Link href="https://wordle-j4rola.vercel.app/">Check it out</Link>
                        </Button>  
                        
                    </div>
                    
                </Card.Body> 
            </Card> 
        </div>
        
    </div>
  )
}

export default Projects