"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Command,
  Download,
  Github,
  GitBranch,
  Globe2,
  Linkedin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const profile = {
  name: "Marcos Lisoski",
  title: "Software Developer",
  focus: "Full-Stack & Backend Enthusiast · AI First",
  location: "Posadas, Misiones, Argentina",
  cv: "/cv/Marcos-Lisoski-Fullstack-Developer.pdf",
  email: "",
  github: "https://github.com/marcosnbl/",
  linkedin: "https://www.linkedin.com/in/marcosnbl/",
  whatsapp: "https://wa.me/+543764571058",
};

const experience = [
  {
    date: "Marzo 2026 — Actualidad",
    role: "QA Automation Engineer",
    company: "Accenture Argentina · Cliente Banco Santander",
    type: "Experiencia",
    description:
      "Desarrollé el framework de automatización para pruebas de APIs y backend con Python y Pytest. Colaboré con desarrolladores y arquitectos desde las primeras etapas de diseño para definir contratos de servicio e integrar las suites de pruebas en pipelines de CI/CD con GitHub Actions, optimizando los tiempos de ejecución.",
    tags: ["Python", "Pytest", "APIs & backend", "GitHub Actions", "CI/CD"],
  },
  {
    date: "Febrero 2022 — Febrero 2026",
    role: "QA Automation Engineer",
    company: "Personal Flow · Personal Argentina",
    type: "Experiencia",
    description:
      "Me sumé al proyecto de Catálogo Web y Smart TV. En un mes estabilicé la suite y aumenté la cobertura de pruebas automatizadas del 30 % al 90 %.\n\nEn Playback Mobile, tomé el proyecto de la aplicación para iOS, cuya suite presentaba numerosas pruebas fallidas e inestables. Corregí los tests flaky y reforcé la estabilidad de la suite, aumentando la cobertura del 40 % al 80 %.\n\nComo parte del equipo Playback Mobile, implementé con Java y Appium el framework de pruebas para Android TV y llevé la cobertura de pruebas automatizadas al 70 %. En la aplicación Android, amplié la cobertura al 80 % y contribuí a estabilizar la suite.\n\nMe sumé al equipo responsable del core de Flow, plataforma de series, películas y televisión en vivo. Aprendí pruebas de APIs desde cero y trabajé con Java y REST Assured. Estabilicé la suite y aumenté la cobertura de pruebas automatizadas al 80 %. También participé en pruebas de estrés y rendimiento para evaluar la estabilidad de la plataforma de cara al Mundial de Qatar 2022.",
    tags: [
      "Java",
      "Appium",
      "REST Assured",
      "iOS & Android",
      "Android TV",
      "API testing",
      "Stress testing",
    ],
  },
  {
    date: "Octubre 2021 — Febrero 2022",
    role: "QA Automation Engineer",
    company: "QActions Group",
    type: "Experiencia",
    description:
      "Trabajé desde cero en la construcción del framework de automatización para pruebas web con Python y Selenium, utilizando el patrón Page Object Model (POM), para un sistema de gestión de Swiss Medical Medicina Privada. En cuatro meses, llevé la cobertura de pruebas automatizadas del 0 % al 40 %.",
    tags: ["Python", "Selenium", "Page Object Model", "Web testing"],
  },
  {
    date: "Mayo 2021 — Octubre 2021",
    role: "QA Engineer",
    company: "Dirmod",
    type: "Experiencia",
    description:
      "Mi primera experiencia laboral en tecnología. Aprendí cómo se trabaja en proyectos reales y desarrollé mis primeros scripts de automatización con Python y Selenium. Trabajé en el análisis de requerimientos, el diseño de planes de prueba, y el reporte y seguimiento de errores e incidentes.\n\nParticipé en proyectos como un sistema de gestión para Biomakers, una app móvil de back office para AySA y un portal operativo para AD Barbieri.",
    tags: ["Python", "Selenium", "Test planning", "Bug tracking", "Web & mobile"],
  },
  {
    date: "2025 — 2027 · En curso",
    role: "Licenciatura en Informática",
    company: "Universidad Siglo XXI",
    type: "Educación",
    description: "Licenciatura en Informática en curso.",
    tags: ["2025–2027", "En curso"],
  },
  {
    date: "2022 — 2024 · Graduado",
    role: "Técnico Superior en Programación",
    company: "TECLAB Instituto Técnico",
    type: "Educación",
    description: "Título de Técnico Superior en Programación.",
    tags: ["2022–2024", "Graduado"],
  },
];

