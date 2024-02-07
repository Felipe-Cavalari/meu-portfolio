'use client'
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

// Array para personalizar seus projetos
const projectsData = [
    {
      id: 1,
      title: "Nextjs 14 Portfolio Template",
      description: "Template de portfolio de desenvolvedor",
      image: "/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Felipe-Cavalari/Portfolio-model-template",
      previewUrl: "https://portfolio-model-template.vercel.app/",
    },
    {
      id: 2,
      title: "Ainda em construção",
      description: "Projeto está sendo desenvolvido",
      image: "/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Ainda em construção",
      description: "Projeto está sendo desenvolvido",
      image: "/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Ainda em construção",
      description: "Projeto está sendo prototipado",
      image: "/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Ainda em construção",
      description: "Projeto está sendo prototipado",
      image: "/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Ainda em construção",
      description: "Projeto está sendo desenhado",
      image: "/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];


const ProjectsSection = () => {
  
  const [tag, setTag] = useState('All')

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )


  return (
    <section className='' id='projetos'>
        <h2 className='text-center text-4xl font-bold text-white mt-8 md:mt-32 mb-8 md:mb-12'><span className='w-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700'> Meus Projetos </span></h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
            onClick={handleTagChange}
             name="All"
             isSelected={tag === "All"} 
               />

            <ProjectTag 
            onClick={handleTagChange}
             name="Web"
             isSelected={tag === "Web"} 
               />

            <ProjectTag 
            onClick={handleTagChange}
             name="Mobile"
             isSelected={tag === "Mobile"} 
               />
               

        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => <ProjectCard 
             key={project.id}
             title={project.title} 
             description={project.description} 
             imgUrl={project.image} 
             tags={project}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
             />)}
        </div>

    </section>
  )
}

export default ProjectsSection