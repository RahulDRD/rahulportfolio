import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiInstagram } from 'react-icons/fi'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's <span>Connect</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Info panel */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.infoTitle}>Get In Touch</h3>
            <p className={styles.infoText}>
              Ready to collaborate on innovative projects? Whether you need development expertise,
              creative media production, or sound design services — let's bring your ideas to life.
            </p>

            <div className={styles.items}>
              <div className={styles.item}>
                <span className={styles.itemIcon}><FiMail size={18} /></span>
                <a href="mailto:rahulkumar291004@gmail.com" className={styles.itemText}>
                  rahulkumar291004@gmail.com
                </a>
              </div>
              <div className={styles.item}>
                <span className={styles.itemIcon}><FiMapPin size={18} /></span>
                <span className={styles.itemText}>Bhilai, Chhattisgarh, India</span>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/rahul-kumar-sahu-32ab002b9" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/RahulDRD" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="GitHub">
                <FiGithub size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://x.com/raahul_drd" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Twitter">
                <FiTwitter size={20} />
                <span>Twitter</span>
              </a>
              <a href="https://www.instagram.com/raahul.drd/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <FiInstagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className={`card ${styles.form}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Rahul Sahu"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              {sent ? 'Message Sent!' : <><FiSend size={16} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
