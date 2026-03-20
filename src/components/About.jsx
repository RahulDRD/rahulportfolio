import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import codingImg from '../assets/coding-setup.jpg'
import styles from './About.module.css'

const stats = [
  { value: '3+', label: 'Hackathons Won' },
  { value: '5+', label: 'Projects Built' },
  { value: '1', label: 'Internship' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who I <span>Am</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Image */}
          <motion.div
            className={styles.imageWrap}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.imageBorder}>
              <img src={codingImg} alt="Rahul at work" className={styles.image} />
            </div>
            <div className={styles.imageGlow} />
          </motion.div>

          {/* Text */}
          <motion.div
            className={styles.textCol}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.para}>
              I'm a passionate technologist currently pursuing my{' '}
              <span className={styles.highlight}>Master of Computer Applications</span> at
              Bhilai Institute of Technology, Durg. With a strong foundation in programming
              and a creative edge in multimedia production, I bridge the gap between
              technical innovation and artistic expression.
            </p>
            <p className={styles.para}>
              My journey includes hands-on experience at{' '}
              <span className={styles.highlight}>Glistara Software Solutions</span>, where I
              built gesture-based interfaces using computer vision — and recognition at
              prestigious hackathons including winning at{' '}
              <span className={styles.highlight}>IIT Bhilai's Innovation Hackathon 2024</span>{' '}
              and <span className={styles.highlight}>HackBios 2025</span>.
            </p>
            <p className={styles.para}>
              Beyond code, I'm a multimedia artist skilled in video editing, image
              manipulation, sound engineering, and AI prompt design — bringing a unique
              creative perspective to every project.
            </p>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                className={styles.resumeBtn}
              >
                View Certificates →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
