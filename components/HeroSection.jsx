'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import {motion} from "framer-motion"
import { Button} from './ui/button';



function HeroSection() {

  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      ease: "easeInOut",
      delay: 0.7
    }}
    className='h-screen md:flex md:flex-col md:justify-center'>
        <motion.div className='grid grid-cols-1 sm:grid-cols-12 '>
           <div className="col-span-8 place-self-center  sm:text-left">
                <h1 className='text-white pb-6 text-4xl lg:text-5xl font-extrabold'>
                    
                    <span className='w-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700'> 
                      <TypeAnimation
                            sequence={[
                                1500,
                                'Olá sou Felipe Cavalari',
                                3000, 
                                'Seja bem vindo ao meu Portfolio',
                                3000,
                                
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                      </span>
                </h1>

                <p className='text-black dark:text-[#ADB7BE] text-base sm:text-lg lg:text-xl pb-6'>
                  Desenvolvedor de Software especializado no mercado financeiro
                </p>

                <div className="flex flex-row gap-10">
                    <Button className='px-8 py-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700' > <Link className='text-slate-200' href={'#contato'}>Me contrate</Link> </Button>
                    <Button className='px-8 py-6 rounded-full bg-blue-600 dark:bg-[#181818] border hover:bg-purple-800 dark:hover:bg-[#242424] transition duration-300'><Link className='text-slate-200' href={'/'} target="_blank">Download CV</Link></Button>
                    
                </div>

           </div>

           
           <div className="col-span-4 place-self-center mt-16 lg:mt-0">
                <div className="rounded-full bg-blue-600 dark:bg-gray-800 w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative transition duration-300">
                    <Image 
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    src='/avatar_quant.jpg'
                    alt='Hero Image'
                    width={400}
                    height={400}
                />
               
                </div>
           </div>


        </motion.div>

        
    </motion.section>
  )
}

export default HeroSection