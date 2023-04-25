
import Link from 'next/link'; 

function Footer() {
  return (
    <div className='blue text-light flexy h-100 pt-5'>
        
        <Link className='link' href="https://github.com/j4rola">Github</Link>
        <Link className='link' href="https://twitter.com/j4rola">Twitter</Link>
        <h5 className='pt-5'>© 2023 JM Consulting Co</h5>
    </div>
  )
}

export default Footer