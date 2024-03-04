import React from 'react'
import { WorksData } from '../data/data'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from "react-icons/fi";

type WorkerData = {
  id: number;
  title: string;
  img: string;
  link: string;
  github: string;
};

const Work = () => {
  return (
    <div>
      <section className="p-4">
        <div className="container mt-64 mx-auto">
          <h2 className="text-7xl text-center font-bold">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WorksData.map((item: WorkerData) => (
              <div key={item.id} className="bg-gray-100 p-4 rounded-lg flex flex-col mx-auto mt-16">
                <div className='mb-4'> {/* mb-4 provides some margin below the image */}
                  <img src={item.img} alt={item.title} className="h-64 w-full object-cover rounded-lg" />
                </div>
                <div className='flex-grow'>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3> {/* mb-2 provides some margin below the title */}
                  <div className="mb-4"> {/* mb-4 provides some margin below the links */}
                    <a href={item.link} target='_blank' className="text-blue-500" rel="noreferrer"><FiExternalLink className='w-10 h-10 inline'/></a>
                    <a href={item.github} className="ml-4"><FaGithub className="w-10 h-10 inline" /></a> {/* ml-4 adds margin to the left of the GitHub icon */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
