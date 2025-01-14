import React from 'react'
import Title from '../layouts/Title'
import { cara, realEstate, startP, skylark, virtualIR, bbms, } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { projects } from '../../constants/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {projects?.map((project,i)=>(
          <ProjectsCard key={i} {...project}/>
        ))}
      </div>
    </section>
  );
}

export default Projects