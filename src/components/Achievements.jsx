import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useInView } from 'framer-motion'
import styles from './Achievements.module.css'

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

const mainAchievements = [
  {
    title: 'Winner - HackBios 2025',
    venue: 'SSTC, Bhilai',
    description: 'Won a health-focused application hackathon by building an innovative solution showcasing strong problem-solving and full-stack development skills.',
    tech: ['Next.js', 'Tailwind CSS', 'Zego', 'PostgreSQL'],
    image: '/image/HackBios_winned.jpg',
  },
  {
    title: 'Winner - IIT Bhilai Innovation Hackathon 2024',
    venue: 'Youth Conclave 2024, IIT Bhilai',
    description: 'Secured winning position at ANRF (SERB) – INAE Innovation Hackathon held at IIT Bhilai. Developed "Lalam" — an interactive children\'s PWA.',
    tech: ['React', 'JavaScript', 'PWA'],
    image: '/image/iitbhilai.jpg',
  },
]

const otherAchievements = [
  { event: 'Hack-a-Sol 2025', venue: 'IIIT Raipur' },
  { event: 'HackJNU 4.0', venue: 'JNU, New Delhi' },
  { event: 'HackIndia 2024', venue: 'Rungta, Bhilai' },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Awards &amp; <span>Recognition</span></h2>
        </motion.div>

        {/* Main wins */}
        <div className={styles.wins}>
          {mainAchievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <ParallaxCard className={styles.winCard}>
                <div className={styles.winImage}>
                  <img src={ach.image} alt={ach.title} />
                  <div className={styles.winBadge}>Winner</div>
                </div>
                <div className={styles.winContent}>
                  <h3 className={styles.winTitle}>{ach.title}</h3>
                  <div className={styles.winVenue}>{ach.venue}</div>
                  <p className={styles.winDesc}>{ach.description}</p>
                  <div className={styles.techRow}>
                    {ach.tech.map((t) => (
                      <span key={t} className={styles.tech}>{t}</span>
                    ))}
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>

        {/* Participant badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={styles.participantTitle}>Additional Missions</h3>
          <div className={styles.participantGrid}>
            {otherAchievements.map((a) => (
              <ParallaxCard key={a.event} className={styles.participantCard}>
                <div>
                  <div className={styles.partEvent}>{a.event}</div>
                  <div className={styles.partVenue}>{a.venue}</div>
                </div>
              </ParallaxCard>
            ))}
            <ParallaxCard className={styles.participantCard}>
              <div>
                <div className={styles.partEvent}>Certificates</div>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certLink}
                >
                  DECRYPT ARCHIVE →
                </a>
              </div>
            </ParallaxCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
