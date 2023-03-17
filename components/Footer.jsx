import Link from 'next/link'; 

function Footer() {
  return (
    <div className='blue text-light flexy h-100 pt-5'>
        
        <Link className='link' href="https://github.com/j4rola"><a className='link'>Github</a></Link>
        <Link className='link' href="https://twitter.com/j4rola"><a className='link'>Twitter</a></Link>
        <h5 className='pt-2'>© 2023 JM Consulting Co</h5>
    </div>
  )
}

export default Footer