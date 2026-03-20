import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['React', 'JavaScript', 'Python', 'C++', 'HTML5', 'CSS3', 'SQL', 'MongoDB'],
  },
  {
    category: 'Frameworks & Tools',
    icon: '⚙️',
    skills: ['Next.js', 'Vite', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Linux', 'OpenCV'],
  },
  {
    category: 'Multimedia & Creative',
    icon: '🎨',
    skills: ['Video Editing', 'Image Manipulation', 'Sound Engineering', 'AI Prompt Design', 'Premiere Pro', 'After Effects'],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Skills</div>
          <h2 className="section-title">What I <span>Work With</span></h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} className={`card ${styles.card}`} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.category}>{group.category}</h3>
              </div>
              <motion.div
                className={styles.tags}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                {group.skills.map((skill) => (
                  <motion.span key={skill} className={styles.tag} variants={tagVariants}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
