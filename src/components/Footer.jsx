import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="DRD." className={styles.logoImg} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline-block'; }} />
          <span style={{ display: 'none' }} className={styles.logoFallback}><span className={styles.logoAccent}>D</span>RD<span className={styles.logoAccent}>.</span></span>
        </div>
        <p className={styles.copy}>
          । जमी पे जन्मे जो आसमां पे रखते सर है ।
        </p>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
