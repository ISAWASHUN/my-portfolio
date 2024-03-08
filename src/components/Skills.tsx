import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { DevopsData, backendData, frontendData, optionsFrontend, optionsBackend, optionsDevops } from '../data/data';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Skills = () => {
  return (
    <div className='mt-12 md:mt-48 px-4 md:px-0'>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        id='about' className='text-7xl mt-32 text-center font-bold '
      >
        My Skills
      </motion.h1>
      <div className='flex flex-col md:flex-row mt-24 items-center justify-center gap-12 md:gap-12'>
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
