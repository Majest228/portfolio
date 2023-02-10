import Link from 'next/link'
import React from 'react'


const Header = () => {
    return (
        <header className=''>
            <div className='flex justify-between content-center items-center pt-pt-11'>
                <Link href='' className='font-normal text-fz-34 leading-lh-45  text-white '>ra1tsuya</Link>
                <nav className='pt-pt-7'>
                    <ul className='flex'>
                        <li className='pl-pl-16 pr-pr-16'>
                            <Link className='text-gray leading-lh-32 text-fz-20 hover:text-cyan' href='#home'>Home</Link>
                        </li>
                        <li className='pl-pl-16 pr-pr-16'>
                            <Link className='text-gray leading-lh-32 text-fz-20 hover:text-cyan' href='#about'>About</Link>
                        </li>
                        <li className='pl-pl-16 pr-pr-16'>
                            <Link className='text-gray leading-lh-32 text-fz-20 hover:text-cyan' href=''>Skills</Link>
                        </li>
                        <li className='pl-pl-16 pr-pr-16'>
                            <Link className='text-gray leading-lh-32 text-fz-20 hover:text-cyan' href=''>Portfolio</Link>
                        </li>
                        <li className='pl-pl-16 pr-pr-16'>
                            <Link className='text-gray leading-lh-32 text-fz-20 hover:text-cyan' href=''>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <button className='text-white leading-lh-32 text-fz-20 bg-bg-cyan py-py-10 px-px-24 mt-3 rounded-lg '>Resume</button>
            </div>
        </header>
    )
}

export default Header