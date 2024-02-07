'use client'
import React, { useState } from 'react' 
import Link from 'next/link'
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import Navlinks from '@/components/Navlinks';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import {motion} from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';




const navLinks = [
    {
        title: 'Sobre mim',
        path: '#sobre_mim',
    },
    {
        title: 'Projetos',
        path: '#projetos',
    },
    {
        title: 'Contato',
        path: '#contato',
    }
  ]


const Navbar = () => {

  return (
    <nav     
    className='fixed top-0 left-0 right-0 z-10 bg-slate-200  dark:bg-[#121212] bg-opacity-90 transition duration-300'>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-4">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            >
                <Link href={'/'} className={`text-slate-200 text-3xl font-extrabold `}>
                    <Image
                        src='/logo.png'
                        width={50}
                        height={0}
                        alt='Logo'
                    />
                </Link>
            </motion.div>
            <div className="mobile-menu block md:hidden">
                <Sheet >
                    <SheetTrigger asChild>
                        <Button onClick={()=> console.log(localStorage.getItem('theme'))} variant="outline" className='dark:bg-[#121212] bg-slate-200 text-black dark:text-slate-200 items-center border rounded border-black dark:border-slate-200'><IoMdMenu className='h-5 w-5'/></Button>
                    </SheetTrigger>
                    <SheetContent className='dark:bg-[#121212] bg-slate-200 dark:text-slate-200 text-black'>
                        <ul className='flex flex-col '>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}                           
                                >
                                    <Navlinks href={link.path} title={link.title} />
                                </li>
                            )) 
                                
                        }
                                <li className='pt-10'><ThemeToggle/></li>

                    </ul>
                    </SheetContent>
                </Sheet>

                
            </div>
            <div className="menu hidden md:block " id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-12'>
                    {
                        navLinks.map((link, index) => (
                            <motion.li 
                            key={index}
                            initial={{opacity:0, y:-25}}
                            animate={{opacity: 1, y:0}}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: 0.3 + index * 0.1
                            }}
                            >
                                <Navlinks href={link.path} title={link.title} />
                            </motion.li>
                        )) 
                    }
                   

                </ul>
            </div>
            <motion.div 
            initial={{opacity:0, y:-25}}
            animate={{opacity: 1, y:0}}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.5
            }}
            className='hidden  md:block'
            >
                <ThemeToggle/>
            </motion.div>
        </div>
    </nav>
  )
}

export default Navbar;