const skills = [
  {
    title: "Lenguajes de programación",
    icon: Braces,
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Globe2,
    items: ["React", "React Native", "Angular", "Next.js", "Node.js", "FastAPI"],
  },
  {
    title: "Automation frameworks",
    icon: Check,
    items: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Appium",
      "Pytest",
      "REST Assured",
      "Gherkin",
      "Postman",
    ],
  },
  {
    title: "Patrones y metodologías",
    icon: Command,
    items: ["Page Object Model (POM)", "Fixtures", "BDD / TDD", "SDD", "Scrum", "Kanban"],
  },
  { title: "Control de versiones", icon: GitBranch, items: ["Git", "GitLab", "GitHub"] },
  {
    title: "IA aplicada al desarrollo",
    icon: Sparkles,
    items: ["GitHub Copilot", "Claude Code", "Codex", "Devin", "Cursor"],
  },
];

const projects = [
  {
    number: "01",
    title: "Personal Planner",
    category: "ENTRENAMIENTO · WEB APP",
    description:
      "Proyecto personal de planificador semanal para organizar mis entrenamientos y registrar sesiones realizadas. Compara métricas planificadas y reales, muestra la evolución de kilómetros de las últimas 12 semanas y permite importar o exportar respaldos CSV y JSON. Los datos se guardan en el navegador.",
    stack: ["Next.js", "React", "TypeScript", "LocalStorage"],
    accent: "lime",
    demo: "https://personal-planner-dusky.vercel.app/",
    code: "https://github.com/marcosnbl/personal-planner",
  },
  {
    number: "02",
    title: "Developer Portfolio",
    category: "FRONTEND · PRODUCTO",
    description:
      "Este portfolio: una experiencia responsive, accesible y preparada para crecer junto con nuevos proyectos y aprendizajes.",
    stack: ["Next.js", "TypeScript", "Tailwind", "React"],
    accent: "blue",
    demo: "",
    code: "",
  },
  {
    number: "03",
    title: "Tu próximo proyecto",
    category: "IDEA EN CONSTRUCCIÓN",
    description:
      "El siguiente espacio destacado está listo. Cuando sumes un proyecto, aquí vas a poder contar el problema, las decisiones técnicas y el resultado.",
    stack: ["Tu stack", "Tu solución", "Tu historia"],
    accent: "violet",
    demo: "",
    code: "",
  }
];

