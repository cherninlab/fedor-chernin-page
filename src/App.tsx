import { useState, useEffect } from 'react'
import {
  SunIcon,
  MoonIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DownloadIcon,
  HomeIcon,
} from '@radix-ui/react-icons'
import styles from './App.module.css'

type Theme = 'light' | 'dark'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={styles.container}>
      <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? (
          <MoonIcon className={styles.icon} />
        ) : (
          <SunIcon className={styles.icon} />
        )}
      </button>

      <main>
        <div className={styles.card}>
          <div className={styles.intro}>
            <div className={styles.label}>Full Stack Developer</div>
            <h1 className={styles.title}>Building Modern Web Solutions</h1>
            <div className={styles.role}>Fedor Chernin</div>
            <div className={styles.location}>
              <HomeIcon className={styles.locationIcon} />
              Amsterdam, Netherlands
            </div>
            <div className={styles.description}>
              Specializing in&nbsp;high-performance web applications and cloud architecture.
              I&nbsp;combine technical expertise with a&nbsp;focus on&nbsp;user experience
              to&nbsp;deliver scalable solutions that drive business&nbsp;growth.
            </div>
            <div className={styles.buttons}>
              <a
                href="https://linkedin.com/in/theodore-chernin"
                className={`${styles.button} ${styles.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className={styles.buttonIcon} /> LinkedIn
              </a>
              <a
                href="https://github.com/cherninlab"
                className={`${styles.button} ${styles.secondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className={styles.buttonIcon} /> GitHub
              </a>
              <a
                href="/Chernin_F_CV_2024_10.pdf"
                className={`${styles.button} ${styles.download}`}
                download
              >
                <DownloadIcon className={styles.buttonIcon} /> Download CV
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.label}>Core Technologies</div>
          <div className={styles.skills}>
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Next.js',
              'Cloud Architecture',
              'AWS',
              'Azure',
              'Docker',
              'Kubernetes',
            ].map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
