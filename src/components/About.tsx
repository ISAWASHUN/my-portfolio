import { FaTwitter, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <h1 id='about' className='text-7xl mt-64 text-center'>About Me</h1>
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-16 px-4 md:space-x-8">
        <div className='mb-10 md:mb-0 flex-shrink-0'>
          <img src="/profile_logo.png" alt="ロゴ" className='h-auto w-52 mx-auto'/>
        </div>
        <div className="flex-grow">
          <p className="text-base text-gray-700 mb-4">
            私は大阪出身で、東京都内で医療系企業でエンジニアとして働いています。
            サービスを成長させることに情熱を注いでおり、ユーザーに価値を提供することに喜びを感じています。
          </p>
          <p className="text-base text-gray-700 mb-4">
            趣味は読書とスポーツ観戦で、阪神タイガースとリバプールFCのファンです。
          </p>
          <p className="text-base text-gray-700 mb-6">
            プロジェクトに貢献し、チームで協力して働くことを生き甲斐にしています。
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-7 mt-6">
        <a href="https://twitter.com/dosukoi_org" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
          <FaTwitter className="w-10 h-10" />
        </a>
        <a href="https://github.com/ISAWASHUN" target="_blank" rel="noopener noreferrer" className='text-black'>
          <FaGithub className="w-10 h-10" />
        </a>
        <a href="https://zenn.dev/isawa" target="_blank" rel="noopener noreferrer">
          <img src="/zenn.jpeg" alt="zenn" className='h-auto w-32'/>
        </a>
      </div>
    </>
  )
}

export default About;
