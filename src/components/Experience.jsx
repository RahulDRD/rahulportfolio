import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Glistara Software Solutions',
    period: 'Jun 2024 – Aug 2024',
    location: 'Bhilai, Chhattisgarh',
    points: [
      'Learned and applied Python computer vision techniques to design and build a hand gesture recognition program.',
      'Implemented image processing, feature extraction, and basic machine learning concepts using OpenCV.',
      'Developed an innovative gesture-based shopping interface, enabling contactless product navigation.',
    ],
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Image Processing'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={styles.dot} />
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className={styles.techRow}>
                  {exp.tech.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
