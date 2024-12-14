import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { MdChildCare } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';

const TimeLine = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
        className='text-7xl mt-48 mb-32 text-center font-bold'
      >
        My TimeLine
      </motion.h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2000 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdChildCare />}
        >
          <h3 className="vertical-timeline-element-title">生誕</h3>
          <p>
            2000年大阪に爆誕
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoMdFootball />}
        >
          <h3 className="vertical-timeline-element-title">サッカー</h3>
          <p>
            高校のインターハイ予選でチームで、サッカーメディアのゲキサカに取り上げられる
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">大学進学</h3>
          <p>
            行動経済学を専攻していました。初めてプログラムを書いたのは大学2年生の時でした。
            統計学の授業でした。
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 -"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">社会人</h3>
          <p>
            M3 Carrerでフルスタックエンジニアとして勤務
            Ruby on Rails, Vue, AWSなどを使って転職サイトや採用支援のSassを作成
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine;