const nav = [
  ["Sobre mí", "#sobre-mi"],
  ["Trayectoria", "#trayectoria"],
  ["Stack", "#stack"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
];

export default function Home() {
  const [light, setLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [filter, setFilter] = useState("Todo");
  const [expanded, setExpanded] = useState<number | null>(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState(
    "Hola 👋 Escribe help para explorar.",
  );

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 721px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  const visibleExperience = useMemo(
    () => experience.filter((item) => filter === "Todo" || item.type === filter),
    [filter],
  );
  const runCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    const responses: Record<string, string> = {
      help: "Comandos: about · skills · projects · contact · clear",
      about: `${profile.name} — ${profile.title}. Calidad de software, automatización y desarrollo.`,
      skills: "Python · TypeScript · React · Next.js · APIs · testing",
      projects: "Explorá los proyectos destacados en la sección #proyectos.",
      contact: "Encontrame en la sección #contacto.",
    };
    if (value === "clear") setTerminalOutput("Terminal reiniciada.");
    else
      setTerminalOutput(
        responses[value] ?? `Comando no encontrado: ${value}. Probá help.`,
      );
    setCommand("");
  };

  return (
    <main className={light ? "site light" : "site"}>
      <div className="noise" aria-hidden="true" />
      <header className="topbar" ref={headerRef}>
        <a
          className="brand"
          href="#inicio"
          aria-label="Marcos Lisoski, inicio"
          onClick={() => setMobileOpen(false)}
        >
          <span className="brand-mark">
            ML<span>.</span>
          </span>
          <span className="brand-name">
            Marcos<span>Lisoski</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <span className="availability">
            <i /> Disponible para nuevos desafíos
          </span>
          <button
            className="icon-button theme-toggle"
            onClick={() => setLight(!light)}
            aria-label={light ? "Activar modo oscuro" : "Activar modo claro"}
          >
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button mobile-menu"
            ref={menuButtonRef}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Navegación móvil"
          >
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}>
                {label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <h1>
            Construyo software
            <br />
            con <span className="display-accent">calidad en el ADN.</span>
          </h1>
          <p className="hero-lede">
            Soy {profile.name}, desarrollador de software con más de 5 años de experiencia
            en tecnología. Vengo del mundo de la calidad de software y hoy quiero
            construir —y no solo validar— aplicaciones confiables y útiles.
          </p>
          <div className="hero-roles">
            <span>{profile.title}</span>
            <b>·</b>
            <span>Full-Stack & Backend Enthusiast</span>
            <b>·</b>
            <span>AI First</span>
          </div>
          <div className="hero-buttons">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <ArrowUpRight size={17} />
            </a>
            <a className="button button-ghost" href={profile.cv} download>
              <Download size={16} /> Descargar CV (PDF)
            </a>
          </div>
          <div className="hero-social">
            <span className="social-label">ENCUÉNTRAME EN</span>
            <a
              href={
                profile.whatsapp
                  ? `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`
                  : undefined
              }
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              aria-disabled={!profile.whatsapp}
              className={
                profile.whatsapp
                  ? "social-link social-icon-only"
                  : "social-link social-icon-only disabled-link"
              }
              title={
                profile.whatsapp
                  ? "WhatsApp"
                  : "Agregá tu número de WhatsApp en src/app/page.tsx"
              }
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.7a8.8 8.8 0 0 1-13 7.7l-4.3 1.1 1.1-4.2a8.8 8.8 0 1 1 16.2-4.6Z" />
                <path d="M8.2 7.3c-.5-.5-1.2-.3-1.6.2-.6.6-1.4 1.5-1.2 2.8.2 1.6 1.7 3.7 3.6 5.5 2 1.8 4.2 3 5.7 3.1 1.3.1 2.3-.7 2.8-1.4.4-.5.4-1.1-.1-1.5l-1.9-1.4c-.4-.3-.9-.2-1.2.2l-.8 1c-1-.4-2.7-1.6-3.4-2.6l.7-.9c.3-.4.3-.9 0-1.2L8.2 7.3Z" />
              </svg>
            </a>
            <a
              href={profile.github || undefined}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              aria-disabled={!profile.github}
              className={
                profile.github
                  ? "social-link social-icon-only"
                  : "social-link social-icon-only disabled-link"
              }
              title={
                profile.github
                  ? "GitHub"
                  : "Agregá tu enlace de GitHub en src/app/page.tsx"
              }
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin || undefined}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              aria-disabled={!profile.linkedin}
              className={
                profile.linkedin
                  ? "social-link social-icon-only"
                  : "social-link social-icon-only disabled-link"
              }
              title={
                profile.linkedin
                  ? "LinkedIn"
                  : "Agregá tu enlace de LinkedIn en src/app/page.tsx"
              }
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-code-card">
            <div className="code-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>marcos.ts</span>
              <span className="code-dots">•••</span>
            </div>
            <div className="code-body">
              <div>
                <span className="ln">01</span>
                <span className="code-purple">const</span>{" "}
                <span className="code-cyan">developer</span> = &#123;
              </div>
              <div>
                <span className="ln">02</span>&nbsp;&nbsp;name:{" "}
                <span className="code-green">"Marcos"</span>,
              </div>
              <div>
                <span className="ln">03</span>&nbsp;&nbsp;focus: [
              </div>
              <div>
                <span className="ln">04</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">"Frontend"</span>,
              </div>
              <div>
                <span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">"Backend"</span>,
              </div>
              <div>
                <span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">"Quality"</span>
              </div>
              <div>
                <span className="ln">07</span>&nbsp;&nbsp;],
              </div>
              <div>
                <span className="ln">08</span>&nbsp;&nbsp;buildsWith:{" "}
                <span className="code-cyan">Curiosity</span>
              </div>
              <div>
                <span className="ln">09</span>&#125;;
                <span className="cursor" />
              </div>
            </div>
            <div className="code-footer">
              <span>
                <i /> Open to opportunities
              </span>
              <span>
                POS, AR <span className="flag">✳</span>
              </span>
            </div>
          </div>
          <div className="floating-chip chip-top">
            <span className="chip-icon">
              <Code2 size={16} />
            </span>
            <span>
              <b>Calidad</b>
              <small>En cada capa</small>
            </span>
          </div>
          <div className="floating-chip chip-bottom">
            <span className="chip-icon chip-icon-blue">
              <Sparkles size={16} />
            </span>
            <span>
              <b>Curiosidad activa,</b>
              <small>Siempre aprendiendo</small>
            </span>
          </div>
          <div className="visual-caption">
            <span>01 / 04</span>
            <span>DESARROLLO CONFIABLE, DE PUNTA A PUNTA</span>
          </div>
        </div>
        <a className="scroll-cue" href="#sobre-mi">
          <span className="scroll-dot" /> SCROLL PARA EXPLORAR{" "}
          <ArrowDownRight size={14} />
        </a>
      </section>

      <section className="about-section" id="sobre-mi">
        <div className="section-wrap about-layout">
          <div className="about-aside">
            <div className="section-kicker">
              <span>01</span> / SOBRE MÍ
            </div>
            <h2>
              Calidad como base.
              <br />
              <span className="muted-heading">Curiosidad como motor.</span>
            </h2>
            <figure className="profile-portrait">
              <div className="portrait-frame">
                <Image
                  src="/images/marcos-lisoski.jpeg"
                  alt="Retrato de Marcos Lisoski, sonriendo y con anteojos"
                  fill
                  sizes="(max-width: 720px) 220px, 250px"
                />
              </div>
              <figcaption><span aria-hidden="true" />Marcos Lisoski</figcaption>
            </figure>
            <div className="about-side-note">
              <span className="about-spark">✳</span>
              <div>
                <strong>Desde 2018</strong>
                <small>
                  Aprendiendo, creando
                  <br />y resolviendo problemas.
                </small>
              </div>
            </div>
            <a href="#contacto" className="about-contact-link">
              Hablemos de tecnología <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="about-copy">
            <p>
              ¡Hola! Soy Marcos, programador con más de cinco años de experiencia en
              desarrollo de software. Empecé mi carrera como QA Automation, trabajando en
              proyectos web, APIs y aplicaciones móviles. Ese recorrido me dio una mirada
              integral del desarrollo: aprendí a cuidar la calidad, colaborar
              estrechamente con equipos de producto y desarrollo, y acompañar una
              funcionalidad desde su diseño hasta su implementación.
            </p>
            <p>
              Me considero una persona impulsada por la disciplina, el aprendizaje
              continuo y la pasión por la tecnología. Comencé a programar en 2018 por
              curiosidad y me apasioné desde un principio. Me pareció una profesión
              perfecta para mí: metódica, creativa y desafiante. Aprendí de forma
              autodidacta, viendo videos de YouTube, tomando cursos online y construyendo
              mini proyectos propios. Luego, estudié y me recibí de Técnico en
              Programación y actualmente curso la Licenciatura en Informática.
            </p>
            <p>
              Lo que realmente me motiva es crear soluciones que marquen la diferencia y
              generen un impacto positivo. Hoy estoy enfocado en desarrollar
              funcionalidades y aplicaciones que lleguen a producción y funcionen
              correctamente. Trabajo con mentalidad AI First y busco dar el siguiente paso
              en mi carrera profesional como Frontend Developer o Full-Stack Developer,
              combinando criterio técnico con una visión de calidad, con foco en la
              experiencia y en el impacto en las personas.
            </p>
            <p>
              Me atrae trabajar en un lugar donde se prioricen las relaciones a largo
              plazo y el trabajo colaborativo, el trato cercano y humano, y la calidad
              técnica. Busco un lugar donde pueda aportar mi experiencia y seguir
              creciendo junto a un equipo colaborativo y de alto rendimiento.
            </p>
            <p>
              Por fuera del trabajo, seguramente me encontrarás corriendo: soy corredor
              amateur de ultradistancia. Me encanta viajar, disfrutar de la naturaleza y
              pasar tiempo al aire libre.
            </p>
            <p className="about-signoff">
              Si buscás a alguien apasionado por la tecnología, con experiencia en grandes
              proyectos y que le encanten los desafíos, ¡no dudes en contactarme!{" "}
              <span>🙌</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrap content-section" id="trayectoria">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>02</span> / RECORRIDO
            </div>
            <h2>
              Mi trayectoria
              <br />
              <span className="muted-heading">en tecnología.</span>
            </h2>
          </div>
          <p className="section-description">
            Mi experiencia abarca el testing de software, la automatización y el desarrollo de frameworks
             de pruebas; una
            base que hoy impulso hacia el desarrollo de software.
          </p>
        </div>
        <div className="timeline-controls" role="group" aria-label="Filtrar trayectoria">
          {["Todo", "Experiencia", "Educación"].map((choice) => (
            <button
              key={choice}
              onClick={() => setFilter(choice)}
              className={filter === choice ? "filter active" : "filter"}
            >
              {choice}
              <span>
                {choice === "Todo"
                  ? experience.length
                  : experience
                      .filter((x) => x.type === choice)
                      .length.toString()
                      .padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <div className="timeline">
          {visibleExperience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.date}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-marker">
                <i />
              </div>
              <div className="timeline-card">
                <button
                  className="timeline-card-head"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                >
                  <span className="timeline-title-group">
                    <small>{item.type.toUpperCase()}</small>
                    <strong>{item.role}</strong>
                    <span className="company">{item.company}</span>
                  </span>
                  <ChevronDown
                    className={expanded === index ? "chevron open" : "chevron"}
                    size={18}
                  />
                </button>
                {expanded === index && (
                  <div className="timeline-detail">
                    {item.description.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="tag-list">
                      {item.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="stack">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>03</span> / STACK TECNOLÓGICO
              </div>
              <h2>
                Herramientas para
                <br />
                <span className="muted-heading">resolver problemas.</span>
              </h2>
            </div>
            <p className="section-description">
              Tecnologías que forman parte de mi camino y del ecosistema en el que quiero
              seguir creciendo.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-head">
                  <span className={`skill-icon skill-icon-${index}`}>
                    <Icon size={18} />
                  </span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="skills-note">
            <span className="note-pulse" /> Las tecnologías que uso evolucionan; mi foco
            siempre es elegir la herramienta adecuada.
          </p>
        </div>
      </section>

      <section className="section-wrap content-section projects-section" id="proyectos">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span>04</span> / PROYECTOS
            </div>
            <h2>
              Ideas que toman
              <br />
              <span className="muted-heading">forma de proyecto.</span>
            </h2>
          </div>
          <a href="#contacto" className="text-link">
            ¿Hablamos? <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.accent}`}
              key={project.number}
            >
              <div className="project-art">
                <div className="art-glow" />
                <div className="art-frame">
                  <div className="art-frame-top">
                    <i />
                    <i />
                    <i />
                    <span>{project.category}</span>
                  </div>
                  {project.number === "01" ? (
                    <div className="planner-art">
                      <div className="planner-art-head">
                        <span>PLAN SEMANAL</span>
                        <b>LUNES — DOMINGO</b>
                      </div>
                      <div className="planner-days">
                        {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => (
                          <div
                            className={index === 5 ? "planner-day active" : "planner-day"}
                            key={day}
                          >
                            <span>{day}</span>
                            <i>{12 + index}</i>
                            <b />
                          </div>
                        ))}
                      </div>
                      <div className="planner-session">
                        <span className="planner-session-dot" />
                        <div>
                          <strong>Running</strong>
                          <small>Sesión planificada</small>
                        </div>
                        <span className="planner-session-status">PLAN</span>
                      </div>
                    </div>
                  ) : project.number === "02" ? (
                    <div className="browser-art">
                      <div className="browser-sidebar">
                        <b>
                          m<span>.</span>
                        </b>
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="browser-content">
                        <small>HOLA, SOY MARCOS</small>
                        <strong>
                          Software
                          <br />
                          Developer<span>.</span>
                        </strong>
                        <div className="browser-button">Ver proyectos ↗</div>
                      </div>
                    </div>
                  ) : (
                    <div className="idea-art">
                      <span>+</span>
                      <i />
                      <i />
                      <i />
                      <b>Tu idea, próximamente</b>
                    </div>
                  )}
                </div>
                <span className="art-counter">{project.number} / 03</span>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>
                  {project.title}
                  <ArrowUpRight size={17} />
                </h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="project-note">
                    {project.number === "01"
                      ? "Proyecto propio"
                      : project.number === "02"
                        ? "Estás aquí"
                        : "Espacio preparado"}
                  </span>
                </div>
                {(project.demo || project.code) && (
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Demo en vivo <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        <Github size={13} /> Código en GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        {/*<div className="project-disclaimer">
          <Sparkles size={15} />
          <span>
            El proyecto 03 es un espacio de ejemplo: reemplazalo por un proyecto real
            cuando quieras.
          </span>
        </div>*/}
      </section>

      <section className="cv-section" id="cv">
        <div className="section-wrap cv-layout">
          <div className="cv-intro">
            <div className="section-kicker">
              <span>05</span> / CV INTERACTIVO
            </div>
            <h2>
              Una historia
              <br />
              <span className="muted-heading">en evolución.</span>
            </h2>
            <p>
              Mi recorrido combina formación en programación, experiencia en calidad y el
              impulso por crecer construyendo software de punta a punta.
            </p>
            <a href={profile.cv} download className="button button-primary">
              <Download size={16} /> Descargar CV (PDF)
            </a>
            <span className="cv-hint">
              Mi currículum completo en formato PDF.
            </span>
          </div>
          <div className="cv-sheet">
            <div className="cv-sheet-top">
              <div>
                <span className="cv-monogram">ML</span>
                <div>
                  <strong>{profile.name}</strong>
                  <small>{profile.title}</small>
                </div>
              </div>
              <span className="cv-locale">{profile.location}</span>
            </div>
            <div className="cv-rule" />
            <div className="cv-summary">
              <span className="cv-label">PERFIL</span>
              <p>
                Profesional de software con trayectoria en automatización de calidad,
                testing de APIs y colaboración con equipos de desarrollo. Formación en
                programación y crecimiento continuo hacia el desarrollo backend y
                full-stack.
              </p>
            </div>
            <div className="cv-rule" />
            <div className="cv-experience">
              <span className="cv-label">EXPERIENCIA</span>
              {experience
                .filter((x) => x.type === "Experiencia")
                .slice(0, 3)
                .map((item) => (
                  <div className="cv-row" key={item.company}>
                    <span>{item.date}</span>
                    <div>
                      <strong>{item.role}</strong>
                      <small>{item.company}</small>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cv-rule" />
            <div className="cv-education">
              <span className="cv-label">FORMACIÓN</span>
              <div className="cv-row">
                <span>2025 — 2027</span>
                <div>
                  <strong>Licenciatura en Informática</strong>
                  <small>Universidad Siglo XXI · En curso</small>
                </div>
              </div>
              <div className="cv-row">
                <span>2022 — 2024</span>
                <div>
                  <strong>Técnico Superior en Programación</strong>
                  <small>TECLAB Instituto Técnico · Graduado</small>
                </div>
              </div>
            </div>
            <div className="cv-sheet-footer">
              <span>CALIDAD · AUTOMATIZACIÓN · DESARROLLO</span>
              <span>01 — 01</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-wrap">
          <div className="contact-layout">
            <div className="contact-copy">
              <div className="section-kicker">
                <span>06</span> / HABLEMOS
              </div>
              <h2>
                ¿Qué podemos
                <br />
                <span className="muted-heading">construir juntos?</span>
              </h2>
              <p>
                Me motiva trabajar en proyectos donde la tecnología genere un impacto
                positivo. Busco sumar mi experiencia a un equipo que valore la calidad
                técnica, el trabajo en equipo y la creación de productos útiles para las
                personas.
              </p>
              <div className="contact-meta">
                <span>
                  <i /> {profile.location}
                </span>
                <span className="contact-open">
                  <i /> Abierto a nuevas oportunidades
                </span>
              </div>
              <div className="contact-social">
                <a
                  href={
                    profile.whatsapp
                      ? `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`
                      : undefined
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  aria-disabled={!profile.whatsapp}
                  className={
                    profile.whatsapp
                      ? "social-link social-icon-only"
                      : "social-link social-icon-only disabled-link"
                  }
                  title={
                    profile.whatsapp
                      ? "WhatsApp"
                      : "Agregá tu número de WhatsApp en src/app/page.tsx"
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.5 11.7a8.8 8.8 0 0 1-13 7.7l-4.3 1.1 1.1-4.2a8.8 8.8 0 1 1 16.2-4.6Z" />
                    <path d="M8.2 7.3c-.5-.5-1.2-.3-1.6.2-.6.6-1.4 1.5-1.2 2.8.2 1.6 1.7 3.7 3.6 5.5 2 1.8 4.2 3 5.7 3.1 1.3.1 2.3-.7 2.8-1.4.4-.5.4-1.1-.1-1.5l-1.9-1.4c-.4-.3-.9-.2-1.2.2l-.8 1c-1-.4-2.7-1.6-3.4-2.6l.7-.9c.3-.4.3-.9 0-1.2L8.2 7.3Z" />
                  </svg>
                </a>
                <a
                  href={profile.github || undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  aria-disabled={!profile.github}
                  className={
                    profile.github
                      ? "social-link social-icon-only"
                      : "social-link social-icon-only disabled-link"
                  }
                  title={
                    profile.github
                      ? "GitHub"
                      : "Agregá tu enlace de GitHub en src/app/page.tsx"
                  }
                >
                  <Github size={16} />
                </a>
                <a
                  href={profile.linkedin || undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  aria-disabled={!profile.linkedin}
                  className={
                    profile.linkedin
                      ? "social-link social-icon-only"
                      : "social-link social-icon-only disabled-link"
                  }
                  title={
                    profile.linkedin
                      ? "LinkedIn"
                      : "https://www.linkedin.com/in/marcosnbl/"
                  }
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-bottom">
            <a href="#inicio" className="brand">
              <span className="brand-mark">
                ML<span>.</span>
              </span>
              <span className="brand-name">
                Marcos<span>Lisoski</span>
              </span>
            </a>
            <span>
              Diseñado y desarrollado con curiosidad <span className="heart">♥</span>
            </span>
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="terminal-trigger"
            >
              <Command size={14} /> {terminalOpen ? "Cerrar terminal" : "Abrir terminal"}
            </button>
            <span>© 2026</span>
          </div>
        </div>
      </section>
      {terminalOpen && (
        <div className="terminal-panel" role="region" aria-label="Terminal interactiva">
          <div className="terminal-bar">
            <span>
              <Terminal size={14} /> marcos@portfolio:~
            </span>
            <button onClick={() => setTerminalOpen(false)} aria-label="Cerrar terminal">
              <X size={16} />
            </button>
          </div>
          <p className="terminal-output">{terminalOutput}</p>
          <form onSubmit={runCommand}>
            <span>❯</span>
            <input
              autoFocus
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="help"
              aria-label="Comando de terminal"
            />
          </form>
        </div>
      )}
    </main>
  );
}
