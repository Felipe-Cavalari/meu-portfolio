import { FaNodeJs, FaPython  } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { IoLogoJavascript } from "react-icons/io5";

const TAB_DATA = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className=' rounded-lg flex flex-col  items-start list-disc'>
          
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <IoLogoJavascript className="text-[#efdc5c] text-base md:text-2xl"/> JavaScript</li>
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <FaNodeJs className="text-[#5aa14b] text-base md:text-2xl"/>  Node.js</li>
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <TbBrandNextjs className="dark:text-white text-black text-base md:text-2xl transition duration-300"/>Nextjs</li>
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <FaPython className="text-[#477bab] text-base md:text-2xl"/> Python</li>
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <TbBrandDjango className="text-[#3aac7b] text-base md:text-2xl"/>Django</li>
          <li className='flex flex-row items-center justify-center gap-2 mb-2 font-medium text-black dark:text-slate-200 transition duration-300'> <FcLinux className="text-base md:text-2xl"/> Linux</li>
        </ul>
      )
    },
    {
      title: 'Experiência',
      id: 'experiencia',
      content: (
        <ul className='rounded-lg  flex flex-col  md:items-start'>
          <li>
            <div className=" py-2 px-2 rounded-lg flex flex-col gap-2 mb-2">
              <h2 className='text-xl font-bold text-black dark:text-slate-200'>Desenvolvedor Freelancer</h2>
              <span className='text-sm text-purple-800 font-semibold'>2021 - Atualmente</span>
              <p className='text-sm dark:text-slate-200 text-black font-medium text-justify'> Desenvolvo sites e aplicaões usando as tecnologias mais atuais do mercado.</p>
            </div>
          </li>
          <div className="w-full h-0.5 bg-purple-700 mb-4"></div>
          <li>
          






          </li>
        </ul>
      )
    },
    
    
  ]

export default TAB_DATA