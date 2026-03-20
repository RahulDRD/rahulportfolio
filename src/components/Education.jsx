import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Education.module.css'

const educations = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Bhilai Institute of Technology, Durg',
    period: '2024 – 2026',
    status: 'In Progress',
    icon: '',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shri Shankaracharya Professional University',
    period: '2021 – 2024',
    status: 'Completed',
    courses: 'C, C++, Python, Data Structures, Software Engineering, OS (Linux/Unix), DBMS',
    icon: '',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic <span>Background</span></h2>
        </motion.div>

        <div className={styles.list}>
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={styles.info}>
                <div className={styles.topRow}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <span className={`${styles.status} ${edu.status === 'In Progress' ? styles.active : styles.done}`}>
                    {edu.status}
                  </span>
                </div>
                <div className={styles.institution}>{edu.institution}</div>
                <div className={styles.period}>{edu.period}</div>
                {edu.courses && (
                  <div className={styles.courses}>
                    <strong>Courses:</strong> {edu.courses}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
