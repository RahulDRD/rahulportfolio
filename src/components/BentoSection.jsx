import { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import styles from './BentoSection.module.css'

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
        rotateX: useMotionTemplate`${mouseYSpring} * -10deg`,
        rotateY: useMotionTemplate`${mouseXSpring} * 10deg`,
      }}
      className={`card-3d ${className}`}
    >
      {children}
    </motion.div>
  )
}

const skills = ['React', 'Next.js', 'Python', 'OpenCV', 'C++', 'Tailwind CSS', 'PostgreSQL', 'JavaScript', 'SQL']
const creative = ['Video Editing', 'Sound Engineering', 'AI Prompt Design', 'Premiere Pro', 'After Effects']

export default function BentoSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Identity Overview</div>
          <h2 className="section-title">The <span>Core Architecture</span></h2>
        </div>

        <div className={styles.bentoGrid}>
          
          {/* Main Bio Card */}
          <ParallaxCard className={`${styles.bentoItem} ${styles.bioCard}`}>
            <h3 className={styles.cardTitle}>Initialization File</h3>
            <p className={styles.bioText}>
              I'm an MCA student at <span className={styles.highlight}>Bhilai Institute of Technology</span> bridging the gap between deep technical logic and artistic multimedia expression.
            </p>
            <p className={styles.bioText}>
              My journey involves building gesture-based AI shopping interfaces at <span className={styles.highlight}>Glistara Software Solutions</span> and securing <span className={styles.highlightAccent}>Winner</span> titles at prestigious hackathons like IIT Bhilai & HackBios 2025.
            </p>
          </ParallaxCard>

          {/* Photo Card */}
          <ParallaxCard className={`${styles.bentoItem} ${styles.photoCard}`}>
            <div className={styles.imageOverlay} />
            <img src="/image/coding-setup.jpg" alt="Rahul coding setup" className={styles.codingImg} />
          </ParallaxCard>

          {/* Languages & Frameworks Card */}
          <ParallaxCard className={`${styles.bentoItem} ${styles.skillsCard}`}>
            <h3 className={styles.cardTitle}>Tech Stack</h3>
            <div className={styles.tagsGrid}>
              {skills.map(s => (
                <div key={s} className={styles.skillTag}>{s}</div>
              ))}
            </div>
          </ParallaxCard>

          {/* Stats Cards */}
          <ParallaxCard className={`${styles.bentoItem} ${styles.statCard}`}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Hackathons Won</div>
            <div className={styles.statGlow}></div>
          </ParallaxCard>

          <ParallaxCard className={`${styles.bentoItem} ${styles.statCard}`}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Systems Engineered</div>
            <div className={styles.statGlow}></div>
          </ParallaxCard>

          {/* Multimedia Array */}
          <ParallaxCard className={`${styles.bentoItem} ${styles.creativeCard}`}>
            <h3 className={styles.cardTitle}>Multimedia Array</h3>
            <div className={styles.tagsGrid}>
              {creative.map(c => (
                <div key={c} className={styles.creativeTag}>{c}</div>
              ))}
            </div>
          </ParallaxCard>

        </div>
      </div>
    </section>
  )
}
