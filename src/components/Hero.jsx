import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLinkedin, FiTwitter, FiCode, FiMusic, FiPlayCircle, FiInstagram } from 'react-icons/fi'
import styles from './Hero.module.css'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      })
    }
  }

  return (
    <section 
      className={styles.hero} 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Cursor Glow */}
      <motion.div 
        className={styles.cursorGlow}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 200, mass: 0.5 }}
      />

      {/* Parallax Background Elements */}
      <motion.div style={{ y, opacity }} className={styles.bgElements}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        
        {/* Floating Icons */}
        <motion.div 
          className={styles.iconCode} 
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
          <FiCode size={48} />
        </motion.div>
        
        <motion.div 
          className={styles.iconMusic} 
          animate={{ y: [0, -25, 0], rotate: [0, -5, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}>
          <FiMusic size={48} />
        </motion.div>

        <motion.div 
          className={styles.iconPlay} 
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}>
          <FiPlayCircle size={48} />
        </motion.div>
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className={styles.glitch} data-text="Rahul Kumar Sahu">
              Rahul Kumar Sahu
            </span>
          </motion.h1>

          <motion.div
            className={styles.roleContainer}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={styles.role}>
              <span className={styles.bracket}>&lt;</span>
              Full Stack Developer &amp; Multimedia Artist
              <span className={styles.bracket}>/&gt;</span>
            </h2>
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building next-generation digital experiences. Expert in <span className={styles.highlight}>React, Python & C++</span>.
            Merging technical precision with creative sound & video design. 🏆 Winner at multiple national hackathons.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              <span className={styles.btnGlow}></span>
              Initialize Projects
              <FiExternalLink />
            </a>
            
            <div className={styles.socials}>
              <a href="https://github.com/RahulDRD" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FiGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/rahul-kumar-sahu-32ab002b9" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FiLinkedin size={22} />
              </a>
              <a href="https://x.com/raahul_drd" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FiTwitter size={22} />
              </a>
              <a href="https://www.instagram.com/raahul.drd/" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FiInstagram size={22} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className={styles.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className={styles.mouse}>
          <motion.div 
            className={styles.wheel}
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
