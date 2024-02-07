import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const ContactSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative' id='contato'>
         <div className='z-10'>
                <h5  className="text-xl font-bold text-white my-2"><span className='w-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700'>Vamos entrar em contato</span></h5>
                <p className='font-medium text-black dark:text-[#ADB7BE] mb-4 max-w-md text-justify'>
                    {" "}
                    Atualmente, estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma pergunta ou apenas quiser dizer oi, 
                    farei o meu melhor para responder!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={'github.com'} className='dark:text-white text-black  text-2xl'>
                        <FaGithub  />
                    </Link>

                    <Link href={'linkedin.com'} className='dark:text-white text-black text-2xl'>
                        <FaLinkedin  />
                    </Link>
                </div>
            </div>
        <div>
            <form className='flex flex-col gap-2'>
                <label htmlFor="email" className='dark:text-white text-black block mb-2 text-sm font-medium'>Seu email</label>
                <input type='email' id='email' required placeholder='john_doe@email.com' className='dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                <label htmlFor="assunto" className='dark:text-white text-black block mb-2 text-sm font-medium'>Assunto</label>
                <input type='text' id='assunto' placeholder='Adicione o titulo do assunto' className='dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
           
                <label htmlFor="mensagem" className='dark:text-white text-black block mb-2 text-sm font-medium'>Mensagem</label>
                <textarea type='' id='mensagem' placeholder='De um resumo sobre o que gostaria de conversar' className='dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                <div className="mt-6">
                    <button type='submit' className='bg-gradient-to-tr from-blue-500 to-purple-700 w-full py-2.5 rounded-lg text-white px-5 font-medium'> Enviar Mensagem </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactSection  