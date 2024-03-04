import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { DevopsData, backendData, frontendData, optionsFrontend, optionsBackend, optionsDevops } from '../data/data';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Skills = () => {
  return (
    <div className='mt-12 md:mt-48 px-4 md:px-0'>
      <h1 className='text-4xl md:text-7xl text-center mb-10 font-bold text-gray-800'>My Skills</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-12'>
        <div className="text-center">
          <div className="mb-4 w-100 h-100 inline-block">
            <Pie data={frontendData} options={optionsFrontend} />
          </div>
        </div>
        <div className="text-center">
          <div className="mb-4 w-100 h-100 inline-block">
            <Pie data={backendData} options={optionsBackend} />
          </div>
        </div>
        <div className="text-center">
          <div className="mb-4 w-100 h-100 inline-block">
            <Pie data={DevopsData} options={optionsDevops} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
