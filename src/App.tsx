import {
	DownloadIcon,
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	HomeIcon,
	LinkedInLogoIcon,
	MoonIcon,
	SunIcon,
} from "@radix-ui/react-icons";
import { useLayoutEffect, useState } from "react";
import styles from "./App.module.css";

type Theme = "light" | "dark";

export default function App() {
	const [theme, setTheme] = useState<Theme>(() => {
		const saved = localStorage.getItem("theme") as Theme;
		if (saved) return saved;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	useLayoutEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((t) => (t === "light" ? "dark" : "light"));
	};

	return (
		<div className={styles.container}>
			<button
				type="button"
				className={styles.themeToggle}
				onClick={toggleTheme}
				aria-label="Toggle theme"
			>
				{theme === "light" ? (
					<MoonIcon className={styles.icon} />
				) : (
					<SunIcon className={styles.icon} />
				)}
			</button>

			<main>
				<div className={styles.card}>
					<div className={styles.intro}>
						<div className={styles.header}>
							<img
								src="/profile.jpg"
								alt="Fedor Chernin"
								className={styles.avatarImage}
								width={48}
								height={48}
								loading="lazy"
							/>
							<div className={styles.name}>
								Fedor Chernin
								<br />
								Tech Lead & System Architect
							</div>
						</div>

						<h1 className={styles.title}>
							Platform engineering for AI products
						</h1>
						<a
							className={styles.email}
							href="mailto:hello@cherninlab.com"
							aria-label="Email hello@cherninlab.com"
						>
							<EnvelopeClosedIcon className={styles.emailIcon} />
							hello@cherninlab.com
						</a>
						<div className={styles.location}>
							<HomeIcon className={styles.locationIcon} />
							Amsterdam, Netherlands
							<span className={styles.timezone}>UTC+1</span>
						</div>

						<div className={styles.description}>
							I design AI-enabled SaaS platforms: architecture, and service
							boundaries, optimized for compliance, reliability, and delivery
							speed.
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
								href="/Fedor_Chernin_CV_2026.pdf"
								className={`${styles.button} ${styles.download}`}
								download
							>
								<DownloadIcon className={styles.buttonIcon} /> CV.pdf
							</a>
						</div>
					</div>
				</div>

				<div>
					<div className={styles.skills}>
						{[
							"AI/LLM Integration",
							"System Architecture",
							"TypeScript",
							"Node.js",
							"Python",
							"Cloud & Reliability",
							"Kubernetes",
							"AWS/Azure/GCP/Cloudflare",
							"PostgreSQL",
						].map((skill) => (
							<span key={skill} className={styles.skill}>
								{skill}
							</span>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
