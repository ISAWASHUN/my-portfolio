import React from 'react'
import { motion } from 'framer-motion'; // Framer Motion をインポート
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
        <div className="container mt-32 mx-auto">
          <h2 className="text-7xl text-center font-bold">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {WorksData.map((item: WorkerData) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.75 }} // 初期状態
                animate={{ opacity: 1, scale: 1 }} // アニメーション後の状態
                transition={{ duration: 0.5 }} // アニメーションの時間
                className="bg-gray-300 w-80 p-4 rounded-lg flex flex-col mx-auto mt-16"
              >
                <div className='mb-4'>
                  <img src={item.img} alt={item.title} className="h-64 w-full object-cover rounded-lg" />
                </div>
                <div className='flex-grow'>
                  <h3 className="text-2xl text-center font-bold mb-2">{item.title}</h3>
                  <div className="mb-4 flex justify-center">
                    <a href={item.link} target='_blank' className="text-blue-500" rel="noreferrer">
                      <FiExternalLink className='w-10 h-10 inline'/>
                    </a>
                    <a href={item.github} className="ml-4">
                      <FaGithub className="w-10 h-10 inline" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
