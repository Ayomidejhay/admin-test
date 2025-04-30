import React from 'react'
import { menu } from '../data'
import Link from 'next/link'
import Image from 'next/image'

function Menu() {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='flex flex-col gap-2.5 !mb-5' key={item.id}>
          <span className='!text-[12px] font-extralight text-soft uppercase'>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link href={listItem.url} className='flex items-center gap-2.5 !p-2.5 rounded-[5px] hover:bg-softBg ' key={listItem.id}>
              <Image src={listItem.icon} alt={listItem.title} width={20} height={20} className='icon'/>
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>  
          ))}
        </div>
      ))}
    </div>
    
  )
}

export default Menu