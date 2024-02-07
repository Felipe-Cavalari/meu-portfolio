'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import TAB_DATA from './TabData'




const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [ isPending, startTransition] = useTransition();

  //Função para mudar as tabs de sobre mim
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='' id='sobre_mim'>
        <div className="text-white">
            <div className="md:grid md:grid-cols-2 gap-9 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
              <Image
                className='rounded-3xl ' 
                src='/about_image2.jpg'
                width={500}
                height={500}
                alt='about me image'
              />
              <div className="mt-4 md:mt-0  flex flex-col h-full">

                <h2 className='text-4xl font-bold mb-4'><span className='w-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700'>Sobre Mim</span></h2>
                <p className='text-base  text-justify font-semibold dark:text-slate-200 text-black transition duration-300' >

                Profissional especializado em desenvolvimento full stack, domino tecnologias como Next.js, Python e SQL para criar soluções robustas e eficientes. 
                Minha experiência abrange a concepção e implementação de sistemas inovadores, garantindo funcionalidades excepcionais e desempenho otimizado. 
                Comprometido com a entrega de projetos de alta qualidade , busco constantemente atualizações para permanecer na vanguarda das tendências tecnológicas

                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton
                    selectTab = {() => handleTabChange('skills')}
                    active = {tab === 'skills'}
                  >
                    {" "}
                    Conhecimentos{""}
                  </TabButton>

                  <TabButton
                    selectTab = {() => handleTabChange('experiencia')}
                    active = {tab === 'experiencia'}
                  >
                    {" "}
                    Experiência{" "}
                  </TabButton>

                
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection