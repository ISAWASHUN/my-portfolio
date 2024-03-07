import { motion } from 'framer-motion';
import { FaTwitter, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        id='about' className='text-7xl mt-64 font-bold text-center'
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row max-w-4xl mx-auto mt-16 px-4 md:space-x-8"
      >
        <div className='mb-10 md:mb-0 flex-shrink-0'>
          <img src="/profile_logo.png" alt="ロゴ" className='h-auto w-52 mx-auto'/>
        </div>
        <div className="flex-grow">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base mb-4"
          >
            私は大阪出身で、東京都内で医療系企業でエンジニアとして働いています。
            サービスを成長させることに情熱を注いでおり、ユーザーに価値を提供することに喜びを感じています。
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base mb-4"
          >
            趣味は読書とスポーツ観戦で、阪神タイガースとリバプールFCのファンです。
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base mb-6"
          >
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-base"
          >
            私は新しい技術を学ぶことが好きで、最近はRustに興味があります。
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center items-center space-x-7 mt-6"
      >
        <a href="https://twitter.com/dosukoi_org" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
          <FaTwitter className="w-10 h-10" />
        </a>
        <a href="https://github.com/ISAWASHUN" target="_blank" rel="noopener noreferrer" className='text-black'>
          <FaGithub className="w-10 h-10" />
        </a>
        <a href="https://zenn.dev/isawa" target="_blank" rel="noopener noreferrer">
          <img src="/zenn.jpeg" alt="zenn" className='h-auto w-32'/>
        </a>
        <a href="https://qiita.com/dosukoi_org" target="_blank" rel="noopener noreferrer">
          <img src="/qiita.png" alt="qiita" className='h-auto w-16'/>
        </a>
      </motion.div>
    </>
  )
}

export default About;
