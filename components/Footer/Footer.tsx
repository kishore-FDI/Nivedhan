import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='flex bg-black text-blue-50 h-[3rem] justify-between px-5 items-center font-general'>
        <div className='flex gap-5'>
            <a href="" className='flex gap-2 items-center'><FaWhatsapp /> Whatsapp</a><a href="" className='flex gap-2 items-center'><FaFacebook /> Facebook</a><a href="" className='flex gap-2 items-center'><FaInstagram /> Instagram</a><a href="" className='flex gap-2 items-center'><FaGoogle /> Gmail</a>
        </div>
        <div> <p>Copyright &copy; 2025 All Rights Reserved</p> </div>
    </footer>
  )
}

export default Footer
