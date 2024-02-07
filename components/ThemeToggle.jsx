'use client'
import { useEffect, useState } from "react";
import {FaMoon} from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'
import {motion} from 'framer-motion'


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(()=> {
        const theme = localStorage.getItem('theme')
        if (theme === "dark") setDarkMode(true)
    },[])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
  return (
    <div className={`relative w-16 h-8 flex items-center dark:bg-gray-700 bg-blue-600 cursor-pointer rounded-full p-1`}
    onClick={() => {
        setDarkMode(!darkMode)}}>

        <FaMoon className="text-white" size={18}/>
        <motion.div layout transition={spring} className={`absolute bg-white dark:bg-slate-200 rounded-full w-6 h-6  ${darkMode ? "left-1" : "right-1"}`}></motion.div>
        <BsSunFill className="ml-auto text-slate-200"/>
    </div>
    
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default ThemeToggle;