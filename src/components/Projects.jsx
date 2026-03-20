import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from './Projects.module.css'

// Magnetic 3D Card
function ParallaxCard({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useMotionTemplate`${mouseYSpring} * -12deg`,
        rotateY: useMotionTemplate`${mouseXSpring} * 12deg`,
      }}
      className={`card-3d ${className}`}
    >
      {children}
    </motion.div>
  )
}

const projects = [
  {
    title: 'Question Paper Setter System',
    description: 'Automated workflow for question bank management to final paper generation.',
    image: '/image/qpsimg.jpg',
    badge: 'Live',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://bitqps.rahuldrd.online/',
  },
  {
    title: 'Lalam – Interactive Kids Game',
    description: 'Intuitive PWA designed for children featuring engaging learning interactions.',
    image: '/image/game.jpg',
    badge: 'Winner 2024',
    tech: ['React', 'PWA', 'JavaScript'],
  },
  {
    title: 'AuraSutra',
    description: 'AI-powered Panchakarma patient management system with offline-first support.',
    image: '/image/aurasutraimg.jpg',
    badge: 'AI Powered',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    title: 'Gesture-Based UI',
    description: 'Revolutionary shopping experience using computer vision hand gestures.',
    image: '/image/handgesture.jpg',
    badge: 'Computer Vision',
    tech: ['Python', 'OpenCV', 'ML'],
  },
  {
    title: 'Voice Assistant',
    description: 'Intelligent assistant with NLP and WolframAlpha data integration.',
    image: '/image/voice.jpg',
    badge: 'NLP',
    tech: ['Python', 'NLTK', 'APIs'],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Deployments</div>
          <h2 className="section-title">Engineered <span>Systems</span></h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ParallaxCard className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.imageOverlay}>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className={styles.overlayBtn}>
                        <FiExternalLink size={18} /> INITIALIZE DEMO
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.badgePill}>{project.badge}</div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.tech}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
