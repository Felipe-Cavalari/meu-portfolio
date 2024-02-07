import React from 'react'
import {motion} from 'framer-motion'

const TabButton = ({active, selectTab, children}) => {

  const buttonClasses = active ? 'dark:text-white text-purple-700 border-b border-purple-700 transition duration-300' : 'text-dark dark:text-gray-400 '

  return (
    <button onClick={selectTab}>
        <p className={`dark:text-slate-200 text-black mr-3 font-semibold   ${buttonClasses}`}>
        {children}
        
        </p>
        
    </button>
  )
}

export default TabButton