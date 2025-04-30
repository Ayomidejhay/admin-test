import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar w-[100%] !px-5 flex items-center justify-between'>
        <div className="logo flex items-center font-bold gap-2.5">
            <Image src='logo.svg' alt='logo' width={30} height={30}/>
            <span>lamadev</span>
        </div>
        <div className="icons flex items-center gap-5">
            <Image src='search.svg' alt='search' width={20} height={20} className='icon'/>
            <Image src='app.svg' alt='app' width={20} height={20} className='icon'/>
            <Image src='expand.svg' alt='expand' width={20} height={20} className='icon'/>
            <div className="relative">
                <Image src='notifications.svg' alt='notification' width={20} height={20} className='icon'/>
                <span className="bg-red-600 text-white w-4 h-4 rounded-[50%] absolute -top-2.5 -right-2.5 flex items-center justify-center text-[12px]">2</span>
            </div>
            <div className=" flex items-center gap-1.5">
                <Image src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='user' width={20} height={20} className='rounded-3xl object-cover w-[30px] h-[30px] icon'/>
                <span className="user-name">Jane</span>
            </div>
            <Image src='settings.svg' alt='settings' width={20} height={20} className='icon'/>
        </div>
    </div>
  )
}

export default Navbar